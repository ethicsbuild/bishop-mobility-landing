import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishop Mobility Solutions | Freedom at Your Side",
  description: "Innovative cane holster designed by hands that know. Maintain your independence with dignity. Patent-pending belt-mounted cane holder for those with arthritis and reduced grip strength.",
  keywords: "cane holder, mobility aid, arthritis, independence, assistive device, belt-mounted cane holder, senior mobility",
  openGraph: {
    title: "Bishop Mobility Solutions | Freedom at Your Side",
    description: "Innovative cane holster designed by hands that know. Maintain your independence with dignity.",
    type: "website",
  },
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