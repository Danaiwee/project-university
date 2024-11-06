import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo_icon from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);


  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={sticky ? 'nav container dark-nav' : 'nav container'}>
      <img src={logo_icon} alt="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li className="list"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className="list"><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li className="list"><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li className="list"><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li className="list"><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
      <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
