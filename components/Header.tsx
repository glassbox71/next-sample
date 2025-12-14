"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-6 p-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/man">Men</Link>
      <Link href="/women">Women</Link>
      <Link href="/kids">Kids</Link>
    </header>
  );
}
