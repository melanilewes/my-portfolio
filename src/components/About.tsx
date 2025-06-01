import { GraduationCap, Globe, Users, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const credentials = [
    {
      icon: GraduationCap,
      title: "B.A. in Global Affairs",
      description:
        "Graduated Magna Cum Laude with a focus on global governance & MENA",
    },
    {
      icon: Globe,
      title: "Trained in Conflict Analysis and Resolution",
      description:
        "Focusing on peacemaking through facilitation, mediation and negotiation",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-mint-cream/20"
    >
      {/* pastel blobs for background, optional */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-lavender-blush/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-sky-baby/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center font-poppins font-bold text-3xl sm:text-4xl text-gray-800">
          About Me
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo (plain circle) */}
          <div
            className={`mx-auto transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="w-72 h-72 overflow-hidden shadow-lg">
              <img
                src="/assets/img/profile.png"  /* update path if needed */
                alt="Melani Lewes"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text + credential cards */}
          <div
            className={`space-y-8 transform transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="font-poppins font-semibold text-2xl text-gray-800">
              Passionate Global Affairs Graduate
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed">
              As a recent Global Affairs graduate, I bring fresh perspectives and rigorous academic
              training to complex international challenges. My research entails a large span of 
              global issues and case studies.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map(({ icon: Icon, title, description }, i) => (
                <Card
                  key={i}
                  className={`border-0 bg-white/80 backdrop-blur-sm shadow-lg
                    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                    transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105`}
                >
                  <CardContent className="p-6 text-center">
                    <Icon size={32} className="mb-3 text-pink-mist" />
                    <h4 className="font-poppins font-semibold text-gray-800 mb-2">
                      {title}
                    </h4>
                    <p className="font-inter text-sm text-gray-600">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;