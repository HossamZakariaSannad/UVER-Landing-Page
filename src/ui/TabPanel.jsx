import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabPanel = ({ tabs, contentMap, defaultTab }) => {
  const [selected, setSelected] = useState(defaultTab);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.01 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.15, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const renderTypewriterText = (text) =>
    text.split('').map((char, index) => (
      <motion.span
        key={`${char}-${index}`}
        variants={charVariants}
        className="inline-block whitespace-pre"
      >
        {char}
      </motion.span>
    ));

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      {/* Tabs Column - Mobile: Horizontal, Desktop: Vertical */}
      <div className="lg:flex flex-col gap-1 sm:gap-2 md:gap-3 lg:pr-6 xl:pr-8 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
        <div className="flex lg:flex-col gap-1 sm:gap-2 md:gap-3 min-w-max lg:min-w-0 -ml-2 lg:-ml-4 px-2 lg:px-0">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`text-left p-2 sm:p-3 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                selected === tab
                  ? 'border-l-0 lg:border-l-3 md:lg:border-l-4 border-indigo-500 text-white bg-gray-700 lg:bg-transparent rounded sm:rounded-md lg:rounded-none'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              role="tab"
              aria-selected={selected === tab}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content and Image Columns */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Mobile & Tablet: Image First, Then Content */}
        {/* Desktop: Content First, Then Image */}
        <motion.div
          key={selected + '-image'}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-end items-center order-1 md:order-2"
        >
          <div className="w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 flex items-center justify-center">
            <img
              loading="lazy"
              src={contentMap[selected].image}
              alt={`${selected} Preview`}
              className="w-full h-full object-contain rounded sm:rounded-md shadow-md"
            />
          </div>
        </motion.div>

        {/* Content Column */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center md:items-start text-center md:text-left justify-start gap-2 sm:gap-3 md:gap-4 order-2 md:order-1"
            id={`panel-${selected}`}
          >
            {/* Title */}
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              {renderTypewriterText(contentMap[selected].title)}
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-xs xs:text-sm sm:text-base leading-relaxed mt-1">
              {renderTypewriterText(contentMap[selected].description)}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabPanel;