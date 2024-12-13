import type { Metadata } from "next";
import "./globals.css";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Nextjs Lenis Parallax Scrolling",
  description: "Nextjs Lenis Parallax Scrolling, inspired by Codegrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
