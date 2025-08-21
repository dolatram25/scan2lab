'use client';

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import { TestProvider } from "@/context/TestContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/auth");

  return (
    <TestProvider>
      {!hideNav && <NavBar />}
      {children}
    </TestProvider>
  );
}
