
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const aboutSection = document.getElementById('portfolio');
    if (aboutSection) {
      const navHeight = 80;
      const offsetTop = aboutSection.offsetTop - navHeight;
      
      // Enhanced smooth scrolling with easing
      const start = window.scrollY;
      const distance = offsetTop - start;
      const duration = 1200;
      let startTime: number;

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, start + distance * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-mist/10 via-lavender-blush/20 to-sky-baby/15"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight transform transition-all duration-700 animate-slide-up">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-mist to-lavender-blush animate-pulse">
              Melani Lewes
            </span>
          </h1>
          
          <p className="font-inter text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed transform transition-all duration-700 delay-200 animate-slide-up">
            B.A. in Global Affairs | Global Governance & MENA Specialist
          </p>
          
          <p className="font-inter text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 delay-300 animate-slide-up">
            Passionate about international relations, conflict analysis, and creating positive change 
            in our interconnected world. Welcome to my digital portfolio!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 delay-500 animate-slide-up">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-pink-mist hover:bg-pink-mist/90 text-white font-medium px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-2 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </Button>
            
            <Button
              asChild 
              variant="outline"
              className="border-pink-mist text-pink-mist hover:bg-pink-mist hover:text-white font-medium px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:-rotate-2 focus:outline-none focus:ring-2 focus:ring-pink-mist focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              <a
                href="https://drive.google.com/file/d/1M5vjLBE68xYqZ6RqC2PQ5oFMk0yiGA-k/view"
                target="_blank"
                rel="noopener noreferrer"
              >
              View Resume
              </a>
            </Button>           
          </div>
        </div>
      </div>
      
      {/* Floating Elements with Parallax */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-lavender-blush/30 rounded-full animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${Math.sin(scrollY * 0.01) * 10}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-16 h-16 bg-sky-baby/30 rounded-full animate-pulse delay-1000"
        style={{
          transform: `translateY(${scrollY * -0.2}px) translateX(${Math.cos(scrollY * 0.01) * 15}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-5 w-12 h-12 bg-mint-cream/40 rounded-full animate-pulse delay-500"
        style={{
          transform: `translateY(${scrollY * 0.4}px) translateX(${Math.sin(scrollY * 0.015) * 8}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-20 w-8 h-8 bg-soft-lemon/50 rounded-full animate-pulse delay-700"
        style={{
          transform: `translateY(${scrollY * -0.3}px) translateX(${Math.cos(scrollY * 0.012) * 12}px)`
        }}
      ></div>
    </section>
  );
};

export default Hero;
