import CustomButton from "../../ui/CustomButton";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="content-max">
        <div className="flex justify-between items-center h-14">
          <h1 className="text-3xl font-semibold text-gray-800">UVER</h1>
          <div className="hidden md:block">
            <div className="flex gap-3">
              <span className="w-6 h-0.5 bg-gray-400"></span>
              <span className="w-6 h-0.5 bg-gray-400"></span>
            </div>
          </div>
          <CustomButton className="hidden md:block">Early Access</CustomButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;