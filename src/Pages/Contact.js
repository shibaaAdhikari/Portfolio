import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Phone from '../Assessts/contact.png';

const Contact = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-opacity-70 backdrop-filter backdrop-blur-md '>
      <div className='w-800 h-800 p-8 flex flex-col justify-between gap-8 backdrop-filter backdrop-blur-md border-4  border-pink-600 shadow-lg' style={{ backgroundColor: "#f1e8f8" }}>
        <p className='text-3xl font-bold' style={{color:"#120121"}}>📲 Connect With Me Today 🤝</p>
        <div className='flex justify-evenly'>
          <p>
            <a href="https://github.com/shibaaAdhikari" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} className='icon text-pink-300 hover:text-pink-500' />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/shibaaadhikarii/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className='icon  text-pink-300 hover:text-pink-500' />
            </a>
          </p>
          <p>
            <a href="mailto:shibaaadhikari0@gmail.com">
              <FaEnvelope size={40} className='icon text-pink-300 hover:text-pink-500' />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
