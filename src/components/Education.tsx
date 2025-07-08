
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent performance in core computer engineering subjects',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Project Leadership',
      description: 'Led multiple team projects and collaborated effectively',
      icon: Users,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Technical Skills',
      description: 'Proficient in multiple programming languages and frameworks',
      icon: BookOpen,
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Education Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Computer Engineering</h3>
                  <p className="text-purple-600 font-medium">Bachelor's Degree</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                  <span>Pimpri Chinchwad College of Engineering, Pune</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                  <span>Currently in 3rd Year (2022-2026)</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Core Subjects</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Data Structures</div>
                  <div>• Algorithms</div>
                  <div>• Computer Networks</div>
                  <div>• Database Systems</div>
                  <div>• Operating Systems</div>
                  <div>• Software Engineering</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h3>
              
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    inView ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Progress Timeline */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Academic Progress</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">1st Year</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-green-600 font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2nd Year</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full"></div>
                    </div>
                    <span className="text-green-600 font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">3rd Year</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-purple-600 font-medium">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">4th Year</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-2 rounded-full w-1/4"></div>
                    </div>
                    <span className="text-gray-500 font-medium">Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
