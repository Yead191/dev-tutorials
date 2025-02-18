"use client";

import { ArrowRightIcon, Briefcase, Paintbrush, Code, Megaphone } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "../SectionTitle";

const categories = [
  {
    id: 1,
    title: "Business",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Design",
    icon: Paintbrush,
  },
  {
    id: 3,
    title: "Development",
    icon: Code,
  },
  {
    id: 4,
    title: "Marketing",
    icon: Megaphone,
  }
];

const Categories = () => {
  return (
    <section id="categories" className="space-y-6 py-8 md:py-12 lg:py-24 bg-lightBg">
      <div className="container flex items-center justify-between">
        <SectionTitle>Categories</SectionTitle>
        <Link href="" className="text-sm font-medium hover:opacity-80 flex items-center gap-1">
          Browse All <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              href="#"
              key={category.id}
              className="relative overflow-hidden rounded-lg border bg-background p-4 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col gap-4 items-center justify-between rounded-md p-6">
                <Icon className="w-12 h-12 text-primary" />
                <h3 className="font-bold">{category.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
