import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ExternalLink } from 'react-icons/fa'; // Example import, adjust as needed

const PersonalWebsite = () => {
  const projects = [
    // Example project data
    { title: 'Project 1', description: 'Description 1', link: 'http://example.com' },
    { title: 'Project 2', description: 'Description 2', link: 'http://example.com' },
    { title: 'Project 3', description: 'Description 3', link: 'http://example.com' },
  ];

  const experiences = [
    {
      company: 'Company Name',
      role: 'Senior Developer',
      period: '2020 - Present',
      description: 'Led development of core products and mentored junior developers'
    },
    {
      company: 'Previous Company',
      role: 'Software Engineer',
      period: '2018 - 2020',
      description: 'Developed and maintained customer-facing applications'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Name</h1>
            <p className="text-xl text-gray-600 mb-8">Full Stack Developer | Open Source Contributor</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a passionate developer with experience in building scalable web applications.
            My expertise includes React, Node.js, and cloud technologies. I enjoy solving
            complex problems and contributing to open source projects.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Email <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;