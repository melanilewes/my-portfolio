// src/pages/Contact.tsx
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "melanilewes@outlook.com",
      link: "mailto:melanilewes@outlook.com",
      description: "Feel free to reach out for job opportunities or collaboration"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/melani-lewes",
      link: "https://linkedin.com/in/melani-lewes",
      description: "Connect with me for professional networking"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Virginia, USA",
      link: null,
      description: "Open to onsite, remote, or hybrid opportunities"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-b from-mint-cream/20 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-lavender-blush/5 rounded-full animate-pulse delay-200" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-mist/5 rounded-full animate-pulse delay-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-mist to-lavender-blush mx-auto mb-8 transform transition-all duration-500 delay-300 scale-x-0 animate-[scale-x-100_0.5s_ease-out_0.3s_forwards]" />
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always excited to discuss opportunities in global affairs, international development, or policy research. Let's start a conversation!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className={`
                  group
                  border-0 shadow-lg bg-white hover:shadow-xl
                  transition-transform duration-300 ease-out delay-0
                  hover:-translate-y-2 hover:scale-105
                  transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="
                      mb-4 mx-auto flex h-16 w-16 items-center justify-center
                      rounded-full bg-gradient-to-br from-pink-mist/20 to-lavender-blush/30
                      transform transition-transform duration-300 ease-out delay-0
                      group-hover:scale-110 group-hover:rotate-12
                    "
                  >
                    <Icon className="text-pink-mist" size={24} />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2">
                    {contact.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-3">
                    {contact.content}
                  </p>
                  <p className="font-inter text-sm text-gray-500 mb-4">
                    {contact.description}
                  </p>
                  {contact.link && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-pink-mist text-pink-mist transition-transform duration-300 ease-out delay-0 hover:bg-pink-mist hover:text-white hover:scale-105"
                    >
                      <a
                        href={contact.link}
                        target={contact.title === "LinkedIn" ? "_blank" : undefined}
                        rel={contact.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2"
                      >
                        <Send size={16} />
                        {contact.title === "Email" ? "Send Email" : "Visit Profile"}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Card */}
        <Card
          className={`
            border-0 shadow-xl bg-gradient-to-r from-pink-mist/10 via-lavender-blush/10 to-sky-baby/10
            hover:shadow-2xl
            transition-transform duration-300 ease-out delay-0
            hover:-translate-y-2 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
          `}
        >
          <CardContent className="p-12 text-center">
            <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're looking for a passionate researcher, a dedicated policy analyst, or simply want to discuss global affairs over coffee, I'd love to hear from you. Let's explore how we can work together to make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-pink-mist hover:bg-pink-mist/90 text-white font-medium px-8 py-3 rounded-full transform transition-transform duration-300 ease-out delay-0 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                <a href="mailto:melanilewes@outlook.com" className="inline-flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pink-mist text-pink-mist transition-transform duration-300 ease-out delay-0 hover:bg-pink-mist hover:text-white hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                <a href="https://linkedin.com/in/melani-lewes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div
          className={`text-center mt-16 pt-8 border-t border-gray-200 transform transition-all duration-700 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="font-inter text-sm text-gray-500">
            © 2024 Melani Lewes. Built with passion for global affairs and positive change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
