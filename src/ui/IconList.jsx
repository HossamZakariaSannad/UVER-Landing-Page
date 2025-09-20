// src/ui/IconList.jsx
import { motion } from "framer-motion";

const IconList = ({ items, className = "" }) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-start gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
        >
          {item.icon && <span className="text-3xl">{item.icon}</span>}
          <div>
            <h4 className="font-bold text-lg mb-1">
              {item.title || item.label}
            </h4>
            {item.description && (
              <p className="text-sm text-gray-100 leading-snug">
                {item.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IconList;
