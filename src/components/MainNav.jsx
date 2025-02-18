"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Logo } from "./Logo";

export function MainNav({ items }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="flex justify-between items-center py-4 px-6 border-b">
            <Link href="/">
                <Logo />
            </Link>

            <nav className="hidden lg:flex gap-6">
                {items?.map((item, index) => (
                    <Link
                        key={index}
                        // href={item.disabled ? "#" : item.href}
                        href={"#"}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-foreground/80"
                        )}>
                        {item.title}
                    </Link>
                ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
                <Link
                    href="/"
                    className={cn(buttonVariants({ size: "sm" }), "px-4")}>
                    Login
                </Link>
                <Button variant="outline" size="sm">
                    Register
                </Button>
            </div>

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                    <button className="lg:hidden">
                        <Menu />
                    </button>
                </DrawerTrigger>
                <DrawerContent side="left">
                    <div className="flex flex-col gap-4 p-4">
                        {items?.map((item, index) => (
                            <Link key={index} href={item.href} className="text-lg">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </DrawerContent>

            </Drawer>
        </div>
    );
}
