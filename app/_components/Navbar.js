"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const menuList = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Events",
      path: "/events",
    },
    {
      id: 3,
      name: "Team",
      path: "/team",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contactus",
    },
  ];

  const path = usePathname();
  return (
    <div className="flex gap-8 justify-center items-center p-5 text-white text-xl bg-transparent">
      
      {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={` ${
              path == menu.path && ` text-white  px-5 rounded-full bg-black bg-opacity-50`
            }`}
          >
            {menu.name}
          </Link>
        ))}
    </div>
  );
}

export default Navbar;
