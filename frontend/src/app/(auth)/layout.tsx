import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="flex flex-col bg-black h-full">
      {children}
    </div>
  );
}
