import CustomButton from '../../ui/CustomButton';

const OurVision = () => {
  return (
    <section className="relative bg-gray-800 py-12 xs:py-16 sm:py-20 md:py-24 overflow-hidden">
      <img 
        loading="lazy" 
        src="/CollaborationTeam.webp" 
        alt="Collaboration" 
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 text-center md:text-left space-y-4 xs:space-y-5 sm:space-y-6">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight xs:leading-snug sm:leading-normal">
          UVER aims to transform education access, offering equal opportunities and simplified processes for all students.
        </h2>
        <p className="text-gray-200 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
          We empower informed choices through innovative tools and support.
        </p>
        <div className="pt-2 xs:pt-3 sm:pt-4">
          <CustomButton variant="secondary" className="text-xs xs:text-sm sm:text-base px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3">
            Explore Careers →
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default OurVision;