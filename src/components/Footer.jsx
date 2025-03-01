export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-slate-800 py-6">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-2xl xl:text-3xl font-semibold">Dev Tutorials</h2>
                <p className="mt-1 text-gray-700">
                    Empowering developers with high-quality tutorials, courses, and resources to master modern web technologies.
                </p>

                <nav className="mt-4 flex justify-center space-x-6 text-gray-600">
                    <span className="cursor-pointer hover:text-black transition">Courses</span>
                    <span className="cursor-pointer hover:text-black transition">Blog</span>
                    <span className="cursor-pointer hover:text-black transition">Community</span>
                    <span className="cursor-pointer hover:text-black transition">Support</span>
                </nav>

                <p className="mt-6 text-sm">
                    Developed by Yead with Next.js and ShadCN
                </p>

                <p className="mt-1 text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} Dev Tutorials. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
