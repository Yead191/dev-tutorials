"use client";

import { ArrowRightIcon, Briefcase, Paintbrush, Code, Megaphone } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "../SectionTitle";
import { Database } from "lucide-react";
import { Shield } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Paintbrush2 } from "lucide-react";
import { Cloud } from "lucide-react";
import { MegaphoneIcon } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Data Science",
    icon: Database,
  },
  {
    id: 2,
    title: "Cybersecurity",
    icon: Shield,
  },
  {
    id: 3,
    title: "Project Management",
    icon: ClipboardCheck,
  },
  {
    id: 4,
    title: "Web Development",
    icon: Code,
  },
  {
    id: 5,
    title: "Mobile Development",
    icon: Smartphone,
  },
  {
    id: 6,
    title: "Design",
    icon: Paintbrush2,
  },
  {
    id: 7,
    title: "Cloud Computing",
    icon: Cloud,
  },
  {
    id: 8,
    title: "Marketing",
    icon: MegaphoneIcon,
  }
];


const Categories = () => {
  return (
    <section id="categories" className="space-y-6 py-8 md:py-12  bg-lightBg p-2">
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
              href="/courses"
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
