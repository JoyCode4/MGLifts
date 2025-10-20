import { useState } from "react";
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";
import data from "../../data.json";
import useScrollAnimation from "../hooks/useScrollAnimation";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Scroll animations
  const formAnim = useScrollAnimation("slideLeft", 0.1, 0);
  const contactInfoAnim = useScrollAnimation("slideRight", 0.1, 100);
  const companyInfoAnim = useScrollAnimation("fadeIn", 0.1, 200);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Message sending failed");
        }
      );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Map icon types to actual React icon components
  const iconMap = {
    phone: <CiPhone className="text-white text-3xl font-bold" />,
    email: <CiMail className="text-white text-3xl font-bold" />,
    mapPin: <CiMapPin className="text-white text-3xl font-bold" />,
  };

  // Get contact info from data.json and map icons
  const contactInfo = data.contactInfo.map((info) => ({
    ...info,
    icon: iconMap[info.iconType],
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Let's Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">
              Have questions? We're here to help you find the perfect equipment
              solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={formAnim.ref}
              className={`bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${formAnim.className}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3 text-3xl">📩</span> Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 (999) 000-0000"
                    className="flex h-12 w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    className="flex w-full rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E6C14A] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#D4AF37]/40 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              ref={contactInfoAnim.ref}
              className={`${contactInfoAnim.className}`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Reach out to us through any of these channels. We're here to
                help you with all your elevation equipment needs.
              </p>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-start space-x-4 p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#E6C14A] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 text-base">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Company Info */}
              <div
                ref={companyInfoAnim.ref}
                className={`mt-8 p-8 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-blue-50 shadow-lg ${companyInfoAnim.className}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-3 text-2xl">🏢</span> M G Engineering
                  Solutions
                </h3>
                <div className="space-y-3">
                  <p className="font-medium text-gray-800 text-base">
                    Your trusted partner for safe, reliable, and affordable
                    elevation solutions.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We specialize in boom lifts, scissor lifts, scaffolding
                    rental & sales, plus complete operation & maintenance
                    services.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-[#D4AF37]/20">
                    <p className="text-sm font-semibold text-[#D4AF37] italic">
                      "We deliver safe, reliable, and affordable elevation
                      solutions on time, every time."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
