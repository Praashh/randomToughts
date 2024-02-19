import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./floating-nav";
import Nav from "./navbar-menu";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    // <div className="flex flex-col justify-between h-[100vh] bg-red-500">
    <Nav />
      // {/* <HoveredLink/> */}
      // {/* <FloatingNav navItems={navItems} /> */}
    // </div>
  );
}

