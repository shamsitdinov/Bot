import React from "react";
import bgimg from "../assets/Full-stack-developer_LE_upscale_balanced_x4.jpg";
const Header = () => {
  return (
    <div>
      <header className="h-[80vh] w-full" style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center",backgroundAttachment:"fixed",backgroundClip:"inherit" }}></header>
    </div>
  );
};

export default Header;
