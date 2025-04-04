import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Experience from "./experience";

const WebMVideo = () => {
  return (
    <div id="experience" className="flex flex-col items-center justify-center w-full">
      <span
        className="text-white text-2xl font-semibold mb-4 px-6 py-2 rounded-md"
        style={{ backgroundColor: "#1a1443" }}
      >
        Experience
      </span>

      {/* Animation & Experience Section */}
      <div className="flex items-center justify-center gap-6 w-full">
        <DotLottieReact
          src="https://lottie.host/a7841559-cbdc-4cd9-b545-68f46facd7d0/LVoAvA7cyQ.lottie"
          loop
          autoplay
          style={{ width: "50%", height: "50%" }}
        />

        {/* Experience Component */}
        <div className="flex-1">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default WebMVideo;
