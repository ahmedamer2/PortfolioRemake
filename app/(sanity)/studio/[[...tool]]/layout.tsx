import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Ahmed Portfolio Sanity Studio",
  description: "Sanity Studio for Ahmed Amer Portfolio",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
