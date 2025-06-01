import {
  Globe,
  FileText,
  Users,
  BarChart3,
  Languages,
  BookOpen,
  Paintbrush,
  Plane,
  Dumbbell,
  Handshake,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Strengthening community ties through inclusive engagement initiatives that build trust, amplify community voices, and advance shared goals',
      color: 'bg-pink-mist/20 text-pink-mist',
    },
    {
      icon: FileText,
      title: 'Policy Analysis',
      description: 'Researching, critiquing, and evaluating of public policies',
      color: 'bg-lavender-blush/20 text-purple-600',
    },
    {
      icon: Users,
      title: 'Client Relations',
      description: 'Building trust based relationships with diverse clients by understanding their needs and delivering responsive high quality service',
      color: 'bg-sky-baby/20 text-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Adaptive Management',
      description: 'Improving individual results by continuously adjusting strategy through continuous feedback',
      color: 'bg-mint-cream/20 text-green-600',
    },
    {
      icon: Languages,
      title: 'Multilingual',
      description: 'English (Native), Spanish (Fluent), French (Business)',
      color: 'bg-soft-lemon/20 text-yellow-600',
    },
    {
      icon: BookOpen,
      title: 'Multi-Method Research',
      description: 'Qualitative and quantitative research methodologies',
      color: 'bg-pink-mist/20 text-pink-mist',
    },
  ];

  const interests = [
    {
      icon: Paintbrush,
      title: 'Art & Creativity',
      description: 'Paintings on various media that capture the essence of nature',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Exploring new cities, languages, and cuisines across different countries',
    },
    {
      icon: Dumbbell,
      title: 'Health & Fitness',
      description: 'Yoga flows plus daily walks and music filled gym sessions',
    },
    {
      icon: Handshake,
      title: 'Volunteering',
      description: 'Assisting immigrants and refugees with job search strategies',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-b from-lavender-blush/10 to-mint-cream/20 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-pink-mist/5 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-10 right-20 w-28 h-28 bg-sky-baby/5 rounded-full animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            Skills & Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-mist to-lavender-blush mx-auto mb-8 transform transition-all duration-500 delay-300 scale-x-0 animate-[scale-x-100_0.5s_ease-out_0.3s_forwards]" />
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            A blend of academic expertise, professional skills, and personal
            passions that drive my work in global affairs.
          </p>
        </div>

        {/* Professional Skills */}
        <div className="mb-20">
          <h3
            className={`font-poppins font-semibold text-2xl text-gray-800 text-center mb-12 transform transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Professional Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={idx}
                  className={`
                    group
                    border-0 shadow-lg bg-white hover:shadow-xl
                    transition-all duration-500 transform
                    hover:-translate-y-2 hover:scale-105
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  `}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`
                        mx-auto mb-4 flex h-16 w-16 items-center justify-center
                        rounded-full ${skill.color} transform
                        transition-transform duration-300 ease-out
                        group-hover:scale-110 group-hover:rotate-12
                      `}
                    >
                      <Icon size={28} />
                    </div>
                    <h4 className="font-poppins font-semibold text-lg text-gray-800 mb-3">
                      {skill.title}
                    </h4>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3
            className={`font-poppins font-semibold text-2xl text-gray-800 text-center mb-12 transform transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            Personal Interests
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <Card
                  key={idx}
                  className={`
                    group
                    border-0 shadow-md bg-white/70 backdrop-blur-sm
                    transition-all duration-500 transform
                    hover:-translate-y-2 hover:scale-105
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  `}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="
                        mx-auto mb-4 flex h-12 w-12 items-center justify-center
                        rounded-full bg-gradient-to-br from-pink-mist/20 to-lavender-blush/30
                        transform transition-transform duration-300 ease-out
                        group-hover:scale-110 group-hover:rotate-12
                      "
                    >
                      <Icon size={20} className="text-gray-700" />
                    </div>
                    <h4 className="font-poppins font-semibold text-gray-800 mb-2">
                      {interest.title}
                    </h4>
                    <p className="font-inter text-xs text-gray-600 leading-relaxed">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Fun Fact */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 delay-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-pink-mist/10 to-lavender-blush/20 max-w-2xl mx-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <h4 className="font-poppins font-semibold text-xl text-gray-800 mb-4 animate-pulse">
                Fun Fact! 🌟
              </h4>
              <p className="font-inter text-gray-600 leading-relaxed">
                Originally from Guatemala, I came to the United States at age four and went on to train in gymnastics for thirteen years!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
