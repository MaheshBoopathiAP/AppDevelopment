import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "rgba(0,0,0,0.6)", maxHeight: "70px" }}>
        <div className="container">
          <a className="navbar-brand text-light" href="#" style={{ fontFamily: "cursive" }}>
            <img src={logo} alt="Logo" /> Smaag Enterprises...
          </a>
         
          <ul className="navbar-nav ml-auto">
            <li className="nav-item px-3">
              <a href="#" onClick={() => navigate("/home")} className='nav-link text-white'>Home</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => navigate("/dashboard")} className='nav-link text-white'>Dashboard</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-light" href="#" onClick={() => navigate("/about")}>About</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-light" href="#" onClick={() => navigate("/service")}>Services</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-light" href="#" onClick={() => navigate("/contact")}>Contact</a>
            </li>
            <button
            className={`navbar-toggler btn btn-light ${isSidenavOpen ? 'open' : ''}`}
            type="button"
            onClick={toggleSidenav}
          >
            <span className="navbar-toggler-icon btn btn-light" style={{ borderRadius: "3px" }}></span>
          </button>
          </ul>
        </div>
      </nav>

      {/* Sidenavbar */}
      <div className={`sidenavbar ${isSidenavOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" className='text-white' onClick={() => { navigate("/add") }}>Add Items</a>
          </li>
          <li>
            <a href="#">Update Item</a>
          </li>
          <li>
            <a href="#">Delete Items</a>
          </li>
          <li>
            <a href="#">Review Analysis</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
