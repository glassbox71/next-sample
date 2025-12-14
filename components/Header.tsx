"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";



export default function Header() {
  const { user, onLogout } = useAuthStore();
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
      <div>
        <ul>
        {!user ? (
          <li><Link href="/login">Login</Link></li>
        ) : (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
      </div>
      </div>
    </header>
  );
}
