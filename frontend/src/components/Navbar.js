import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("z_store_keys");
    localStorage.removeItem("z_deviceID");
    localStorage.removeItem("z_s_c_190941189");
    localStorage.removeItem("z_net_access_servers_190941189_1");
    window.location = "/login";
  };
  return (
    <nav className="nav">
      <Link to="/Home" href="#" className="nav__link">
        OA Remedy Club
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/Home" href="#" className="nav__link">
            วิดีโอคอล
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Form" href="#" className="nav__link">
            กรอกแบบฟอร์ม
          </Link>
        </li>
        <li className="nav__item">
          <button onClick={handleLogout}>ออกจากระบบ</button>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
