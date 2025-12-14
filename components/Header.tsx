"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-6 p-4 border-b">
      <div className="header-left">
        <h1 className="logo">
          <Link href="/">
            <img src="./logo.svg" alt="" />
          </Link>
        </h1>
        <div>
          <ul className="main-menu">
           
           <li><Link href="/man">Men</Link></li>
           <li><Link href="/women">Women</Link></li>
          <li> <Link href="/kids">Kids</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
