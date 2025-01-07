"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Accordion from "./components/common/accordian";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const accordionData = [
    {
      title: "Location",
      content:
        "This project is located in the prime area of Bangalore, offering easy access to major landmarks and transport hubs.",
    },
    {
      title: "Units",
      content:
        "We offer luxurious 2 & 3 BHK apartments designed with modern aesthetics and functionality to provide comfort.",
    },
    {
      title: "Price",
      content:
        "The pricing for this exclusive project starts at ₹80 Lakhs, providing excellent value for the location and amenities.",
    },
    {
      title: "Possession",
      content:
        "The possession of these premium homes will be handed over by December 2025, giving you ample time to plan.",
    },
  ];

  const onSubmit = (data) => {
    alert(`Thank you, ${data.name}! We will contact you soon.`);
    reset();
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Section */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-md shadow-md px-6 py-3 z-20">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-xl font-bold z-20">
            <img
              src="/prestige_logo.svg"
              alt="Prestige Logo"
              className="h-20 md:h-24 shadow-lg"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-xl text-black hover:text-[#846d47]"
            >
              About
            </a>
            <a
              href="#residential"
              className="text-xl text-black hover:text-[#846d47]"
            >
              Residential
            </a>
            <a
              href="#commercials"
              className="text-xl text-black hover:text-[#846d47]"
            >
              Commercials
            </a>
            <a
              href="#hospitality"
              className="text-xl text-black hover:text-[#846d47]"
            >
              Hospitality
            </a>
            <a
              href="#blogs"
              className="text-xl text-black hover:text-[#846d47]"
            >
              Blogs
            </a>
          </div>

          {/* Hamburger Menu for Mobile View */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 space-y-4 overflow-x-auto`}
        >
          <a
            href="#about"
            className="text-black hover:text-[#846d47] block text-xl"
          >
            About
          </a>
          <a
            href="#residential"
            className="text-black hover:text-[#846d47] block text-xl"
          >
            Residential
          </a>
          <a
            href="#commercials"
            className="text-black hover:text-[#846d47] block text-xl"
          >
            Commercials
          </a>
          <a
            href="#hospitality"
            className=" text-black hover:text-[#846d47] block text-xl"
          >
            Hospitality
          </a>
          <a
            href="#blogs"
            className="text-black hover:text-[#846d47] block text-xl"
          >
            Blogs
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              Discover Your Dream Home in Bangalore
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Premium real estate project with world-class amenities by Prestige Group.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-white text-[#846d47] font-semibold py-3 px-6 rounded-lg hover:bg-black hover:text-white"
            >
              Get Details
            </a>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 px-6 md:px-12 shadow-md bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Project Details</h2>
  <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
    This project features luxury apartments with premium facilities and modern architecture located in the heart of Bangalore.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-map-marker-alt text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Location</h3>
      <p className="text-gray-500">Bangalore, India</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-cogs text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Units</h3>
      <p className="text-gray-500">2 & 3 BHK Apartments</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-indian-rupee-sign text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Price</h3>
      <p className="text-gray-500">Starting at ₹80 Lakhs</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-calendar-check text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Possession</h3>
      <p className="text-gray-500">Dec 2025</p>
    </div>
  </div>


        {/* Embed Google Map */}
        <div className="mt-8">
  <h3 className="text-xl font-bold text-center">Project Location</h3>
  <div className="mt-4 flex justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.977813132166!2d77.750849!3d12.97469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e075e402bb3%3A0xd81374e18fa7a9a7!2sPrestige%20White%20Meadows!5e0!3m2!1sen!2sus!4v1736242543318!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow-md"
    ></iframe>
  </div>
</div>

      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Specifications</h2>
        <div className="mt-8">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>

      

      {/* Amenities Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
  <h2 className="text-3xl font-bold text-center">Amenities</h2>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-swimmer text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Swimming Pool</h3>
      <p className="text-gray-500 mt-2">
        A luxurious pool for relaxation.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-dumbbell text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Gymnasium</h3>
      <p className="text-gray-500 mt-2">
        State-of-the-art fitness center.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-users text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">Clubhouse</h3>
      <p className="text-gray-500 mt-2">
        A community hub for social gatherings.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <i className="fas fa-shield-alt text-3xl text-[#846d47]"></i>
      <h3 className="text-xl font-bold mt-4">24/7 Security</h3>
      <p className="text-gray-500 mt-2">Ensuring safety at all times.</p>
    </div>
  </div>
</section>


      {/* Contact Form */}
      <section
        id="contact"
        className="py-16 px-6 md:px-12 bg-[#846d47] text-white"
      >
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <p className="mt-4 text-center">
          Fill out the form below, and our team will get back to you shortly.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 max-w-xl mx-auto space-y-4"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md text-gray-700"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md text-gray-700"
          />
          <input
            {...register("phone", { required: true })}
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-3 rounded-md text-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-white text-[#846d47] font-bold py-3 hover:bg-black hover:text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      {/* <footer className="py-6 bg-black text-white text-center">
        <p>© {new Date().getFullYear()} Real Estate Project. All Rights Reserved.</p>
      </footer> */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
      <h4 className="text-xl font-semibold mb-4 uppercase">Reach Us</h4>
      <ul className="space-y-4 text-sm">
        <li>
          <span className="block font-medium">Corporate Address:</span>
          <a href="https://maps.app.goo.gl/3BMxbJ8ae54hP64UA" target="_blank" rel="nofollow" className="text-gray-300 hover:text-gray-100 transition duration-300">
            Prestige Falcon Towers, Brunton Road, Bengaluru - 560025, Karnataka, India
          </a>
        </li>
        <li>
          <span className="block font-medium">For sales enquiries:</span>
          <a href="tel:18003130080" className="text-gray-300 hover:text-gray-100 transition duration-300">1800 313 0080</a>
        </li>
        <li>
          <span className="block font-medium">For other enquiries:</span>
          <a href="tel:+918025591080" className="text-gray-300 hover:text-gray-100 transition duration-300">+91 80 2559 1080</a>
        </li>
        <li>
          <span className="block font-medium">Email:</span>
          <a href="mailto:properties@prestigeconstructions.com" className="text-gray-300 hover:text-gray-100 transition duration-300">properties@prestigeconstructions.com</a>
        </li>
      </ul>
    </div>

    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
      <h4 className="text-xl font-semibold mb-4 uppercase">Quick Links</h4>
      <ul className="space-y-4 text-sm">
        <li><a href="https://www.prestigeconstructions.com/about-us" className="text-gray-300 hover:text-gray-100 transition duration-300">About Us</a></li>
        <li><a href="https://www.prestigeconstructions.com/residential-projects" className="text-gray-300 hover:text-gray-100 transition duration-300">Residential</a></li>
        <li><a href="https://www.prestigeconstructions.com/commercial-projects" className="text-gray-300 hover:text-gray-100 transition duration-300">Commercial</a></li>
        <li><a href="https://www.prestigeconstructions.com/videos" className="text-gray-300 hover:text-gray-100 transition duration-300">Videos</a></li>
        <li><a href="https://www.prestigeconstructions.com/blog" className="text-gray-300 hover:text-gray-100 transition duration-300">Blogs</a></li>
        <li><a href="https://www.prestigeconstructions.com/faq" className="text-gray-300 hover:text-gray-100 transition duration-300">FAQs</a></li>
        <li><a href="https://www.prestigeconstructions.com/awards" className="text-gray-300 hover:text-gray-100 transition duration-300">Awards</a></li>
      </ul>
    </div>

    <div className="w-full sm:w-1/3">
      <h4 className="text-xl font-semibold mb-4 uppercase">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/Prestige.group" target="_blank" rel="nofollow" className="text-white hover:text-gray-400 transition duration-300">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/prestigeconstructions" target="_blank" rel="nofollow" className="text-white hover:text-gray-400 transition duration-300">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/prestigegroup" target="_blank" rel="nofollow" className="text-white hover:text-gray-400 transition duration-300">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/company/prestige-group-bangalore" target="_blank" rel="nofollow" className="text-white hover:text-gray-400 transition duration-300">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
</footer>


      <div className="py-6 bg-gray-900 text-white text-center">
          {" "}
          <p>
            © {new Date().getFullYear()} Real Estate Project. All Rights
            Reserved.
          </p>
        </div>
    </div>
  );
}
