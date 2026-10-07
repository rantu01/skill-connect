import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Skills Connect",
  description:
    "RPL evidence preparation, trade licensing advisory and migration skills assessment guidance for experienced Australian workers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${barlow.variable} font-body`}>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}