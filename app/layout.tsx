import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meekturna - Yanga | New Single",
  description: "Experience the vibrant energy of Meekturna's latest hit, "Yanga." Dive into the rhythm and feel the power of music that moves you. Listen now!p",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
