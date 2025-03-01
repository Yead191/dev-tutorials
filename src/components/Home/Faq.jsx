import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is Dev Tutorials?",
        answer: "Dev Tutorials is an online platform offering high-quality programming and tech courses for all skill levels.",
    },
    {
        question: "Are the courses free?",
        answer: "We offer both free and premium courses. You can explore a wide range of tutorials tailored to your needs.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer: "Yes! Upon completing a premium course, you will receive a certificate of completion.",
    },
    {
        question: "Can I access the courses on mobile?",
        answer: "Yes, Dev Tutorials is fully responsive and accessible on all devices, including mobile and tablets.",
    },
    {
        question: "How do I contact support?",
        answer: "You can reach out to our support team via email or our contact form for any queries.",
    },
];

export default function Faq() {
    return (
        <section className="py-12  dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                    Find answers to the most commonly asked questions about Dev Tutorials.
                </p>
                <div className="max-w-3xl mx-auto mt-8">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 dark:text-gray-300">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
