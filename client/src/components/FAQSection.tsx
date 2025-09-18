import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const faqData = [
  {
    id: 1,
    question: "What is RERA and how does it protect homebuyers?",
    answer: "RERA (Real Estate Regulation and Development Act) is a regulatory framework that ensures transparency, accountability, and timely delivery of projects. It protects homebuyers by mandating project registration, escrow account usage, and strict adherence to promised timelines and specifications."
  },
  {
    id: 2,
    question: "What documents do I need for home loan approval?",
    answer: "Essential documents include income proof (salary slips, bank statements), identity proof (Aadhaar, PAN), address proof, property documents, and employment verification. Our team provides complete guidance on document preparation to ensure smooth loan processing."
  },
  {
    id: 3,
    question: "How long does it take to complete a project?",
    answer: "Project completion timelines vary based on project size and complexity. Our residential projects typically take 18-36 months from launch to possession. We provide regular updates and maintain transparency throughout the construction process."
  },
  {
    id: 4,
    question: "What amenities are included in Nirman Group projects?",
    answer: "Our projects feature modern amenities including landscaped gardens, children's play areas, gymnasium, clubhouse, 24/7 security, power backup, water treatment plants, and parking facilities. Each project is designed to enhance your lifestyle."
  },
  {
    id: 5,
    question: "Do you provide after-sales service?",
    answer: "Yes, we offer comprehensive after-sales service including maintenance support, warranty coverage, and customer care assistance. Our dedicated team ensures your satisfaction even after possession, with prompt resolution of any issues."
  },
  {
    id: 6,
    question: "What are the payment plans available?",
    answer: "We offer flexible payment plans including construction-linked plans, down payment schemes, and EMI options. Our financial advisors help you choose the most suitable plan based on your financial situation and preferences."
  },
  {
    id: 7,
    question: "Is the property legally clear and approved?",
    answer: "All our properties are legally verified with clear titles, necessary approvals from local authorities, and RERA registration. We ensure complete legal compliance and provide all necessary documentation for your peace of mind."
  },
  {
    id: 8,
    question: "Can I visit the project site before booking?",
    answer: "Absolutely! We encourage site visits for all our projects. Our sales team provides guided tours, showcases sample apartments, and explains project features in detail. Site visits help you make an informed decision about your investment."
  }
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-orange/5">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <Badge className="mb-6 text-orange bg-orange/10 border-orange/20">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Got Questions? We Have Answers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our projects, services, and the home buying process
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="overflow-hidden"
            >
              <Card className="hover-elevate border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                    data-testid={`faq-question-${faq.id}`}
                  >
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-orange" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openItem === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-border/30 pt-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/10 p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our expert team is here to help you with any queries about our projects or services
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+918888883257"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange hover:bg-orange/90 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  Call Us Now
                </a>
                <a 
                  href="https://wa.me/918888883257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-orange text-orange hover:bg-orange hover:text-white rounded-lg font-medium transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
