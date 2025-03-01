import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "Full-Stack Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        feedback: "Dev Tutorials helped me master React and Next.js! Highly recommended.",
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        feedback: "The courses are top-notch! The hands-on projects were very helpful.",
    },
    {
        name: "Mark Johnson",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        rating: 5,
        feedback: "I landed a great job after completing the Web Development Bootcamp here!",
    },
];

export default function Testimonials() {
    return (
        <section className="py-12  dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    What Our Students Say
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Hear from learners who transformed their careers.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                            <CardHeader className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.image} />
                                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-1 text-yellow-500">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="mt-3 text-gray-700 dark:text-gray-300">{testimonial.feedback}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
