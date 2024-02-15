
import Link from "next/link"
import { Button } from "../ui/button"
import { getServerAuthSession } from "~/server/auth"


export default async function Nav() {
  const session  = await getServerAuthSession();
  console.log(session)
  
  return (
    <header key="1" className="flex h-16 w-full items-center border-b  px-4 md:px-6">
      <Link className="mr-6" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="ml-auto flex gap-2">
        {session?.user ? <span>Logged in as {session?.user?.id }</span> :
      <Link
               href={session ? "/api/auth/signout" : "/api/auth/signin"}
               className="rounded-full  px-10 py-3 font-semibold no-underline transition "
             >
               <Button >Sign</Button>
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
