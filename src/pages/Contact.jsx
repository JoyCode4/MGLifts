import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <CiPhone className="text-primary text-3xl font-bold" />,
      title: "Phone",
      detail: "9960731781",
      link: "tel:+919960731781",
    },
    {
      icon: <CiMail className="text-primary text-3xl font-bold" />,
      title: "Email",
      detail: "mgengineeringsolutions123@gmail.com",
      link: "mailto:mgengineeringsolutions123@gmail.com",
    },
    {
      icon: <CiMapPin className="text-primary text-3xl font-bold" />,
      title: "Address",
      detail: "Wasuli Phata, Chakan MIDC, Pune-410501",
      link: "https://maps.google.com/?q=Wasuli+Phata+Chakan+MIDC+Pune+410501",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#262626]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white">
              Have questions? We're here to help you find the perfect equipment
              solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-xl border border-input border-gray-600 bg-[#eeead8] px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4AF37] focus-visible:border-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-xl border border-input border-gray-600 bg-[#eeead8] px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4AF37]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-xl border border-input border-gray-600 bg-[#eeead8] px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4AF37]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="flex w-full rounded-xl border border-input border-gray-600 bg-[#eeead8] px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4AF37] h-32"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:px-12 py-3 text-black btn-inherit border-2 border-[#c1ac4f] rounded-full hover:bg-[#eeead8] hover:text-black"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Contact Information
              </h2>
              <p className="text-black mb-8">
                Reach out to us through any of these channels. We're here to
                help you with all your elevation equipment needs.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 rounded-xl border border-gray-600 bg-[#eeead8] hover:border-b-4 hover:border-[#e2d7b2] transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#f5e4c2] rounded-full flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-500">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Company Info */}
              <div className="mt-8 p-6 rounded-xl border border-gray-600 bg-[#eeead8]">
                <h3 className="text-xl font-semibold text-black mb-4">
                  M G Engineering Solutions
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">
                    Your trusted partner for safe, reliable, and affordable
                    elevation solutions.
                  </p>
                  <p className="text-sm">
                    We specialize in boom lifts, scissor lifts, scaffolding
                    rental & sales, plus complete operation & maintenance
                    services.
                  </p>
                  <p className="text-sm font-semibold mt-4">
                    "We deliver safe, reliable, and affordable elevation
                    solutions on time, every time."
                  </p>
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
