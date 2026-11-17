import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sowmya | Personal Portfolio",
  description: "CS student who likes to explore new things and coding. Portfolio of Sowmya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080c14] text-slate-100 antialiased tech-grid-pattern min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
