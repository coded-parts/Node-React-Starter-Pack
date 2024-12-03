import React from 'react';
import { Github } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          This is a full-stack starter template that for building a Node backend
          with a typescript frontend for PoCs.
        </p>
        <p className="text-black font-bold text-center mb-4">
          Don not use on Production.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="https://github.com/coded-parts/Node-React-Starter-Pack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            <Github className="mr-2" size={20} />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;