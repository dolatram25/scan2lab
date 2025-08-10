'use client';

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import { TestProvider } from "@/context/TestContext"; // ✅ Import your context

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNav = pathname.startsWith("/auth");

  return (
    <TestProvider> {/* ✅ Wrap everything in your context provider */}
      {!hideNav && <NavBar />}
      {children}
    </TestProvider>
  );
}
