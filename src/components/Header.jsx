import React from "react";
import bgimg from "../assets/11111.jpg";
const Header = () => {
  return (
    <div className="h-[100vh] max-sm:h-[32vh]">
      <header className="h-[100%] w-full rounded-xl bg-center max-sm:w-full max-sm:h-[32vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgimg})` }}></header>
    </div>
  );
};

export default Header;
