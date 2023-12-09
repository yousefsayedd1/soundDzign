import React, { createRef, useEffect, useState } from "react";
import "./navbar.css";
import { closeIcon, menuIcon } from "../../assets/index";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const mobileMenuList = createRef();
  function menuhandleclick() {
    setIsActive((prev) => !prev);
  }
  useEffect(() => {
    if (mobileMenuList.current) {
      if (isActive) {
        mobileMenuList.current.style.display = "block";
        setTimeout(() => {
          mobileMenuList.current.style.opacity = 1;
        }, 100);
      } else {
        setTimeout(() => {
          mobileMenuList.current.style.display = "none";
        }, 1000);
        mobileMenuList.current.style.opacity = 0;
      }
    }
  }, [isActive]);
  return (
    <>
      <nav className="container">
        <div className="logo">
          <a href="#header">
            Sound<span>DZign</span>
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <img
          onClick={menuhandleclick}
          src={isActive ? closeIcon : menuIcon}
          alt=""
        />
        <div ref={mobileMenuList} className={`mobile-list`}>
          <ul className="links">
            <li onClick={menuhandleclick}>
              <a href="#topics">Course Details</a>
            </li>
            <li onClick={menuhandleclick}>
              <a href="#info">About</a>
            </li>

            <li onClick={menuhandleclick}>
              <a href="#blog">Blog</a>
            </li>
            <li onClick={menuhandleclick}>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
