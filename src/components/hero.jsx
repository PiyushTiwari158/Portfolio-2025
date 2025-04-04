import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaSync,
  FaTwitter,
} from "react-icons/fa";
import handleScroll from "./scroll";

const MyInfo = () => {
  const handleViewResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1-1BT3zGsC3LYCeB4Yv4GqXVkh2dWUvZ7/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-white px-6 md:px-12">
      <div className="max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
        {/* Left Side (Text & Buttons) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Hello, <br />
            This is <span className="text-pink-500">Piyush Tiwari</span>, <br />
            I&apos;m a Professional{" "}
            <span className="text-green-400">Software Engineer.</span>
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5 text-pink-400 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <FaSync />
            <FaTwitter />
          </div>

          {/* Buttons - Responsive without affecting large screens */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto md:w-max px-6 py-3 border rounded-full text-white border-purple-400 hover:bg-purple-500 text-sm sm:text-base cursor-pointer"
            >
              CONTACT ME 🤝
            </button>
            <button
              onClick={handleViewResume}
              className="w-full sm:w-auto md:w-max px-6 py-3 border rounded-full text-white border-purple-400 hover:bg-purple-500 text-sm sm:text-base cursor-pointer"
            >
              GET RESUME ⬇️
            </button>
          </div>
        </div>

        {/* Right Side (Code Box) */}
        <div className="flex-1 bg-[#11172c] p-4 rounded-lg shadow-lg relative w-full sm:w-[90%] md:w-auto">
          {/* Code Box Header */}
          <div className="flex space-x-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <pre className="text-xs sm:text-sm md:text-base text-gray-300 overflow-x-auto">
            <code className="text-pink-400">const</code> coder = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-yellow-400">name</span>: 'Piyush
            Tiwari',
            <br />
            &nbsp;&nbsp;<span className="text-yellow-400">skills</span>:
            ['React', 'JavaScript', 'Python', 'Express', 'NodeJS', 'MongoDB',
            'Docker']
            <br />
            &nbsp;&nbsp;<span className="text-yellow-400">
              hardWorker
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-400">
              quickLearner
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-400">
              problemSolver
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-green-400">hireable</span>:{" "}
            <span className="text-pink-400">function</span>() {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-pink-400">return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hardWorker{" "}
            <span className="text-yellow-400">&</span>
            <span className="text-yellow-400">&</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.problemSolver{" "}
            <span className="text-yellow-400">&</span>
            <span className="text-yellow-400">&</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills.length {">="} 5
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;{"},"}
            <br />
            {"};"}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;

