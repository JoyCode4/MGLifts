import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShow(y < 10 || y < lastY || y < 80);
      if (y > lastY && y > 80) setIsMenuOpen(false);
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Our Services" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <nav
      className={`navbar shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src="/assets/logo_mg.png"
            alt="logo"
            className="w-24 h-auto cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/")}
          />
          {/* <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-gold p-2 rounded-lg">
              <span className="font-bold text-xl text-primary">MG</span>
            </div>
            <span className="text-xl font-bold text-primary">Lifts</span>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-[#D4AF37]"
                      : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+919826000000"
              className="hidden md:flex items-center gap-2 hover:opacity-80 transition-all duration-300"
            >
              <FaPhoneAlt className="text-white text-xl" />
              <span className="text-white">+91 98260 00000</span>
            </a>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="my-4 btn-inherit border-2 border-[#D4AF37] rounded-full hover:bg-[#D4AF37] px-4 py-2"
              >
                <span className="text-white">Get A Quote</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-text-primary hover:text-primary-gold hover:bg-primary-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col justify-center items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`w-40 flex justify-start items-center px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-[#D4AF37] text-white"
                      : "bg-gray-800 hover:text-primary hover:bg-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="">{item.label}</div>
                </Link>
              ))}
              <Link
                to="/contact"
                className="my-4 px-10 py-3 btn-inherit border-2 border-[#D4AF37] rounded-full hover:bg-[#D4AF37]"
              >
                <span className="text-white">Get A Quote</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
