import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarDataAdmin } from "./SidebarDataAdmin";

import "../assets/css/SidebarComponent.css";
import { IconContext } from "react-icons";

import logo from '../assets/images/logo.png';
import {  useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();


  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/Login');
  };


  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }} >
        <nav className="navbar navbar-expand-lg navbar-light  bg-dark sticky-top"  >
          <div className="container-fluid my-3"  id="call" >
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <a className="navbar-brand px-4 mt-3" href="#" id="brand" >
             <img src={logo} id="logo"></img>
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{margin:"0"}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mx-5 " id="navhr"> {/* Changed to ml-auto for right alignment */}
                <li className="nav-item " id="navr">
                  <a className="nav-link text-light fs-4 px-3" id="navl" aria-current="page" href="#" onClick={()=>{navigate("/home")}}>
                    Home
                  </a>
                </li>
                <li className="nav-item" id="navr" onClick={()=>{navigate("/about")}}>
                  <a className="nav-link text-light fs-4 px-3" id="navl" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item"id="navr" onClick={()=>{navigate("/service")}}>
                  <a className="nav-link text-light fs-4 px-3" id="navl" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-item text-light" id="navr"  onClick={()=>{handleLogout}}>
                  <a
                    className="nav-link text-light fs-4 px-3"
                    id="navl"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose color="black" />
              </Link>
            </li>
            {SidebarDataAdmin.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
