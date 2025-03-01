"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function MainNav({ items, user }) {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex justify-between items-center py-0 px-6 w-full">
            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <button className="lg:hidden">
                        <Menu />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                    <div className="flex flex-col gap-4 p-4">
                        {items?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "text-lg relative pb-1",
                                    pathname === item.href
                                        ? "text-primary font-bold border-b-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-500"
                                        : ""
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                        
                    </div>
                </SheetContent>
            </Sheet>

            <Link href="/">
                <Logo />
            </Link>

            <nav className="hidden lg:flex gap-6">
                {items?.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "text-md font-medium font-serif transition-colors hover:text-foreground/80 relative pb-1",
                            pathname === item.href
                                ? "text-primary font-bold border-b-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-500"
                                : ""
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>

            {/* User Authentication Controls */}
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={user.picture || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem>
                            <div className="flex flex-col text-sm">
                                <span className="font-medium">{user.given_name || "User"}</span>
                                <span className="text-xs text-gray-500">{user.email}</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setIsModalOpen(true)}>
                            Update Profile
                        </DropdownMenuItem>
                        <LogoutLink>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </LogoutLink>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <div className="hidden lg:flex items-center gap-3">
                    <Button size="sm">
                        <LoginLink>Login</LoginLink>
                    </Button>
                    <Button variant="outline" size="sm">
                        <RegisterLink>Register</RegisterLink>
                    </Button>
                </div>
            )}

            {/* Profile Update Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
                    <form className="flex flex-col gap-3">
                        <Input type="text" placeholder="Full Name" defaultValue={user?.given_name} />
                        <Input type="email" placeholder="Email" defaultValue={user?.email} disabled />
                        <Button type="submit">Save Changes</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
