import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../projectdata";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <div className="text-center py-20 text-red-500">Project not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 font-inter">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-8 text-center">{project.title}</h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1 border rounded-xl overflow-hidden shadow-md">
          <img
            src={project.imageUrl[1]}
            alt={`${project.title} Preview`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 border px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Challenges Faced:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Future Plans:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.futurePlans.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Live Site
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          </div>

          {/* Back Button */}
          <div>
            <Link to="/" className="text-orange-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
