import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";


const NavBar = () => {
  return (
    <div className="bg-element flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 py-8 text-color shadow-md gap-4">
      <Link to="/" className="font-semibold text-[22px] decoration-none">
        Where in the world
      </Link>
      <DarkMode/>
    </div>
  );
};

export default NavBar;
