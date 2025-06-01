
import { useState, useEffect, useRef } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Air Pollution in India Policy Paper",
      type: "policy",
      category: "Policy Paper",
      description: "Analyzes causes, consequences, and policy solutions for India's air pollution crisis, emphasizing industrial emissions, vehicle exhaust, and harmful agricultural practices.",
      tags: ["Air Pollution", "India", "Policy", "Environment"],
      downloadLink: "https://drive.google.com/file/d/1CqsuXOSUqaCnsgDEfzsv7oIBlmbGpUad/view?usp=sharing",
      featured: false
    },
    {
      id: 2,
      title: "American Public Opinion about Foreign Countries",
      type: "research",
      category: "Research Paper",
      description: "Explores U.S. public opinion on China, Russia, Canada, Israel, Saudi Arabia, and Iran using polls to assess impacts on foreign policy.",
      tags: ["Foreign Affairs", "Public Opinion", "Research"],
      downloadLink: "https://drive.google.com/file/d/1mhxioA58gfwmgSA4GIGs7c2lGPMzJ2Bu/view?usp=sharing",
      featured: false
    },
    {
      id: 3,
      title: "How Social Media is Revolutionizing Diplomacy and the Risks That Come With It",
      type: "blog",
      category: "Blog Post",
      description: "Discusses how social media reshapes diplomacy, enabling direct communication while posing misinformation and cybersecurity risks for international relations.",
      tags: ["Social Media", "Diplomacy", "Blog", "Risks"],
      downloadLink: "https://drive.google.com/file/d/1YXYY2ccIAcg6GJbJ_auyorng-cYdEN9i/view?usp=sharing",
      featured: false
    },
    {
      id: 4,
      title: "Boko Haram Counterterrorism Efforts",
      type: "research",
      category: "Research Paper",
      description: "Evaluates Nigeria's military and community-based efforts to combat Boko Haram, stressing the need for development, human rights, and governance reforms.",
      tags: ["Nigeria", "Boko Haram", "Terrorism"],
      downloadLink: "https://drive.google.com/file/d/1TQGqucc0mPzhlr0y0P2mwHVrtPLJXCNd/view?usp=sharing",
      featured: false
    },
    {
      id: 5,
      title: "Individuals Involved in Boko Haram",
      type: "research",
      category: "Research Paper",
      description: "Explores why individuals join Boko Haram through theories of radicalization, focusing on economic hardship, social influence, and ideological manipulation.",
      tags: ["Human Rights", "Boko Haram", "Nigeria"],
      downloadLink: "https://drive.google.com/file/d/1MssZKC5BnFhouH_QUwK6ECo-maoCsPS1/view?usp=sharing",
      featured: false
    },
    {
      id: 6,
      title: "Social Structural Conditions of Boko Haram",
      type: "research",
      category: "Research Paper",
      description: "Examines how poverty, violence, and religious identity in Nigeria created conditions for Boko Haram's emergence and sustained influence.",
      tags: ["Societal Structures", "Boko Haram", "Nigeria"],
      downloadLink: "https://drive.google.com/file/d/1bk_w55kmcD37g00kIlITm_8XmlF7cQSf/view?usp=sharing",
      featured: false
    },
    {
      id: 7,
      title: "Food Insecurity in South Sudan",
      type: "research",
      category: "Research Paper",
      description: "Analyzes causes of food insecurity in South Sudan, including conflict and climate change, and recommends peacebuilding, agriculture investment, and service expansion.",
      tags: ["South Sudan", "Humanitarianism", "Food Insecurity"],
      downloadLink: "https://drive.google.com/file/d/1HH0WUU84t1OTXzyj2m0oYlaneciu8L5T/view?usp=sharing",
      featured: false
    },
    {
      id: 8,
      title: "Geography and Geoinformation Itinerary",
      type: "other",
      category: "Itinerary Project",
      description: "Travel reflection through Thailand's landscapes and cultural sites, blending geography, ecology, and tourism experiences across major national parks and cities.",
      tags: ["Thailand", "Itinerary"],
      downloadLink: "https://drive.google.com/file/d/1uvtB1SEjbv7nrBTho76FNUo2RDF0_B6C/view?usp=sharing",
      featured: false
    },
    {
      id: 9,
      title: "The World in 2022",
      type: "blog",
      category: "Op Ed",
      description: "Calls for urgent climate action, linking global environmental threats to human security, migration, and future sustainability.",
      tags: ["COVID-19", "Pandemic", "Op Ed"],
      downloadLink: "https://drive.google.com/file/d/1XIu8WUszEJRcX9TNMcaCFevCTZ_PPTrc/view?usp=sharing",
      featured: false
    },
    {
      id: 10,
      title: "The Haiti Crisis Policy Brief",
      type: "policy",
      category: "Policy Brief",
      description: "Outlines Haiti's governance, security, and humanitarian crisis with policy recommendations for international engagement and stabilization.",
      tags: ["Haiti", "Policy", "Crisis Management"],
      downloadLink: "https://drive.google.com/file/d/1LkioYahhLYFrhRHxKI3x-xfwghgrcR2-/view?usp=sharing",
      featured: false
    },
    {
      id: 11,
      title: "Reflective Practice Portfolio",
      type: "other",
      category: "Practice Portfolio",
      description: "Explores conflict resolution strategies through personal reflection, case analysis, and skill-building in mediation and facilitation.",
      tags: ["Portfolio", "Conflict Resolution", "Reflective"],
      downloadLink: "https://drive.google.com/file/d/1pGUe5ROd9tmUJ2kj1OCjtDGMmRVU_VGy/view?usp=sharing",
      featured: false
    },
    {
      id: 12,
      title: "Russia Ukraine Conflict",
      type: "research",
      category: "Research Paper",
      description: "Explains the political, historical, and humanitarian dimensions of the Russia-Ukraine war, highlighting causes, actors, and consequences.",
      tags: ["Russia", "Ukraine", "Conflict", "Research"],
      downloadLink: "https://drive.google.com/file/d/1zTuM2kCVg6JpQV9qGwxGwIcc7rZpDU_M/view?usp=sharing",
      featured: false
    },
    {
      id: 13,
      title: "The Arab Convention vs. OAU Protocol",
      type: "other",
      category: "IR Framework Paper",
      description: "Compares legal frameworks on refugee protection in Arab and African contexts, emphasizing human rights and legal accountability.",
      tags: ["Middle East", "Counter Terrorism"],
      downloadLink: "https://drive.google.com/file/d/1o9PHfLPxCn2mA3bpHjTpkUB440iOIG3G/view?usp=sharing",
      featured: false
    },
    {
      id: 14,
      title: "The Impact of Armed Conflict on Women and Children in South Sudan",
      type: "research",
      category: "Research Paper",
      description: "Investigates sex trafficking and child soldiering amid South Sudan's conflict, stressing protection and policy reforms.",
      tags: ["South Sudan", "Conflict"],
      downloadLink: "https://drive.google.com/file/d/1s7IM96LMqKhm9aWTnnaBVId-uLY_t6Xv/view?usp=sharing",
      featured: false
    },
    {
      id: 15,
      title: "The Threat of Fentanyl Trafficking to U.S. Security",
      type: "policy",
      category: "Policy Analysis",
      description: "Explores how fentanyl trafficking by cartels undermines U.S. security, urging stronger enforcement and global cooperation.",
      tags: ["Drug Trafficking", "Policy", "Homeland Security"],
      downloadLink: "https://drive.google.com/file/d/14l1pptmajCRN5w5x5ajYTZQFzgP8TA5I/view?usp=sharing",
      featured: false
    },
    {
      id: 16,
      title: "The Tigray Conflict",
      type: "research",
      category: "Research Paper",
      description: "Analyzes Ethiopia’s Tigray war, its political roots, humanitarian crisis, and failed peace efforts, calling for international intervention.",
      tags: ["Ethiopia", "Humanitarianism", "Conflict Management", "Tigray"],
      downloadLink: "https://drive.google.com/file/d/146JvUSjTS_vH1i3y5YJeUmR1oNV6Yi7D/view?usp=sharing",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'research', label: 'Research' },
    { id: 'policy', label: 'Policy' },
    { id: 'blog', label: 'Blog / Op Ed' },
    { id: 'other', label: 'Other' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  const getCardColor = (type: string) => {
    switch (type) {
      case 'research':
        return 'bg-gradient-to-br from-lavender-blush/20 to-lavender-blush/40';
      case 'policy':
        return 'bg-gradient-to-br from-sky-baby/20 to-sky-baby/40';
      case 'blog':
        return 'bg-gradient-to-br from-mint-cream/20 to-mint-cream/40';
      default:
        return 'bg-white';
    }
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gradient-to-b from-mint-cream/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-mist to-lavender-blush mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my research papers, policy briefs, and op ed / blog pieces 
            on global affairs and international relations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`font-inter font-medium px-6 py-2 rounded-full transition-all duration-300 hover:rotate-1 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-pink-mist hover:bg-pink-mist/90 text-white'
                  : 'border-pink-mist text-pink-mist hover:bg-pink-mist hover:text-white'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-1000 ease-out hover:-translate-y-2 ${getCardColor(item.type)} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <FileText className="text-gray-600" size={24} />
                  {item.featured && (
                    <Badge className="bg-soft-lemon text-gray-800 font-medium">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-poppins font-semibold text-xl text-gray-800 leading-tight">
                  {item.title}
                </CardTitle>
                <p className="font-inter text-sm text-pink-mist font-medium">
                  {item.category}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-white/70 text-gray-700 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-pink-mist hover:bg-pink-mist/90 text-white flex-1 transition-all duration-300 hover:rotate-1 hover:scale-105"
                  >
                    <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
