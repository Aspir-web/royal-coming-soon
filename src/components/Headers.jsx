import { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  // *** CHANGE #1: A single state to track the open submenu by its title ***
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setServicesDropdownOpen(false);
        setOpenSubMenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setServicesDropdownOpen(false);
      setOpenSubMenu(null);
    }
  };

  const handleServicesClick = (e) => {
    e.stopPropagation();
    if (isMobile) {
      setServicesDropdownOpen(!servicesDropdownOpen);
      if (servicesDropdownOpen) {
        setOpenSubMenu(null);
      }
    }
  };

  // *** CHANGE #2: A scalable function to toggle any submenu on mobile ***
  const handleSubMenuToggle = (e, title) => {
    e.stopPropagation();
    if (isMobile) {
      setOpenSubMenu(openSubMenu === title ? null : title);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    setOpenSubMenu(null);
  };

  return (
  <nav className="flex items-center justify-between px-6 py-4 bg-[#95104a85] fixed top-0 w-full z-50 text-yellow-200">
    {/* Logo Section - hidden on mobile if menuOpen */}
    <Link
      to="/"
      onClick={closeAllMenus}
      className={`flex items-center flex-col ${
        menuOpen && isMobile ? "hidden" : "block"
      }`}
    >
      <img src={logo} alt="logo" className="h-14 w-auto" />
      {/* <h3 className="text-[#211457] text-[8px] font-semibold">FOUR SQUARE REALTY</h3>
      <i className="text-[#211457] text-[6px]">“Find Your Space, Find Your Story”</i> */}
    </Link>

    {/* Burger / Close Button */}
    <button
      className={`md:hidden text-[#211457] text-3xl focus:outline-none ${
        menuOpen ? "absolute top-4 right-6" : ""
      }`}
      onClick={toggleMenu}
    >
      {menuOpen ? "x" : "☰"}
    </button>

    {/* Navigation Links */}
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } w-full md:w-auto md:flex md:items-center md:space-x-8 mt-4 md:mt-0 text-yellow-200`}
    >
      <Link
        to="/"
        className="block px-3 py-2 hover:opacity-90 transition-all duration-200"
        onClick={closeAllMenus}
      >
        <h1>Home</h1>
      </Link>
    { /* <Link
        to="/about"
        className="block px-3 py-2 hover:opacity-90 transition-all duration-200"
        onClick={closeAllMenus}
      >
        <h1>About</h1>
      </Link> */}
      <Link
        to="/products"
        className="block px-3 py-2 hover:opacity-90 transition-all duration-200"
        onClick={closeAllMenus}
      >
        <h1>Products</h1>
      </Link>
      { /*<Link
        to="/investment"
        className="block px-3 py-2 hover:opacity-90 transition-all duration-200"
        onClick={closeAllMenus}
      >
        <h1>Investment</h1>
      </Link> */}
      <Link
        to="#"
        className="block px-3 py-2 hover:opacity-90 transition-all duration-200"
        onClick={closeAllMenus}
      >
       <h1>Contact Us</h1> 
      </Link>
    </div>
  </nav>
);

};

export default Header;




