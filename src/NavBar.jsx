
import React from 'react';


const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
    
  ];

 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container-fluid'>
          <i className="bi bi-calendar3 me-4 " style={{ color: 'green' ,fontSize: '2rem'}}></i>
          <ul className=" navbar-nav me-auto">
           {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a className="nav-link text-white" href={link.href} >
                {link.name}
              </a>
            </li>
          ))}
        
        
       
        </ul>
            </div>  
        </nav>
    );
};

export default NavBar;