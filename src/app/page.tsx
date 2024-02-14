import { unstable_noStore as noStore } from "next/cache";
import { Navbar } from "~/components/layout/navbar";
import { Home } from "./_components/Home";
import { IconActivity } from "@tabler/icons-react";

// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";

export default async function Page() {
  noStore();
  // const hello = await api.post.hello.query({ text: "Praash" });
  // const session = await getServerAuthSession();

  return (
    // <Button>Praash</Button>
    <>
    <Navbar />
    <Home />
    <div className="flex flex-col items-center justify-center">
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Start Sharing your thoughts <IconActivity/>
    </button>
    </div>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    
    //     <div className="flex flex-col items-center gap-2">
    //       <p className="text-2xl text-white">
    //         {hello ? hello.greeting : "Loading tRPC query..."}
    //       </p>

    //       <div className="flex flex-col items-center justify-center gap-4">
    //         <p className="text-center text-2xl text-white">
    //           {session && <span>Logged in as {session.user?.id}</span>}
    //         </p>
    //         <Link
    //           href={session ? "/api/auth/signout" : "/api/auth/signin"}
    //           className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
    //         >
    //           <Button >{session ? "Sign out" : "Sign in"}</Button>
    //         </Link>
    //       </div>
    //     </div>

    //     <CrudShowcase />
    // </main>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <>
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//         {/* <Image src={session.user.image} alt="Profile picture" width={200} height={200} /> */}
//         </>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
