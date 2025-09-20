import phoneImage from '/phoneModel.webp';

const DevicePreview = () => {
  // Changed animation to gentle float (rotate + scale)
  return (
    <div className="relative flex justify-center items-center w-full max-w-sm">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-indigo-300/20 rounded-3xl blur-lg scale-105 translate-y-6"></div>
      <img
        loading="lazy"
        src={phoneImage}
        alt="UVER App Preview"
        className="w-full h-auto object-contain rounded-3xl animate-gentle-float"
      />
    </div>
  );
};

export default DevicePreview;