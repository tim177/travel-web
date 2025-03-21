import type React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
