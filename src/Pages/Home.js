import React from "react";
import { useState } from "react";
import Profile from "../Assessts/profile.jpg";
import Resume from "../../src/Resume/resume.pdf";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };
  const profileSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });
  const profileImageStyle = {
    width: "90%",
    borderRadius: "50%",
    position: "relative",
    left: "5%",
    top: "5%",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    backgroundColor: "rgba(109, 57, 120, 0.5)",
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Shibaa_Adhikari_cv.pdf";
    link.click();
  };

  return (
    <div className="text-white flex flex-col justify-center items-center mx-auto w-screen h-screen bg-cover">
      <animated.div style={{ ...profileSpring, ...overlayStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
       <img src={Profile} alt="Profile" style={profileImageStyle} />
        {showText && (
          <div style={{ position: "absolute", right: "-45%", top: "30%" }}>
            <p className="text-pink-200 text-lg">Hi, I'm Shibaa Adhikari❤️</p>
          </div>
        )}
      </animated.div> 
      <animated.div className="text-container max-w-screen-md text-center mt-10" style={textSpring}>
        <h1 className="text-2xl text-pink-600 font-montserrat mt-5">
          🚀 Welcome to my Web Development Universe! 🌐✨
        </h1>

        <p className="text-pink-200 mt-2 mb-5">
          {" "}
          I'm a MERN stack enthusiast, turning ideas into seamless digital
          experiences. From powerful backends with Node.js to dynamic UIs with
          React, I'm here to craft the web's next chapter. Let's build something
          amazing together! 💻🌟
        </p>
      </animated.div>
      <div className="mt-4">
        <button
          className="bg-pink-600 text-pink-200 px-4 py-2 mr-2 hover:bg-pink-700 hover:text-pink-300"
          onClick={downloadResume}
        >
          Resume
        </button>

        <button className="bg-pink-600 text-pink-200 px-4 py-2 hover:bg-pink-700 hover:text-pink-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
