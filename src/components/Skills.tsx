
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Smartphone, Cpu, Palette } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['C/C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: ['MySQL', 'Git/GitHub', 'VS Code', 'Postman', 'Linux'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Cpu,
      title: 'Core Subjects',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Computer Networks', 'OS'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Android Basics', 'UI/UX Design', 'Flutter (Learning)'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Design & Others',
      skills: ['Figma', 'Photoshop', 'Problem Solving', 'Team Work', 'Communication'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Here are the technologies and skills I've been working with during my academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
