import type React from "react";
import { Footer } from "@/components/footer";
import Header from "@/components/tour-header";

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
