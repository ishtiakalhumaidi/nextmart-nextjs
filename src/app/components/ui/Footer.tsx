"use client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaFacebook className="text-blue-500" />
          </a>
          <a>
            <FaXTwitter />
          </a>
          <a>
            <FaInstagram className="text-pink-400" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-blue-300">NextMart </span>
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
