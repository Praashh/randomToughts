
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";


export default async function Page() {
  // const hello = await api.post.hello.query({ text: "Praash" });
  const session = await getServerAuthSession();

  // if(!session?.user){
  //   return redirect("/signup");
  // }

  return (
      <>
         Home
      </>
  );
}