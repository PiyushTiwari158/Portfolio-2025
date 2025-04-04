import { personalData } from "../data.js/about";
const AboutMe = () => {

  return (
    <section id="about" className="bg-[#0b0e19] text-white py-12 px-6 sm:px-16">
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "120%",
          transform: "translateY(100%)",
        }}
      >
        <span
          style={{
            backgroundColor: "#1a1443",
            width: "fit-content",
            color: "white",
            transform: "rotate(90deg)",
            padding: "8px 20px",
            fontSize: "1.25rem",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          ABOUT ME
        </span>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="./profile.jpeg"
            alt="Piyush Tiwari"
            className="w-60 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-green-400 text-2xl sm:text-3xl font-bold mb-4">
            WHO I AM?
          </h2>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
