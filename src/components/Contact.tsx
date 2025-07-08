
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'suhani.thakare@example.com',
      link: 'mailto:suhani.thakare@example.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Pune, Maharashtra',
      link: 'https://maps.google.com/?q=Pune,Maharashtra',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/suhani-thakare-76727a330/',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="w-8 h-8 mr-3 text-purple-400" />
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're a fellow student, a potential collaborator, or someone interested in my work, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                      inView ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                    <p className="text-gray-300">{info.content}</p>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/suhani-thakare-76727a330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:suhani.thakare@example.com"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-300">
              © 2024 Suhani Thakare. Built with ❤️ using React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
