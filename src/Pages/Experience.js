import React from 'react';

const Experience = () => {
  const portfolioData = [
    { skill: 'HTML', score: 90 },
    { skill: 'CSS', score: 85 },
    { skill: 'React', score: 80 },
    { skill: 'Redux', score: 90 },
    { skill: 'Node', score: 70 },
    { skill: 'PostgresSql', score: 80 },
    { skill: 'Tailwindcss', score: 70 },
    { skill: 'Reactstrap', score: 95 },
    // Add more skills as needed
  ];

  return (
    <div className='container mx-auto p-4 h-screen bg-opacity-70 backdrop-filter backdrop-blur-md flex flex-col mt-20'>
      <div>
        <h2 className='text-2xl font-bold mb-4 text-pink-600'>SKILLS</h2>
        {portfolioData.map((item, index) => (
          <div key={index} className='mb-4 relative'>
            <p className='text-lg text-pink-200 font-semibold mb-2'>{item.skill}</p>
            <div className='flex items-center'>
              <div className='bg-gray-300 h-2 w-full rounded overflow-hidden'>
                <div
                  className={`bg-pink-400 h-full rounded animate-w-${item.score}`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
