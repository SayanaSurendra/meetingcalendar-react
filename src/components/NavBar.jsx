
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
          <i className="bi bi-calendar3 me-4 " style={{ color: 'white' ,fontSize: '2rem'}}></i>
          <ul className=" navbar-nav me-auto">
           {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <NavLink className="nav-link text-white" to={link.href} >
                {link.name}
              </NavLink>
            </li>
          ))}
             
        </ul>
            </div>  
        </nav>
    );
};

export default NavBar;