import { Link, useNavigate } from "react-router-dom";
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";

const Footer = () => {
  const navigate = useNavigate();
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
                  to="/sales"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-sm hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CiPhone className="text-primary text-3xl font-bold" />
                <a href="tel:+919960731781" className="hover:text-primary">
                  9960731781
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CiMail className="text-primary text-3xl font-bold" />
                <a
                  href="mailto:mgengineeringsolutions123@gmail.com"
                  className="hover:text-primary break-all"
                >
                  mgengineeringsolutions123@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CiMapPin className="text-primary text-3xl font-bold" />
                <span>Wasuli Phata, Chakan MIDC, Pune-410501</span>
              </li>
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
