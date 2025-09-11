"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const items = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  return (
    <div className="h-14 flex items-center justify-end px-4">
      {items.map((item, idx) => (
        <Link href={item.href} key={idx}>
          <Button variant={"ghost"}>{item.label}</Button>
        </Link>
      ))}
      <Link href={"/sign-in"} className="ml-2">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
}
