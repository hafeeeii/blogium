import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function AppLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
