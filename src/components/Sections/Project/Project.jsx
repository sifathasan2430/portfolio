import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../../projectdata';

const Project = () => {
  return (
    <div id='projects' className="max-w-6xl mx-auto py-12 px-4 font-inter">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

  <div className="grid md:grid-cols-3 gap-8">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-lg">
  <img
    src={project.imageUrl[0]}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
  />
</div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 flex-grow line-clamp-3">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.id}`}
          className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors"
        >
          View More / Details
        </Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Project;
