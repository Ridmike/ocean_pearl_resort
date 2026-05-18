import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I arrange an airport transfer?",
    answer: "Our concierge team can arrange luxury private transfers from Chennai International Airport (MAA). Please provide your flight details at least 48 hours in advance via the contact form or email."
  },
  {
    question: "What are the standard check-in/out times?",
    answer: "Standard check-in is from 2:00 PM, and check-out is by 12:00 PM. Early check-in or late check-out may be available upon request and subject to availability."
  },
  {
    question: "Can I host a private event at the resort?",
    answer: "Yes, we offer multiple venues for private events, including beachside settings and elegant ballrooms. Please contact our events team for personalized packages."
  },
  {
    question: "Are pets allowed at the property?",
    answer: "While we love animals, Hotel Ocean Pearl maintains a no-pet policy to ensure the comfort and safety of all our guests."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[#B8946E] uppercase tracking-widest text-sm font-semibold mb-2">ASSISTANCE</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
