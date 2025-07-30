import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaBars, FaTimes, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Git', level: 85 },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x250',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
      technologies: ['React', 'Firebase', 'Material UI'],
      image: 'https://via.placeholder.com/400x250',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location-based services.',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
      image: 'https://via.placeholder.com/400x250',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-bold">
            Joe<span className="text-yellow-300">Santos</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-500 absolute top-16 left-0 w-full py-4 px-6">
            <ul className="flex flex-col space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white hover:text-yellow-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white pt-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h3 className="text-xl mb-2">Hey, I am</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Joe Santos</h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-80">Web Developer</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Content Management System, dynamic Email Development, or fully customized Full Stack Applications, 
              I provide end-to-end solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#" 
                download
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <FaFileDownload /> Download Resume
              </a>
              <a 
                href="#projects" 
                className="font-semibold flex items-center gap-1 hover:underline"
              >
                Projects <span className="text-xl">→</span>
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-2">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/500x500" 
                alt="Joe Santos" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate web developer with over 5 years of experience creating modern web applications. 
                My journey began when I built my first website at 16, and I've been hooked ever since.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I specialize in building responsive, user-friendly interfaces with clean, efficient code. 
                When I'm not coding, you can find me hiking, playing guitar, or exploring new coffee shops.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver solutions 
                that not only work well but also provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-2">
            Skills & Technologies
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-2">
            My Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded font-medium hover:opacity-90"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-purple-600 text-purple-600 px-4 py-2 rounded font-medium hover:bg-purple-600 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-2">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded font-semibold hover:shadow-md transition-all"
              >
                Send Message
              </button>
            </form>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <p className="text-lg">joe.santos@example.com</p>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full">
                  <FaPhone className="text-xl" />
                </div>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full">
                  <FaWhatsapp className="text-xl" />
                </div>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Joe Santos. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-300 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;