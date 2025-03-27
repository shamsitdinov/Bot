import React from "react";
import bgimg from "../assets/Full-stack-developer_LE_upscale_balanced_x4.jpg";
const Header = () => {
  return (
    <div>
      <header className="h-[100vh] w-full rounded-xl" style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: "no-repeat", backgroundSize:"1500px", backgroundPosition: "center" }}></header>
    </div>
  );
};

export default Header;
