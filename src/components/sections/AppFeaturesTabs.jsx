import TabPanel from '../../ui/TabPanel';
import { motion } from 'framer-motion';
import featureImage1 from '/college-search.png';
import featureImage2 from '/recommendation.png';
import featureImage3 from '/tracker.png';
import featureImage4 from '/chat.png';
import featureImage5 from '/application.png';

const AppFeaturesTabs = () => {
  const panels = ['College Search', 'Recommendations', 'Tracker', 'Chat', 'Application'];
  const panelContent = {
    'College Search': {
      title: 'Advanced College Discovery',
      description: 'Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more.',
      image: featureImage1,
    },
    'Recommendations': {
      title: 'Custom Suggestions',
      description: 'Receive tailored college recommendations based on your academic interests, GPA, and career goals. Our smart algorithm matches you with institutions that align with your aspirations.',
      image: featureImage2,
    },
    'Tracker': {
      title: 'Progress Monitor',
      description: 'Keep track of your application progress with our intuitive dashboard. Monitor deadlines, required documents, and application statuses in one place.',
      image: featureImage3,
    },
    'Chat': {
      title: 'Instant Support',
      description: 'Connect with education counselors and peers instantly via our built-in chat. Get personalized advice, clarify doubts, and receive guidance at every step.',
      image: featureImage4,
    },
    'Application': {
      title: 'Easy Submissions',
      description: 'Simplify the application process with integrated tools to upload documents, write essays, and submit applications directly. Manage multiple applications seamlessly.',
      image: featureImage5,
    },
  };

  return (
    <section className="bg-gray-800 dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <TabPanel tabs={panels} contentMap={panelContent} defaultTab="College Search" />
      </div>
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        <motion.div
          className="w-6 h-8 sm:w-7 sm:h-10 md:w-8 md:h-12 border-2 border-gray-500 rounded-full flex items-start justify-center p-0.5 sm:p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeaturesTabs;