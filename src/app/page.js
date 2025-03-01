import Categories from "@/components/Home/Categories";
import Courses from "@/components/Home/Courses";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import Instructors from "@/components/Home/Instructors";
import Testimonials from "@/components/Home/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <Categories></Categories>
      <Courses></Courses>
      <Testimonials></Testimonials>
      <Instructors></Instructors>
      <Faq></Faq>
    </div>
  );
}
