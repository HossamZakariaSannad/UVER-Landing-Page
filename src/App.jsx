import NavBar from "./components/sections/NavBar";
import LandingHero from "./components/sections/LandingHero";
import AppFeaturesTabs from "./components/sections/AppFeaturesTabs";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <NavBar />
      <main className="space-y-12">
        <LandingHero />
        <AppFeaturesTabs />
        
      </main>
    </div>
  );
}

export default App;