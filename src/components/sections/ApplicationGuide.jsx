import React from "react";
import IconList from "../../ui/IconList";
import CustomButton from "../../ui/CustomButton";
import { motion } from "framer-motion";

const ApplicationGuide = () => {
  const guideItems = [
    {
      icon: "🔍",
      title: "Search for Your Ideal College",
      description:
        "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
    },
    {
      icon: "💬",
      title: "Chat with Admissions Experts",
      description:
        "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
    },
    {
      icon: "👀",
      title: "Track Deadlines and Requirements",
      description:
        "Receive notifications for upcoming deadlines, document requirements, and submission dates.",
    },
    {
      icon: "📝",
      title: "Apply with Confidence",
      description:
        "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
    },
    {
      icon: "🎓",
      title: "Plan Your College Future",
      description:
        "Use UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions.",
    },
    {
      icon: "🎓",
      title:
        "Discover, apply, succeed – UVER app makes college search effortless.",
      image: "/graduation.webp",
      button: "Get Early Access",
    },
  ];

  // polygon approximates a smooth left tab curve (multiple small points),
  // right side remains straight (100% 9% -> 100% 100%).
  const folderClip =
    "polygon(0 0, 20% 0, 28% 3%, 34% 6%, 38% 8%, 42% 9%, 100% 9%, 100% 100%, 0 100%)";

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="guide" className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
          {/* Left text */}
          <div className="flex justify-start">
            <span className="text-gray-500 dark:text-gray-400 border-l-4 border-indigo-500 pl-2">
              How It Works
            </span>
          </div>

          {/* Middle heading */}
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
              Simple Steps to College Success
            </h2>
          </div>

          {/* Right icon */}
          <div className="flex justify-end">
            <span className="text-4xl">🎓</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideItems.map((item, idx) => {
            const isImageCard = !!item.image;
            
            return (
              <motion.div
                key={idx}
                variants={isImageCard ? imageCardVariants : cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                className="relative h-[350px] rounded-xl flex flex-col overflow-hidden group cursor-pointer"
                style={{
                  // for non-image cards apply folder clip + background color
                  ...(isImageCard
                    ? {
                        backgroundColor: "#111827", // gray-900 fallback
                      }
                    : {
                        backgroundColor: "#4F46E5", // indigo-600
                        clipPath: folderClip,
                        WebkitClipPath: folderClip,
                      }),
                }}
              >
                {isImageCard ? (
                  // === Image card: no clip-path, normal rounded rectangle ===
                  <div className="relative flex-1 overflow-hidden rounded-xl">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* content pulled up so it doesn't touch the bottom */}
                    <div className="absolute left-6 right-6 bottom-14">
                      <motion.h3 
                        className="text-base font-semibold text-white mb-3 leading-snug"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h3>
                      {item.button && (
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CustomButton className="py-2 px-5 text-sm group-hover:bg-indigo-700 transition-colors">
                            {item.button} →
                          </CustomButton>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ) : (
                  // === Folder-shaped card content ===
                  <motion.div 
                    className="p-6 flex-1 flex items-center text-white group-hover:bg-indigo-700 transition-colors duration-300"
                    whileHover={{ 
                      backgroundColor: "#3730a3", // darker indigo on hover
                    }}
                  >
                    <div className="w-full">
                      <div className="text-4xl mb-4">
                        
                        
                        
                      
                        {item.icon}
                      </div>
                      <motion.h3 
                        className="font-bold text-lg mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-indigo-100 leading-snug opacity-90 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
                
                {/* Subtle glow effect on hover */}
                {!isImageCard && (
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;