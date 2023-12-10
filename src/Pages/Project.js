import React from 'react';

const projects = [
  {
    title: 'Music Streaming Web Application',
    description: 'A music streaming web application tailored for users to enjoy music through diverse features and bookmark favorite songs. Moreover, artist hold the authority to upload music. Primarily dedicated to the Nepalese industry, this platform aims to offer equal opportunities to all artists, fostering growth in the local music scene and enhancing the overall music market in Nepal.',
    technologies: ['React', 'Node.js', 'Express'],
    githubLink: 'https://github.com/yourusername/project1',
    liveDemoLink: 'https://yourproject1demo.com',
  },
  {
    title: 'Music Streaming Web Application',
    description: 'A music streaming web application tailored for users to enjoy music through diverse features and bookmark favorite songs. Moreover, artist hold the authority to upload music. Primarily dedicated to the Nepalese industry, this platform aims to offer equal opportunities to all artists, fostering growth in the local music scene and enhancing the overall music market in Nepal.',
    technologies: ['React', 'Node.js', 'Express'],
    githubLink: 'https://github.com/yourusername/project1',
    liveDemoLink: 'https://yourproject1demo.com',
  },
  {
    title: 'Music Streaming Web Application',
    description: 'A music streaming web application tailored for users to enjoy music through diverse features and bookmark favorite songs. Moreover, artist hold the authority to upload music. Primarily dedicated to the Nepalese industry, this platform aims to offer equal opportunities to all artists, fostering growth in the local music scene and enhancing the overall music market in Nepal.',
    technologies: ['React', 'Node.js', 'Express'],
    githubLink: 'https://github.com/yourusername/project1',
    liveDemoLink: 'https://yourproject1demo.com',
  },
];

const Project = () => {
  return (
    <div className='container mx-auto p-4 h-screen bg-opacity-70 backdrop-filter backdrop-blur-md '>
      <h2 className='text-2xl text-pink-600 font-bold mb-4'>Personal Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className='bg-gray-800 p-6 rounded-md shadow-lg mb-8'>
          <h3 className='text-xl text-pink-400 font-semibold mb-2'>{project.title}</h3>
          <p className='text-pink-100 mb-4'>{project.description}</p>
          <p className='mb-2 text-white'>
            <strong className='text-white'>Technologies:</strong> {project.technologies.join(', ')}
          </p>
          <div className='flex space-x-4'>
            <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
              GitHub
            </a>
            {project.liveDemoLink && (
              <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer' className='text-green-500 hover:underline'>
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
