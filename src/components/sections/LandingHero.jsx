import LaunchCountdown from '../../ui/LaunchCountdown';
import DevicePreview from '../../ui/DevicePreview';
import IconList from '../../ui/IconList';

const LandingHero = () => {
  const features = [
    { icon: '🔍', label: 'SEARCH' },
    { icon: '💬', label: 'CHAT' },
    { icon: '📝', label: 'APPLY' },
    { icon: '👀', label: 'TRACK' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Column: Text and Countdown */}
          <div className="order-1 lg:order-1 text-center lg:text-left space-y-6">
            <p className="text-gray-500 mb-6">Explore universities, apply seamlessly – UVER simplifies it all.</p>
            <span className="text-sm text-gray-500 flex justify-center lg:justify-start gap-2 mb-2">Launch in</span>
            <LaunchCountdown />
          </div>
          {/* Middle Column: Phone */}
          <div className="order-2 lg:order-2 flex justify-center">
            <DevicePreview />
          </div>
          {/* Right Column: Features */}
          <div className="order-3 lg:order-3 flex justify-center lg:justify-end">
            <IconList items={features} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;