import React, { Fragment, useState } from "react";
import "./Navbar.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log("Menubar", toggle);
  return (
    <Fragment>
      <nav className="main_nav">
        <div className="logo">
          <h2>
            <span>R</span>emon <span>R</span>roy
          </h2>
        </div>
        <div className={toggle ? "mobile-menu-link" : "vav_link"}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
          </ul>
        </div>

        <div className="social_icons">
          <ul className={toggle ? "social-phone" : "social-media-desktop"}>
            <li>
              <a href="">
                <YouTubeIcon style={{ color: "red" }} />
              </a>
            </li>
            <li>
              <a href="">
                <FacebookIcon style={{ color: "#3b5998" }} />
              </a>
            </li>
            <li>
              <a href="">
                <LinkedInIcon style={{ color: "#0077b5" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="menubar">
          <a href="#" onClick={() => setToggle(!toggle)}>
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
