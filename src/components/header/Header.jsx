import React, { useRef, useEffect, useState } from "react";
import { RiLeafLine, RiMenuLine, RiMoonLine } from "react-icons/ri";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link !== "products") {
      // Scroll to the section only if it's not the "Products" link
      const sectionRef = document.getElementById(link);
      if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "faqs", label: "FAQs" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav
      id="header"
      className={`${
        isScrolled ? "fixed-header" : ""
      } bg-[#fff] p-4 transition duration-300`}
    >
      <div className="container mx-auto flex items-center justify-around">
        <a
          href="#"
          className="flex items-center transition-colors duration-300 hover:text-green-800 hover:font-semibold text-transform: uppercase"
        >
          <RiLeafLine className="text-2xl font-bold mr-2" /> Plantex
        </a>

        <div className="lg:hidden">
          <button id="nav-toggle" className="text-gray-700 focus:outline-none">
            <RiMenuLine className="text-2xl" />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-gray-800 ${
                    activeLink === link.id
                      ? "underline text-green-700"
                      : "hover:text-green-700"
                  } px-2`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <RiMoonLine className="text-xl text-gray-500 change-theme" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
