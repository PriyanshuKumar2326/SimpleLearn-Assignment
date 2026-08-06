import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexcent | Membership Growth Platform",
  description:
    "A polished, responsive landing page for a membership management platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#263238] antialiased">
        {children}
      </body>
    </html>
  );
}
