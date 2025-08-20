"use client";
import Link from "next/link";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const navLinks = (
      <>
        {" "}
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </>
    );
    return (
      <div className="flex justify-between max-w-10/12 mx-auto">
        <Link className="text-4xl font-bold text-blue-300" href={"/"}>NextMart</Link>
        <div>
          <ul className="flex gap-3">{navLinks}</ul>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}
