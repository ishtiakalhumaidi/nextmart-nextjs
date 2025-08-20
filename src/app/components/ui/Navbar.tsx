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
    <div className="flex justify-between max-w-10/12 mx-auto font-poppins pt-8 items-center">
      <Link className="text-4xl font-bold text-blue-300 " href={"/"}>
        NextMart
      </Link>
      <div>
        <ul className="flex gap-4 items-center">
          {navLinks.map((nav) => (
            <Link
              className={`${
                nav.link === pathname &&
                "border-2 bg-white/30 text-blue-300 font-bold"
              } py-1 px-2 rounded-full border-2 border-transparent hover:bg-white/40 hover:border-white  duration-50`}
              key={nav.link}
              href={nav.link}
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Link
          href={""}
          className="bg-white text-xl rounded-2xl py-2 px-3 text-black hover:bg-transparent border-2 border-white hover:text-white duration-300 "
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
