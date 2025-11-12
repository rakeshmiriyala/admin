import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const faqData = [
  {
    question: "How do I book a slot for a business?",
    answer: "You can book a slot by navigating to the booking page, selecting your preferred time, and confirming your booking.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, cancellations are allowed up to 24 hours before the scheduled time. Please visit the 'My Bookings' page to cancel.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit cards, debit cards, UPI, and net banking for all transactions.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can call us at our support number or send us an email. The contact details are provided below.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ml-auto w-3/4 p-6 flex flex-col pl-64">

      {/* FAQ Section */}
      <div className="w-full mx-auto p-4 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">FAQ Section</h2>
        </div>
        {faqData.map((item, index) => (
          <div key={index} className="py-3">
            <button
              className="w-full hover:cursor-pointer flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              {openIndex === index ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-700">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white p-6  w-full flex flex-col items-center mt-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>

        {/* Call Support */}
        <motion.div
          className="flex items-center text-lg text-blue-600 mb-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhoneAlt className="mr-2" />
          <a href="tel:+1234567890">+1 234 567 890</a>
        </motion.div>

        {/* Email Support */}
        <motion.div
          className="flex items-center text-lg text-blue-600 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="mr-2" />
          <a href="mailto:support@example.com">support@example.com</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
