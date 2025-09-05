import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaCodeCommit } from "react-icons/fa6";
import { FolderCode, Send } from 'lucide-react';

const Navbar = () => (
  <>
    {/* Desktop Navbar */}
    <nav className={style['desktop-navbar']}>
      <div className={style.creater}>Abish Y</div>
      <div className={style.navlinks}>
        <NavLink to="/" end className={({ isActive }) => isActive ? style.active : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? style.active : ""}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? style.active : ""}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? style.active : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? style.active : ""}>Contact</NavLink>
      </div>
    </nav>

    {/* Mobile Navbar */}
    <nav className={style['mobile-navbar']}>
      <NavLink to="/" end className={({ isActive }) => isActive ? style.active : ""}><FaHome /></NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? style.active : ""}><FaUser /></NavLink>
      <NavLink to="/skills" className={({ isActive }) => isActive ? style.active : ""}><FaCodeCommit /></NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? style.active : ""}><FolderCode /></NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? style.active : ""}><Send /></NavLink>
    </nav>
  </>
);

export default Navbar;
