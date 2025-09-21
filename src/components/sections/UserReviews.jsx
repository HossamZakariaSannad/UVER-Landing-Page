import { useState } from "react";
import { motion } from "framer-motion";

const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    { text: "UVER transformed my college search with spot-on recommendations!", author: "Emily S.", role: "Student", avatar: "/t1botw.webp" },
    { text: "The intuitive design and tracker were a game-changer for me.", author: "Michael T.", role: "High School Senior", avatar: "/t1bot.webp" },
    { text: "Personalized support and deadlines made it indispensable!", author: "John L.", role: "College Applicant", avatar: "/t1bot.webp" },
  ];

  const prev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const next = () => setActiveIndex((prev) => Math.min(reviews.length - 1, prev + 1));

  const review = reviews[activeIndex];

  return (
    <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Student Testimonials
        </h2>
        
        <motion.blockquote
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 px-4"
        >
          "{review.text}"
        </motion.blockquote>
        
        <div className="flex items-center justify-between">
          {/* Left arrow - fixed position */}
          <div className="w-10 flex-shrink-0">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          {/* User info - centered with max width */}
          <div className="flex items-center gap-3 max-w-xs mx-4">
            <img
              src={review.avatar}
              alt={`${review.author}'s avatar`}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="text-left min-w-0">
              <h4 className="font-medium text-gray-900 dark:text-white truncate">{review.author}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{review.role}</p>
            </div>
          </div>
          
          {/* Right arrow - fixed position */}
          <div className="w-10 flex-shrink-0">
            <button
              onClick={next}
              disabled={activeIndex === reviews.length - 1}
              className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 gap-1">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex 
                  ? 'bg-indigo-600' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;