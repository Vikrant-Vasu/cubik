import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center px-10">
      <img
        className="max-w-52"
        src="https://cubik.in/wp-content/uploads/2023/12/Cubik-name-with-logo-300x125.png"
        alt=""
      />
      <LuMenuSquare
        onClick={handleNav}
        className="z-20 text-orange-500 cursor-pointer"
        size={45}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-gray-950 opacity-75  px-4 py-7 flex-col z-10"
            : " text-gray-300 w-full  bg-gray-950 opacity-75  px-4 py-7 flex-col absolute  top-0 h-screen left-[-100%] ease-in duration-300 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-6">Home</li>
          <li className="font-bold text-3xl p-6">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
