
import { redirect } from "next/navigation";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";


export default async function Page() {
  // const hello = await api.post.hello.query({ text: "Praash" });
  const session = await getServerAuthSession();

  if(!session?.user){
    return redirect("/signup");
  }

  return (
      <>
         Home
      </>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      <CreatePost />
    </div>
  );
}
