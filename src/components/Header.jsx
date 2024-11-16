import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";


const Header = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center items-center gap-2 py-5">
        <img className="w-[400px]" src={logo} alt="logo" />
        <h2 className="text-gray-400 text-[18px]">
          Journalism Without Fear or Favour
        </h2>
        <p>{moment().format("dddd,MMMM Do,YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
