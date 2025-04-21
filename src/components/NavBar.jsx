
import React from 'react';
import { NavLink } from 'react-router';


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },

];



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container-fluid'>

        <i className="bi bi-calendar3 me-4 " style={{ color: 'white', fontSize: '2rem' }}></i>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">

          <ul className=" navbar-nav me-auto" >
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink className="nav-link text-white" to={link.href} >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>


          <div className="btn-group">
            <button type="button" className="btn text-white btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-circle  px-2"></i>
              Demo
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;