import { Link, useNavigate } from "react-router-dom";
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";
import data from "../../data.json";

const Footer = () => {
  const navigate = useNavigate();

  // Map icon types to actual React icon components
  const iconMap = {
    phone: <CiPhone className="text-primary text-3xl font-bold" />,
    email: <CiMail className="text-primary text-3xl font-bold" />,
    mapPin: <CiMapPin className="text-primary text-3xl font-bold" />,
  };

  // Get contact info from data.json and map icons
  const contactInfo = data.contactInfo.map((info) => ({
    ...info,
    icon: iconMap[info.iconType],
  }));

  return (
    <footer className="px-10 md:px-0 bg-[#262626] border-t border-gray-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-inherit rounded-xl flex items-center justify-center">
                {/* <span className="text-black font-bold">MG</span> */}
                <img
                  src="/assets/logo_mg.png"
                  alt="logo"
                  className="w-10 h-10 cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => navigate("/")}
                />
              </div>
              <span className="text-white font-semibold text-lg">
                M G Engineering Solutions
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Safe, reliable, and affordable elevation solutions on time, every
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-muted-foreground text-sm"
                >
                  {info.icon}
                  {info.iconType === "mapPin" ? (
                    <span>{info.detail}</span>
                  ) : (
                    <a
                      href={info.link}
                      className="hover:text-primary break-all"
                    >
                      {info.detail}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 M G Engineering Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
