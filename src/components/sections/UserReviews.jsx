import { useState } from "react";
import { motion } from "framer-motion"; // Assuming framer-motion is installed

const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = [
    { text: "UVER transformed my college search with spot-on recommendations!", author: "Emily S.", role: "Tester", avatar: "/t1botw.webp" },
    { text: "The intuitive design and tracker were a game-changer for me.", author: "Michael T.", role: "Tester", avatar: "/t1bot.webp" },
    { text: "Personalized support and deadlines made it indispensable!", author: "John L.", role: "Tester", avatar: "/t1bot.webp" },
  ];

  const prev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const next = () => setActiveIndex((prev) => Math.min(reviews.length - 1, prev + 1));

  const review = reviews[activeIndex];

  return (
    <section className="bg-white py-24">
      <div className="content-max text-center space-y-8">
        <motion.blockquote
          key={activeIndex} // Key for animation trigger
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-gray-700 font-medium"
        >
          {review.text}
        </motion.blockquote>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-400 flex-center hover:border-indigo-500 disabled:opacity-40 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={activeIndex === reviews.length - 1}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-brand-indigo-600 flex-center text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <img
              loading="lazy"
              src={review.avatar}
              alt={`${review.author}'s avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium">{review.author}</h4>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define flex-center utility in the component's style (or move to index.css)
const flexCenter = "flex items-center justify-center";

export default UserReviews;