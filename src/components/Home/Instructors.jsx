import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";

const instructors = [
    {
        name: "Sarah Johnson",
        role: "Senior React Developer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        linkedin: "#",
        twitter: "#",
        website: "#",
    },
    {
        name: "Michael Lee",
        role: "Full-Stack Engineer",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        linkedin: "#",
        twitter: "#",
        website: "#",
    },
    {
        name: "Emily Davis",
        role: "UI/UX Expert",
        image: "https://randomuser.me/api/portraits/women/38.jpg",
        linkedin: "#",
        twitter: "#",
        website: "#",
    },
    {
        name: "David Martinez",
        role: "Cloud Computing Specialist",
        image: "https://randomuser.me/api/portraits/men/48.jpg",
        linkedin: "#",
        twitter: "#",
        website: "#",
    },
];

export default function Instructors() {
    return (
        <section className="py-12  dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Meet Our Expert Instructors
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Learn from industry leaders with real-world experience.
                </p>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((instructor, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                            <CardHeader className="flex flex-col items-center">
                                <Avatar className="w-24 h-24">
                                    <AvatarImage src={instructor.image} />
                                    <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-lg mt-3">{instructor.name}</CardTitle>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{instructor.role}</p>
                            </CardHeader>
                            <CardContent className="flex justify-center gap-4 mt-2">
                                <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-all" />
                                </a>
                                <a href={instructor.twitter} target="_blank" rel="noopener noreferrer">
                                    <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-600 transition-all" />
                                </a>
                                <a href={instructor.website} target="_blank" rel="noopener noreferrer">
                                    <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all" />
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
