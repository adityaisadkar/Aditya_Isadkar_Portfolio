import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adityaisadkar940@gmail.com",
      href: "mailto:adityaisadkar940@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9403412529",
      href: "tel:+919403412529",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/20 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-accent"
                asChild
              >
                <a href="mailto:adityaisadkar940@gmail.com" target="_blank" rel="noopener noreferrer">
                  Send Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="tel:+919403412529">
                  Call Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
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
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
