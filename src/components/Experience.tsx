import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Tech Intern",
      company: "Webisdom",
      period: "July 2025 - Present",
      description: [
        "Worked on end-to-end website development using WordPress, PHP, and MERN stack",
        "Gained experience in debugging, deployment, and responsiveness across platforms",
        "Enhanced websites with custom features, QC changes, and API integrations",
      ],
    },
    {
      title: "Cloud Intern",
      company: "Acmegrade Pvt. Ltd.",
      period: "June 2023 - Aug 2023",
      description: [
        "Deployed web application using AWS EC2 to understand cloud hosting",
        "Created a chatbot with AWS Lex for customer order placement",
        "Learned cloud tools and built AI-based chat systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="relative p-6 bg-card border-border hover:border-primary transition-all group ml-12 md:ml-0"
            >
              <div className="absolute -left-[3.25rem] md:relative md:left-0 top-6 md:top-0 md:mb-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground group-hover:glow-accent transition-all">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground md:hidden mt-1">{exp.period}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
