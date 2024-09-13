import React from "react";
import Logo from "../assets/image.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-16 h-16 shadow-xl">
      <div className="flex-1" />

      <Link to="/" className="flex flex-1 justify-center cursor-pointer">
        <img src={Logo} alt="logo" className="h-6" />
      </Link>
      <div className="flex items-center justify-end  flex-1 gap-8">
        <Link to="/history">
          <p className="font-semibold cursor-pointer">History</p>
        </Link>
        <Link to="/rockets">
          <p className="font-semibold cursor-pointer">Rockets</p>
        </Link>
        <Link to="/launches">
          <p className="font-semibold cursor-pointer">Launches</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
