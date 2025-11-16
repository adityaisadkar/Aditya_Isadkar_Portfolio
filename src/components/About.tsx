import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, GitBranch, Brain, Coffee, Workflow } from "lucide-react";
import hostingerLogo from "@/assets/hostinger-logo.png";
import aiRobotLogo from "@/assets/ai-robot.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      items: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      items: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ],
    },
    {
      category: "AI & Tools",
      icon: Brain,
      items: [
        { name: "LLM Training", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "AI Development", logo: aiRobotLogo },
        { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Hostinger", logo: hostingerLogo },
      ],
    },
    {
      category: "SDLC Methodologies",
      icon: Workflow,
      items: [
        { name: "Agile", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Scrum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
        { name: "Waterfall", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
        { name: "DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Fresh graduate with hands-on experience in <span className="text-primary font-semibold">MERN stack development</span>, 
            <span className="text-primary font-semibold"> Python & LLM model training</span>, and 
            <span className="text-primary font-semibold"> WordPress management</span>. 
            Proficient in cloud deployment, database management, and Linux administration. 
            Experienced with Git/GitHub workflows and hosting platforms like Hostinger. 
            Passionate about building innovative solutions across full-stack development, AI/ML, and system operations.
          </p>
        </div>

        <div className="relative px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayRef.current]}
            className="w-full max-w-6xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="p-6 bg-card border-border hover:border-primary transition-all hover:glow-accent group h-[400px] flex flex-col w-full"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg break-words">{skill.category}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3 flex-1">
                        {skill.items.map((item, i) => (
                          <div 
                            key={i} 
                            className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover:scale-105 group/item"
                          >
                            <div className="w-10 h-10 mb-1.5 flex items-center justify-center">
                              <img 
                                src={item.logo} 
                                alt={item.name}
                                className="w-full h-full object-contain group-hover/item:scale-110 transition-transform"
                                style={{ filter: 'brightness(0.9)' }}
                              />
                            </div>
                            <span className="text-xs text-center font-medium text-foreground leading-tight">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * 3)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  Math.floor(current / 3) === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
