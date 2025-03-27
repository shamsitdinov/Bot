import React from "react";
import icon from "../assets/photo_2025-03-26_19-49-03-Photoroom.png";
const Navbar = () => {
  return (
    <div className="bg-slate-500 py-2 px-10 rounded-md">
      <nav className="flex justify-between items-center">
        <img className="w-20" src={icon} alt="" />
        <ul className="flex justify-between  w-[30%]">
          <li className="text-white font-serif">
            <a href="">Home</a>
          </li>
          <li className="text-white font-serif">
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
