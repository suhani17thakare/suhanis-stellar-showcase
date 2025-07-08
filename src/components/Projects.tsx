
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code2, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      icon: Globe,
      gradient: 'from-blue-500 to-purple-600',
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features for team productivity.',
      tech: ['React', 'Firebase', 'Material-UI', 'Context API'],
      icon: Code2,
      gradient: 'from-green-500 to-teal-600',
      image: '📝'
    },
    {
      title: 'Weather Forecast Mobile App',
      description: 'A cross-platform mobile application that provides real-time weather information with location-based forecasts and interactive weather maps.',
      tech: ['React Native', 'API Integration', 'Geolocation', 'AsyncStorage'],
      icon: Smartphone,
      gradient: 'from-yellow-500 to-red-500',
      image: '🌤️'
    },
    {
      title: 'Student Portal System',
      description: 'A comprehensive student management system for educational institutions with features for attendance tracking, grade management, and communication.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
      icon: Code2,
      gradient: 'from-purple-500 to-pink-600',
      image: '🎓'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for data analysis and visualization with multiple chart types, filters, and real-time data updates.',
      tech: ['Python', 'Flask', 'D3.js', 'Pandas', 'SQLAlchemy'],
      icon: Globe,
      gradient: 'from-indigo-500 to-blue-600',
      image: '📊'
    },
    {
      title: 'IoT Home Automation',
      description: 'A smart home automation system using IoT devices for controlling lights, temperature, and security systems through a web interface.',
      tech: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'React'],
      icon: Code2,
      gradient: 'from-teal-500 to-cyan-600',
      image: '🏠'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden group ${
                  inView ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <project.icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
