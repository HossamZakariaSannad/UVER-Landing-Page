import TabPanel from '../../ui/TabPanel';
import { motion } from 'framer-motion';
import featureImage from '/s2.webp';

const AppFeaturesTabs = () => {
  const panels = ['College Search', 'Recommendations', 'Tracker', 'Chat', 'Application'];
  const panelContent = {
    'College Search': { title: 'Advanced College Discovery', description: 'Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more. Find the perfect fit for your educational journey.', },
    'Recommendations': { title: 'Custom Suggestions', description: 'Receive tailored college recommendations based on your academic interests, GPA, and career goals. Our smart algorithm matches you with institutions that align with your aspirations, saving you time and effort.', },
    'Tracker': { title: 'Progress Monitor',description: 'Receive tailored college recommendations based on your academic interests, GPA, and career goals. Our smart algorithm matches you with institutions that align with your aspirations, saving you time and effort.',},
    'Chat': { title: 'Instant Support',description: 'Connect with education counselors and peers instantly via our built-in chat. Get personalized advice, clarify doubts, and receive guidance at every step of your college application process.' },
    'Application': { title: 'Easy Submissions', description: 'Simplify the application process with integrated tools to upload documents, write essays, and submit applications directly. Manage multiple applications seamlessly with automated reminders.', },
  };

  return (
    <section className="bg-gray-800 py-24 relative">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TabPanel tabs={panels} contentMap={panelContent} defaultTab="College Search" />
          <div className="flex justify-center">
            <img loading="lazy" src={featureImage} alt="Feature Preview" className="w-48 h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8">
        <motion.div
          className="w-8 h-12 border-2 border-gray-500 rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeaturesTabs;