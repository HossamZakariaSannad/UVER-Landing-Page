import NavBar from "./components/sections/NavBar";  // Renamed imports
import LandingHero from "./components/sections/LandingHero";
import UserReviews from "./components/sections/UserReviews";
import AppFeaturesTabs from "./components/sections/AppFeaturesTabs";
import ApplicationGuide from "./components/sections/ApplicationGuide";
import Collaborators from "./components/sections/Collaborators";
import FeatureGallery from "./components/sections/FeatureGallery";
import OurVision from "./components/sections/OurVision";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">  {/* Slight class change */}
      <NavBar />
      <main className="space-y-12">  {/* Added wrapper */}
        <LandingHero />
        <AppFeaturesTabs />
        <ApplicationGuide />
        <Collaborators />
        <UserReviews />
        <FeatureGallery />
        <OurVision />
      </main>
    </div>
  );
}

export default App;