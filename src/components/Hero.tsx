
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Computer Engineering Student', 'Problem Solver', 'Tech Enthusiast', 'Future Engineer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Suhani Thakare
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
            <span className="border-r-2 border-purple-600 animate-pulse">
              {currentText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            3rd Year Computer Engineering Student at Pimpri Chinchwad College of Engineering, Pune.
            Passionate about technology and innovation, always eager to learn and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </Button>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/suhani-thakare-76727a330/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
              <a 
                href="mailto:suhani@example.com"
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-purple-50"
              >
                <Mail className="w-6 h-6 text-purple-600" />
              </a>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-purple-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
