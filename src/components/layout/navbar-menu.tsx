
import Link from "next/link"
import { Button } from "../ui/button"
import { getServerAuthSession } from "~/server/auth"
import { IconAccessible, IconAlbum, IconBrandOpenSource, IconHome, IconHomeQuestion, IconQuote, IconStretching, IconTrendingUp, IconUser } from "@tabler/icons-react";


export default async function Nav() {
  const session  = await getServerAuthSession();
  console.log(session)
  
  return (
    <header key="1" className="md:flex lg:flex md:flex-col lg:flex-col  hidden md:justify-around lg:justify-around h-[100vh] w-[25rem] border-x-2 border-gray-950 px-10 py-10">
      <Link className="mr-6" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/">
        <div><IconHome height={30} width={30}/></div>
        <span className="text-xl font-semibold">Home</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/communities">
      <div><IconBrandOpenSource height={30} width={30}/></div>
        <span className="text-xl font-semibold">Communities</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/trending-project">
      <div><IconTrendingUp height={30} width={30}/></div>
        <span className="text-xl font-semibold">Trending Projects</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/experiences">
      <div><IconAlbum height={30} width={30}/></div>
        <span className="text-xl font-semibold">Interview Experiences</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/new-issue">
      <div><IconQuote height={30} width={30}/></div>
        <span className="text-xl font-semibold">Create Issue</span>
      </Link>
      <Link className="mr-6 flex items-center gap-2 " href="/profile">
      <div><IconUser height={30} width={30}/></div>
        <span className="text-xl font-semibold">Profile</span>
      </Link>
      <div className="ml-auto flex items-center gap-2">
        {session?.user ? <span className="font-semibold">Logged in as {session?.user?.id }</span> : <span className="font-semibold">Login to Continue</span>}
     {!session?.user ? <Link
               href={"/api/auth/signin"}
               className="rounded-full  px-10 py-3 font-semibold no-underline transition "
             >
                <Button >Sign in</Button>
        </Link>
      :
      <Link
               href={"/api/auth/signout"}
               className="rounded-full  px-10 py-3 font-semibold no-underline transition "
             >
                <Button variant={"secondary"}>Logout</Button>
        </Link>  
      }
             
      </div>
    </header>
  )
}
function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
