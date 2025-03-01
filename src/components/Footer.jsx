import { Linkedin } from "lucide-react";
import Newsletter from "./Home/Newsletter";
import { Twitter } from "lucide-react";
import { Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 text-slate-800 py-6">
            <div className=" container  mx-auto px-4 grid md:grid-cols-3 items-center">
                <div>

                    <h2 className="text-2xl xl:text-3xl font-semibold">Dev Tutorials</h2>
                    <p className="mt-1 text-gray-700">
                        Empowering developers with high-quality tutorials, courses, and resources to master modern web technologies.
                    </p>
                    <p className="mt-6 text-sm">
                        Developed by Yead with Next.js and ShadCN
                    </p>
                    <div className="flex  gap-4 py-4">
                        <a href={"https://www.linkedin.com/in/md-asadur-rahaman-yead/"} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-all hover:scale-110 duration-500" />
                        </a>
                        <a href={"#"} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-600 transition-all   hover:scale-110 duration-500" />
                        </a>
                        <a href={"https://yead-portfolio.netlify.app/"} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all  hover:scale-110 duration-500" />
                        </a>
                    </div>

                    <p className="mt-1 text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} Dev Tutorials. All rights reserved.
                    </p>
                </div>

                <nav className=" flex justify-center space-x-6 text-gray-600">
                    <span className="cursor-pointer hover:text-blue-400 transition">Courses</span>
                    <span className="cursor-pointer hover:text-blue-400 transition">Blog</span>
                    <span className="cursor-pointer hover:text-blue-400 transition">Community</span>
                    <span className="cursor-pointer hover:text-blue-400 transition">Support</span>
                </nav>
                <Newsletter></Newsletter>

            </div>
        </footer>
    );
}
