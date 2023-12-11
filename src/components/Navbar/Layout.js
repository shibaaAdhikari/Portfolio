// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../Assessts/background4.jpg"
const containerStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
};

const Layout = ({ children }) => {
  return (
    <div  style={containerStyle}>
      <ul className='flex justify-end gap-20 mx-8 pt-4 text-pink-200 text-2xl'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
         <li>
          <Link to="/experience">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li> 
        <li>
          <Link to="/contact">Contact</Link>
        </li> 
      </ul>
      {children}
    </div>
  );
};

export default Layout;
