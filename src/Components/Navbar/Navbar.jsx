import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-scroll"; 
import { FaHome, FaUser } from "react-icons/fa";
import { FaCodeCommit } from "react-icons/fa6";
import { FolderCode, Send } from "lucide-react";

const Navbar = () => (
  <>
    {/* Desktop Navbar */}
    <nav className={style["desktop-navbar"]}>
      <div  className={style.creater}>Abish Y</div>
      <div className={style.navlinks}>
        <Link  to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}>Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}>About</Link>
        <Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}>Contact</Link>
      </div>
    </nav>

    {/* Mobile Navbar */}
    <nav className={style["mobile-navbar"]}>
      <Link to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}><FaHome /></Link>
      <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}><FaUser /></Link>
      <Link to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}><FaCodeCommit /></Link>
      <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}><FolderCode /></Link>
      <Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass={style.active}><Send /></Link>
    </nav>
  </>
);

export default Navbar;
