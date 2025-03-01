"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        alert(`Subscribed successfully with ${email}`);
        setEmail(""); // Reset input field
    };

    return (
        <section className="py-12  dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    📩 Stay Updated with Dev Tutorials!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Get exclusive tutorials, updates, and industry insights delivered to your inbox.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1.5 text-gray-500 dark:text-gray-400" />
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Button onClick={handleSubscribe} className="bg-blue-600 hover:bg-blue-700 text-white">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
}
