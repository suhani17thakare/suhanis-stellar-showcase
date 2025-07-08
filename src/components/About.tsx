
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Hello! I'm Suhani Thakare
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm currently pursuing my Computer Engineering degree at Pimpri Chinchwad College of Engineering, Pune. 
                As a 3rd-year student, I'm passionate about exploring the vast world of technology and its applications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My journey in computer engineering has been filled with exciting challenges and learning opportunities. 
                I enjoy problem-solving, coding, and working on projects that can make a real impact.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always eager to learn new technologies, collaborate with like-minded individuals, and contribute to 
                innovative projects that push the boundaries of what's possible.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">3rd</div>
                  <div className="text-gray-600">Year Student</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600">CS</div>
                  <div className="text-gray-600">Engineering</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">👩‍💻</div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
