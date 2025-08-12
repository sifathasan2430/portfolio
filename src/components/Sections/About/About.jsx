import React from 'react';

const About = () => {
  return (
    <div id='about' className='max-w-6xl mx-auto font-inter py-10 px-4 sm:px-6 md:px-8'>
      <h1 className='text-4xl font-bold mb-6'>About Me</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Hello! I'm a passionate web developer who loves turning creative ideas into beautiful, functional websites. My journey began with a simple curiosity about how things worked, which quickly evolved into a full-blown passion for building responsive, user-friendly applications.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        I specialize in the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) and design clean, modern interfaces using **Tailwind CSS**. I enjoy the entire process of bringing a project to life, from UI design to integrating REST APIs. The satisfaction of seeing a project go from a blank canvas to a fully-functional application is what drives me.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Outside of coding, my creative passion for **painting and sketching** influences my work. I believe that a well-designed website, like a good painting, should be both visually appealing and thoughtfully structured.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed">
        I'm a constant learner, always eager to explore new technologies and best practices. I'm currently looking for opportunities to collaborate on real-world projects where I can continue to grow and make a meaningful impact.
      </p>
    </div>
  );
};

export default About;