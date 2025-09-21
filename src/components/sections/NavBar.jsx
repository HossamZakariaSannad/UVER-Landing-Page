// src/components/sections/NavBar.jsx
import CustomButton from "../../ui/CustomButton";
import ThemeToggle from "../../ui/ThemeToggle";

const NavBar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40 transition-colors duration-300">
      <div className="content-max">
        <div className="flex justify-between items-center h-14">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">UVER</h1>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:block">
              <div className="flex gap-3">
                <span className="w-6 h-0.5 bg-gray-400 dark:bg-gray-500"></span>
                <span className="w-6 h-0.5 bg-gray-400 dark:bg-gray-500"></span>
              </div>
            </div>
            <CustomButton className="hidden md:block">Early Access</CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;