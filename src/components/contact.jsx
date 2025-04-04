import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0b0d1b] text-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <div className="bg-[#111427] p-6 rounded-lg border border-gray-700">
          <h2 className="text-teal-400 text-2xl font-semibold mb-4">
            CONTACT WITH ME
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            If you have any questions or concerns, please don’t hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <div className="flex flex-col space-y-4">
            <label className="text-sm">Your Name:</label>
            <input
              type="text"
              className="p-3 rounded-md bg-[#1a1d2f] text-white outline-none border border-gray-600"
              placeholder="Enter your name"
            />

            <label className="text-sm">Your Email:</label>
            <input
              type="email"
              className="p-3 rounded-md bg-[#1a1d2f] text-white outline-none border border-gray-600"
              placeholder="Enter your email"
            />

            <label className="text-sm">Your Message:</label>
            <textarea
              rows="4"
              className="p-3 rounded-md bg-[#1a1d2f] text-white outline-none border border-gray-600"
              placeholder="Enter your message"
            ></textarea>

            <a
              href="mailto:piyushtiwari7978@gmail.com"
              className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium"
            >
              SEND MESSAGE <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Details & Social Links */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-lg">
            <FaEnvelope className="text-gray-400" />
            <a
              href="mailto:piyushtiwari7978@gmail.com"
              className="hover:text-teal-400"
            >
              piyushtiwari7978@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaPhone className="text-gray-400" />
            <span>+919583451334</span>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>Daltonganj, Jharkhand, 82201, India </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/PiyushTiwari158"
              target="_blank"
              rel="github"
            >
              <FaGithub className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/piyush-tiwari-b5b606195"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute right-0 top-[25%] -translate-y-20/2 px-4 py-2 text-white text-sm font-semibold rotate-90"
          style={{ backgroundColor: "#1a1443" }}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default Contact;
