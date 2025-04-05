import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Experience from "./experience";

const WebMVideo = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center w-full px-4 py-8"
    >
      <span
        className="text-white text-2xl font-semibold mb-6 px-6 py-2 rounded-md"
        style={{ backgroundColor: "#1a1443" }}
      >
        Experience
      </span>

      {/* Animation & Experience Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        <div className="w-full md:w-1/2">
          <DotLottieReact
            src="https://lottie.host/a7841559-cbdc-4cd9-b545-68f46facd7d0/LVoAvA7cyQ.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Experience Component */}
        <div className="w-full md:w-1/2">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default WebMVideo;
