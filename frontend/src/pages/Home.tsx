import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to Full Stack Starter
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg text-gray-700 mb-4">
          This is a modern full-stack starter template featuring:
        </p>
        <ul className="space-y-2 text-gray-600 mb-6">
          <li className="flex items-center">
            <ArrowRight className="mr-2" size={16} />
            Express.js backend with organized routes
          </li>
          <li className="flex items-center">
            <ArrowRight className="mr-2" size={16} />
            React frontend with TypeScript
          </li>
          <li className="flex items-center">
            <ArrowRight className="mr-2" size={16} />
            TailwindCSS for styling
          </li>
          <li className="flex items-center">
            <ArrowRight className="mr-2" size={16} />
            React Router for navigation
          </li>
        </ul>
        <Link
          to="/users"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          View Users
          <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
