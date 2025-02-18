"use client";

import { ArrowRightIcon, BookOpenText } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "../SectionTitle";


const sampleCourses = [
    {
        id: 1,
        title: "Advanced Python Course",
        category: "Design",
        thumbnail: "/images/courses/python.png",
        chapters: 2,
        price: 19.99,
    },
    {
        id: 2,
        title: "Advance Vue.js",
        category: "Design",
        thumbnail: "/images/courses/vue.png",
        chapters: 2,
        price: 14.99,
    },
    {
        id: 3,
        title: "JavaScript Mastery",
        category: "Design",
        thumbnail: "/images/courses/javascript.png",
        chapters: 2,
        price: 15.99,
    },
    {
        id: 4,
        title: "React Zero To Hero",
        category: "Design",
        thumbnail: "/images/courses/react.png",
        chapters: 2,
        price: 9.99,
    }
];

const Courses = () => {
    return (
        <section id="courses" className="container space-y-6 md:py-12 lg:py-24">
            <div className="flex items-center justify-between">
                <SectionTitle>Courses</SectionTitle>
                <Link href="/courses" className="text-sm font-medium hover:opacity-80 flex items-center gap-1">
                    Browse All <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {sampleCourses.map((course) => (
                    <div key={course.id} className="rounded-lg border bg-background p-4 shadow-md hover:scale-105 transition-all duration-300">
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <div className="mt-4 space-y-2">
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-sm text-gray-500">{course.category}</p>
                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                                <BookOpenText className="w-4 h-4" />
                                <span>{course.chapters} Chapters</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-lg font-semibold">${course.price.toFixed(2)}</span>
                                <Link href={`#`} className="text-blue-600 font-medium text-sm flex items-center">
                                    ${course.price.toFixed(2)} | Enroll <ArrowRightIcon className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
