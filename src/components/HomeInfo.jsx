import { useState } from 'react';

const HomeInfo = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderContent = {
    1: (
      <div>
        <h1 className="text-3xl font-bold text-blue-500">Hi, I am Rajkumar</h1>
        <p className="text-lg text-gray-700 mt-2">
          A passionate <span className="text-indigo-600">3D web developer</span> from <span className="text-indigo-600">Madurai</span>.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setActiveSection(2)}
        >
          Learn More
        </button>
      </div>
    ),
    2: (
      <div>
        <h1 className="text-3xl font-bold text-green-500">Work Experience</h1>
        <p className="text-lg text-gray-700 mt-2">
          I worked as a <span className="text-green-600">Frontend Developer Intern</span> at <span className="text-green-600">Telesto Energy Pvt. Ltd.</span>, where I honed my skills in responsive web design and frontend development.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setActiveSection(3)}
        >
          My Interests
        </button>
      </div>
    ),
    3: (
      <div>
        <h1 className="text-3xl font-bold text-purple-500">My Interests</h1>
        <p className="text-lg text-gray-700 mt-2">
          I have a keen interest in <span className="text-purple-600">AR/VR web development</span> and <span className="text-purple-600">3D web development</span>. I love creating immersive, interactive experiences.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Additionally, I excel in building <span className="text-purple-600">responsive websites</span> that provide seamless user experiences.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={() => setActiveSection(1)}
        >
          Go Back
        </button>
      </div>
    ),
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      {renderContent[activeSection]}
    </div>
  );
};

export default HomeInfo;
