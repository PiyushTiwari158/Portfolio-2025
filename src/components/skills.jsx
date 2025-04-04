import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
];

// Duplicate the skills array for infinite loop effect
const loopingSkills = [...skills, ...skills];

export default function SkillsSection() {
  return (
    <div id="skills" className="w-full bg-[#0d0d1c] py-10 flex flex-col items-center">
      <h2 className="text-2xl text-white font-semibold mb-6 relative">
        <span className="px-6 py-2 bg-purple-700 rounded-md" style={{backgroundColor: '#1a1443'}}>Skills</span>
      </h2>

      {/* Scrolling Container with Smooth Infinite Scroll */}
      <div className="relative w-[70%] overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }} // Moves the full width before looping
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {loopingSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-28 h-28 bg-[#111126] rounded-xl shadow-md border border-transparent hover:border-purple-500 transition-all duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-white text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
