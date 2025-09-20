import { useState, useEffect } from 'react';

export const useCountdown = (initialTime = { days: 23, hours: 22, minutes: 43 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {  // Every second for smoother
      setTime(prev => {
        let newTime = { ...prev };
        if (newTime.minutes > 0) newTime.minutes--;
        else if (newTime.hours > 0) {
          newTime.hours--;
          newTime.minutes = 59;
        } else if (newTime.days > 0) {
          newTime.days--;
          newTime.hours = 23;
          newTime.minutes = 59;
        }
        return newTime;
      });
    }, 1000);  // Changed to seconds
    return () => clearInterval(interval);
  }, []);

  return time;
};