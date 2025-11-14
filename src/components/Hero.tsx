import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center animate-slide-up">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="mb-4 pt-[30px]">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
                    Web Developer
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
                    Software Developer
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
                    Java Developer
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
                    WordPress Developer
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium border border-border">
                    AI Developer
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <br /><span className="text-gradient typing-animation">Aditya Isadkar</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Fresh Graduate with Internship Experience | Full-Stack Developer specializing in MERN Stack, 
                Cloud Computing, AI/LLM Development, and building innovative solutions
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-accent"
                  asChild
                >
                  <a href="#projects">View My Work</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1R63Kh9MsfX5J-sgJj_Gk_gMKIaWWj-Z6" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/adityaisadkar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:glow-accent"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/aditya-isadkar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:glow-accent"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:adityaisadkar940@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors hover:glow-accent"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img 
                  src={profileImage} 
                  alt="Aditya Isadkar - Full Stack Developer"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
