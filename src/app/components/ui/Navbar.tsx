"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
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
    { name: "Add Product", link: "/dashboard/add-product" },
  ];
  const { data: session, status } = useSession();

  return (
    <div className="">
      <div className="drawer bg-base-300 fixed z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar  w-10/12 mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Link
                className=" text-2xl lg:text-4xl font-bold text-blue-300 "
                href={"/"}
              >
                NextMart
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks.map((nav) => (
                  <li key={nav.link}>
                    <Link
                      className={`${
                        nav.link === pathname
                          ? "btn-outline border-transparent bg-blue-300"
                          : "btn-ghost hover:bg-blue-300 border-transparent"
                      } btn rounded-2xl border-2 text-black`}
                      href={nav.link}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {status === "unauthenticated" ? (
              <Link
                href={"/login"}
                className="btn btn-neutral rounded-2xl md:btn-lg "
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                {session?.user?.image && (
                  <Image
                    width={42}
                    height={42}
                    src={session.user.image}
                    alt={session.user.name ?? "User Avatar"}
                    className="rounded-full border-2 border-primary hidden md:flex"
                  />
                )}{" "}
                <button
                  onClick={() => signOut()}
                  className="btn btn-error rounded-2xl btn-xs lg:btn-md font-bold border-transparent "
                >
                  Logout
                </button>{" "}
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {navLinks.map((nav) => (
              <li key={nav.link}>
                <Link
                  className={`${
                    nav.link === pathname
                      ? "btn-outline border-transparent bg-blue-300"
                      : "btn-ghost hover:bg-blue-300 border-transparent"
                  } btn  rounded-2xl border-2 text-black`}
                  href={nav.link}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
