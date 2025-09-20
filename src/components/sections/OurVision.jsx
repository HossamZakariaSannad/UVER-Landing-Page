import CustomButton from '../../ui/CustomButton';

const OurVision = () => {
  return (
    <section className="relative bg-gray-800 py-24 overflow-hidden">
      <img loading="lazy" src="/CollaborationTeam.webp
" alt="Collaboration" className="absolute inset-0 object-cover" />
      <div className="absolute inset-0 bg-black/70"></div>  {/* Opacity tweak */}
      <div className="relative content-max text-left space-y-6">
        <h2 className="text-4xl font-semibold text-white">UVER aims to transform education access, offering equal opportunities and simplified processes for all students.</h2>
        <p className="text-gray-200">We empower informed choices through innovative tools and support.</p>
        <CustomButton variant="secondary">Explore Careers →</CustomButton>
      </div>
    </section>
  );
};

export default OurVision;