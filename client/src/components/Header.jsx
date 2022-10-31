import React from "react";
import toolLogo from "../assets/appLogo.png";

const Header = ({title}) => {
  return (
    <div className="flex justify-center my-4">
      <img src={toolLogo} alt="tool logo" className="w-1/8" />
      <h1 className="text-4xl font-bold self-center ml-2">{title}</h1>
    </div>
  );
};

export default Header;
