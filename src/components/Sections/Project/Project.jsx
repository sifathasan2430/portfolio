import React from 'react';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const Project = () => {
  const techStack = ['HTML', 'Tailwind', 'React', 'MongoDB', 'Express'];
  const features = [
    'Filter & Search** apartments by category, location, price, and amenities',
    'Admins can upload, update, and manage apartment listings.',
    'Users can view room details and book available apartments.',
    'Secure login and role-based access for admins and users.',
    'Users can track their bookings and view statuses (e.g., pending, approved).',
  ];

  return (
    <div id="projects" className="max-w-6xl mx-auto font-inter py-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-10">My Project</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Scrollable Image Section */}
        <div className="w-full lg:w-1/2 h-[550px] overflow-y-auto rounded-xl shadow-lg border">
          <img
            src="https://i.ibb.co/F41JGRKX/png.jpg"
            alt="Room Finder Preview"
            className="w-full"
          />
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-1/2 h-[550px] flex flex-col justify-between space-y-6 overflow-y-auto pr-2">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Room Finder</h3>
            <p className="text-gray-700 leading-relaxed">
              A full-stack web application where <strong>admins</strong> can manage apartment listings and <strong>users</strong> can search, filter, and book rooms. Built with secure authentication and booking management features.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Button key={index} variant="outline" className="text-sm px-3 py-1">
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <Button asChild className="mt-4 w-full">
              <Link to="https://roomatefinder-5e9a6.web.app" target="_blank" rel="noopener noreferrer">
                Live Site
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
