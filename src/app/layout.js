import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/MainNav";
import { AuthProvider } from "./AuthProvider";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

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
    title: "Home",
    href: "/",
  },
  {
    title: "Browse Courses",
    href: "/courses",
  },
  {
    title: "Features",
    href: "/features",
  },

  {
    title: "Contact",
    href: "/contact",
  }
];

export default async function RootLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <AuthProvider>

      <html lang="en" data-theme="light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster></Toaster>
          <main className="flex flex-col min-h-screen">
            <header className="z-40  bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
              <div className="lg:container mx-auto flex  items-center justify-between py-2 lg:py-3">
                <MainNav items={navLinks} user={user} />
              </div>
            </header>
            <div className="mt-16 flex-grow">

              {children}
            </div>
            <Footer></Footer>
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
