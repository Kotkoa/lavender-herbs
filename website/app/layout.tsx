import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lavender·Herbs — Pure lavender from field to bottle",
  description:
    "Essential oil, hydrosol, dried flowers and agrotourism. Lavandula angustifolia cultivated with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
