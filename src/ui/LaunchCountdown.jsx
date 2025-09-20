import { useCountdown } from '../hooks/useCountdown';
import { formatTime } from '../utils/formatTime';

const LaunchCountdown = () => {
  const time = useCountdown();

  return (
    <div className="flex items-center gap-3 text-5xl font-semibold justify-center">
      <div>{formatTime(time.days)}<span className="text-base text-gray-500"> days</span></div>
      <span className="text-gray-500">:</span>
      <div>{formatTime(time.hours)}<span className="text-base text-gray-500"> hours</span></div>
      <span className="text-gray-500">:</span>
      <div>{formatTime(time.minutes)}<span className="text-base text-gray-500"> minutes</span></div>
    </div>
  );
};

export default LaunchCountdown;