import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      question: "What is AgentStack?",
      answer:
        "AgentStack is a platform that gives you access to powerful AI agents for different tasks — from writing and research to automation and analytics. You can subscribe to agents individually or as part of a plan.",
    },
    {
      question: "How do AI agents work?",
      answer:
        "Each AI agent is designed to perform specialized tasks. Once you subscribe, you can assign tasks, connect integrations, and let agents work autonomously — saving you time and boosting productivity.",
    },
    {
      question: "Can I create my own custom AI agents?",
      answer:
        "Yes! AgentStack allows you to build and train custom agents using your data, workflows, and APIs. This helps you create AI agents that perfectly match your business needs.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! You can start with a 14-day free trial and get access to a selection of AI agents. No credit card required. Explore how AgentStack can automate and scale your work.",
    },
    {
      question: "Can my team collaborate using AgentStack?",
      answer:
        "Absolutely! Our Professional and Enterprise plans include team collaboration features — allowing multiple users to share agents, monitor progress, and manage workflows together.",
    },
    {
      question: "What integrations does AgentStack support?",
      answer:
        "AgentStack integrates with popular tools like Slack, Notion, Google Workspace, and Zapier. You can also connect via our API for advanced automation and custom workflows.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We use enterprise-grade encryption, access controls, and secure cloud infrastructure to ensure your data and agent interactions remain private and protected.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="relative z-10 py-16 md:py-32 bg-background">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-semibold text-foreground md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};


export { Faq1 };
