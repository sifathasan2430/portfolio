import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiMongodb,
  DiNodejs,
  DiGit,
  DiFirebase,
} from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiVercel } from 'react-icons/si';

const MySkills = () => {
  const iconStyle = 'bg-amber-100 p-4 rounded-full';

  return (
    <div id="skills" className="max-w-6xl mx-auto font-inter py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-4xl font-bold mb-4 text-center">My Skills</h1>
      <p className="text-center text-gray-600 mb-10">
        Technologies and tools I've worked with throughout my projects and experience
      </p>

      {/* Frontend Skills */}
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <DiHtml5 className={iconStyle} size={80} />
            <p className="mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <DiCss3 className={iconStyle} size={80} />
            <p className="mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className={iconStyle} size={80} />
            <p className="mt-2">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <DiJavascript className={iconStyle} size={80} />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <DiReact className={iconStyle} size={80} />
            <p className="mt-2">React</p>
          </div>
        </div>
      </div>

      {/* Backend & Database */}
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Backend & Database</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <DiMongodb className={iconStyle} size={80} />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress className={iconStyle} size={80} />
            <p className="mt-2">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <DiNodejs className={iconStyle} size={80} />
            <p className="mt-2">Node.js</p>
          </div>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <DiGit className={iconStyle} size={80} />
            <p className="mt-2">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <SiVercel className={iconStyle} size={80} />
            <p className="mt-2">Vercel</p>
          </div>
          <div className="flex flex-col items-center">
            <DiFirebase className={iconStyle} size={80} />
            <p className="mt-2">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
