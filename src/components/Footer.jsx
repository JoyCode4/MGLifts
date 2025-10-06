import { Link } from "react-router-dom";
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="px-10 md:px-0 bg-[#262626] border-t border-gray-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                <span className="text-black font-bold">MG</span>
              </div>
              <span className="text-white font-semibold text-lg">
                MG
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your Access to Heights. Safe. Certified. Reliable.
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
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CiMail className="text-primary text-3xl font-bold" />
                <span>info@mgrealty.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CiMapPin className="text-primary text-3xl font-bold" />
                <span>123 Business St, City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
