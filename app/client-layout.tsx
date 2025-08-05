'use client';

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/auth");

  return (
    <>
      {!hideNav && <NavBar />}

      {children}
    </>
  );
}
