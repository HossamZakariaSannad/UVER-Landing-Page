import { motion, useScroll, useTransform } from "framer-motion";
import NavBar from "./components/sections/NavBar";
import LandingHero from "./components/sections/LandingHero";
import UserReviews from "./components/sections/UserReviews";
import AppFeaturesTabs from "./components/sections/AppFeaturesTabs";
import ApplicationGuide from "./components/sections/ApplicationGuide";
import Collaborators from "./components/sections/Collaborators";
import FeatureGallery from "./components/sections/FeatureGallery";
import OurVision from "./components/sections/OurVision";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { scrollYProgress } = useScroll();
  // Transform opacity and scale for section animations
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0.5, 1]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
        <NavBar />
        <main className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <LandingHero />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <AppFeaturesTabs />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <ApplicationGuide />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Collaborators />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <UserReviews />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <FeatureGallery />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            style={{ opacity: sectionOpacity, scale: sectionScale }}
          >
            <OurVision />
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;