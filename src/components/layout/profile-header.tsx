import Link from "next/link";
import { Button } from "../ui/button";
import { getServerAuthSession } from "~/server/auth";

export default async function ProfileHeader(){

    const session = await getServerAuthSession();
    console.log(session);
    
    return (
        <div>
        {!session?.user ? (
          <Link
            href={"/api/auth/signin"}
            className="rounded-full  px-10 py-3 font-semibold no-underline transition "
          >
            <Button variant="outline">Sign in</Button>
          </Link>
        ) : (
          <>
          user-profile-dropdown
          <Link
            href={"/api/auth/signout"}
            className="rounded-full  px-10 py-3 font-semibold no-underline transition "
          >
            <Button variant={"secondary"}>Logout</Button>
          </Link>
          </>
        )}
      </div>
    )
}