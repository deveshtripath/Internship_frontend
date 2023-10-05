import React from "react";
import './header.css';
import { BiSolidHelpCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <div> <h1 className="logo-text">create.ai</h1></div>
          <div> <AiOutlineHistory/> </div>
        </div>
      </div>
      <div className="header_right">
        <div className="tools_data">
          <div className="tool">Ai tool</div>
          <div className="tool">Ai tool</div>
          <div className="tool">Ai tool</div>
          <div className="tool">Ai tool</div>
          <div className="icon"> <BiSolidHelpCircle/> </div>
          <div className="icon"> <AiOutlineMenu/> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
