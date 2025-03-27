import React from "react";
import bgimg from "../assets/Full-stack-developer_LE_upscale_balanced_x4.jpg";
const Header = () => {
  return (
    <div>
      <header className="h-[100vh] w-full rounded-xl max-sm:w-full max-sm:h-[32vh] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgimg})`}}></header>
    </div>
  );
};

export default Header;
