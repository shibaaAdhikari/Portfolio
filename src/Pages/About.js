import React from 'react';
import Profile2 from "../Assessts/profile2.jpg";

const About = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-opacity-70 backdrop-filter backdrop-blur-md '>
      <div className='w-800 h-800 p-8 flex justify-between gap-10 backdrop-filter backdrop-blur-md border-4  border-pink-600 shadow-lg' style={{backgroundColor:"#f1e8f8"}}>
        <div className='flex items-center justify-center'>
          <img src={Profile2} alt="Profile" className='w-64 h-64  object-cover ' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-pink-600 text-3xl font-bold mb-4 text-center'>About Me</p>
          {/* Add your descriptions here */}
          <p className='max-w-md text-center font-bold mb-5' style={{color:"#120121"}}>
            👋 Hey, I'm Shibaa Adhikari, currently diving into the world of Computer Application at Tribhuvan University. 💻
          </p>
          <p className=' max-w-md text-center font-bold mb-5' style={{color:"#120121"}}>
            With 1.5 years of professional experience in the dynamic field of software development, I've been turning ideas into code-driven realities.
          </p>
          <p className=' max-w-md text-center font-bold' style={{color:"#120121"}}>
            🎬 Off-screen, my orbit includes thrilling sci-fi movies and exploring the mysteries of the universe. 🌌🍿
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
