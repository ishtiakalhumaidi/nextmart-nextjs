"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  type NavLink = {
    name: string;
    link: string;
  };
  type NavLinks = NavLink[];
  const navLinks: NavLinks = [
    { name: "Home", link: "/" },
    { name: "Product List", link: "/products" },
  ];

  return (
    <div className="flex justify-between px-30
   font-poppins py-4 items-center fixed w-full mx-auto z-50 bg-gray-100">
      <Link className="text-4xl font-bold text-blue-300 " href={"/"}>
        NextMart
      </Link>
      <div>
        <ul className="flex gap-4 items-center">
          {navLinks.map((nav) => (
            <Link
              className={`${
                nav.link === pathname
                  ? "btn-outline border-transparent bg-blue-300"
                  : "btn-ghost hover:bg-blue-300 border-transparent"
              } btn rounded-2xl border-2 text-black`}
              key={nav.link}
              href={nav.link}
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Link href={""} className="btn btn-neutral rounded-2xl btn-lg ">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
