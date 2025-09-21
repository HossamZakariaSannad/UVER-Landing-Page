import { motion } from "framer-motion";

const FeatureGallery = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <motion.div 
              className="relative w-full h-[340px] bg-white dark:bg-gray-700 rounded-[2.5rem] shadow-lg p-4 transition-colors duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* phone frame */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-full h-full flex items-start justify-center pt-6">
                <motion.img
                  loading="lazy"
                  src="/i11.webp"
                  alt="List View"
                  className="w-[90%] h-[100%] object-cover object-[50%_0%] rounded-[2rem]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative w-full h-[340px] bg-white dark:bg-gray-700 rounded-[2.5rem] shadow-lg p-4 transition-colors duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-full h-full flex items-start justify-center pt-6">
                <motion.img
                  loading="lazy"
                  src="/i12.webp"
                  alt="List View"
                  className="w-[90%] h-[100%] object-cover object-[50%_0%] rounded-[2rem]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-6">
            <motion.div 
              className="relative w-full h-[340px] bg-white dark:bg-gray-700 rounded-[2.5rem] shadow-lg p-4 transition-colors duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-full h-full flex items-start justify-center pt-6">
                <motion.img
                  loading="lazy"
                  src="/i13.webp"
                  alt="List View"
                  className="w-[90%] h-[100%] object-cover object-[50%_0%] rounded-[2rem]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative w-full h-[340px] bg-white dark:bg-gray-700 rounded-[2.5rem] shadow-lg p-4 transition-colors duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full"></div>
              <div className="w-full h-full flex items-start justify-center pt-6">
                <motion.img
                  loading="lazy"
                  src="/i14.webp"
                  alt="List View"
                  className="w-[90%] h-[100%] object-cover object-[50%_0%] rounded-[2rem]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right column - tall image with overlay */}
          <motion.div 
            className="relative bg-white dark:bg-gray-700 rounded-[2.5rem] shadow-lg p-4 h-[700px] overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full z-20"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center">
              <motion.img
                loading="lazy"
                src="/graduate.webp"
                alt="Showcase"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Content centered */}
              <div className="relative z-10 px-6 text-white text-center md:text-left max-w-sm">
                <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                  Get ready to experience the future of college applications with UVER
                </h2>
                <motion.button 
                  className="mt-6 w-14 h-14 rounded-full border-2 border-white flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGallery;