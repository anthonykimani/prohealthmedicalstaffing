import { useState } from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  const [showMenu, setShowMenu] = useState(false);

  // handle toggle menu
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };  

  return (
    <section className="bg-secondarygreen text-white font-kumbh">
      <nav className="flex justify-between md:justify-around items-center px-3 ">
        <h3 className="font-bold">Prohealth Medical Staffing</h3>

        {/* desktop menu */}
        <ul className="hidden md:flex">
          <li className="mx-4 list-none">Home</li>
          <li className="mx-4 list-none">About Us</li>
          <li className="mx-4 list-none">Contact</li>
          <li className="mx-4 list-none">Careers</li>
        </ul>

        <Link to="/register"><button className="hidden md:block rounded-sm border border-white bg-transparent px-4 py-1 my-2">
          Register
        </button></Link>
        
        {showMenu ? (
          <i className="block md:hidden bx bx-x bx-md" onClick={handleToggle}></i>
        ) : (
          <i
            className="block md:hidden bx bx-menu bx-md"
            onClick={handleToggle}
          ></i>
        )}
      </nav>
      {/* Mobile Menu */}
      {showMenu ? (
        <ul className="absolute bg-secondarygreen flex flex-col md:hidden h-screen w-screen ">
          <li className="m-3 list-none">Home</li>
          <li className="m-3 list-none">About Us</li>
          <li className="m-3 list-none">Contact</li>
          <li className="m-3 list-none">Careers</li>
        </ul>
      ) : null}
    </section>
  );
};

export default NavList;
