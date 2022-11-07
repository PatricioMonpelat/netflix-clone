import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

function Nav() {
  
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img onClick={()=> navigate('/')}
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img onClick={()=> navigate('/profile')}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
