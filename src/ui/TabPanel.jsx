import { useState } from 'react';
import { motion } from 'framer-motion';

const TabPanel = ({ tabs, contentMap, defaultTab }) => {
  const [selected, setSelected] = useState(defaultTab);

  return (
    <>
      <div className="flex flex-col gap-3">
        {tabs.map(tab => (
          <motion.button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`text-left p-2 ${selected === tab ? 'border-l-4 border-indigo-500 text-white' : 'text-gray-400'}`}
            whileHover={{ scale: 1.05 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
        <h3 className="text-5xl font-bold text-white">{contentMap[selected].title}</h3>
        <p className="text-gray-200 mt-3">{contentMap[selected].description}</p>
      </motion.div>
    </>
  );
};

export default TabPanel;