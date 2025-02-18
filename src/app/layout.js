import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev Tutorials",
  description: "Generated by create next app",
};
const navLinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Browse Courses",
    href: "/courses",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <nav>
            <MainNav items={navLinks}></MainNav>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
