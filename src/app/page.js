import Categories from "@/components/Home/Categories";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <Categories></Categories>
      <Courses></Courses>
    </div>
  );
}
