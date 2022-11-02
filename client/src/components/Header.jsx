import React from "react";
import toolLogo from "../assets/appLogo.png";
import UserInfo from "./UserInfo";

const Header = ({title, name, logout}) => {
  return (
    <div className="flex justify-between mt-1 mb-4">
      <div className="flex">
        <img src={toolLogo} alt="logo" className="h-10 w-10 ml-2 self-center" />
        <h1 className="text-3xl font-bold ml-2 self-center">{title}</h1>
      </div>
      <UserInfo name={name} logout={logout} />
    </div>
  );
};

export default Header;
