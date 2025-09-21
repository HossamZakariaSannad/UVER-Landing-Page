import { FaUniversity, FaFeatherAlt, FaGraduationCap } from 'react-icons/fa';
import { MdSchool } from "react-icons/md";
import CustomButton from '../../ui/CustomButton';
import PartnerCard from '../../ui/PartnerCard';

const Collaborators = () => {
  const collabList = [
    { name: "CollegeX", icon: <FaGraduationCap size={28} />, style: 'iconLeft' },
    { name: "EDUTECH INSTITUTE", style: 'textOnly' },
    { name: "Global University Network", icon: <FaUniversity size={32} />, style: 'iconLeft' },
    { name: "FutureEd Solutions", style: 'textOnly' },
    { name: "EduConsortium", icon: <MdSchool size={28} />, style: 'iconLeft' },
    { name: "AdmissionsPro", style: 'borderedTextDouble' },
    { name: "CampusLink", style: 'textOnly' },
    { name: "ScholarSearch", icon: <FaFeatherAlt size={24} />, style: 'iconTop' },
  ];

  return (
    <section className="bg-gray-800 dark:bg-gray-900 py-24 text-white transition-colors duration-300">
      <div className="content-max">
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-semibold mb-6">Proud collaborators with top education entities.</h2>
          <CustomButton>Partner With Us</CustomButton>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-t border-gray-600">
          {collabList.map((collab, idx) => (
            <div key={idx} className="border-b border-r border-gray-600 last:border-r-0 md:last:border-r">
              <PartnerCard {...collab} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;