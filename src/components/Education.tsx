import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "UIDCT, MGM University",
      location: "Chhatrapati Sambhajinagar",
      year: "2021 - 2025",
      score: "7.58 CGPA",
    },
    {
      degree: "Intermediate (HSC) - PCM",
      institution: "P.S.B.A English School",
      location: "Chhatrapati Sambhajinagar",
      year: "2021",
      score: "78.2%",
    },
    {
      degree: "High School (SSC)",
      institution: "P.S.B.A English School",
      location: "Chhatrapati Sambhajinagar",
      year: "2019",
      score: "74.2%",
    },
  ];

  const certificates = [
    "Java Programming - Udemy",
    "Cloud Computing Training - Acmegrade",
    "Google Cybersecurity Professional Certificate - Coursera",
    "Introduction to Data Analytics - Simplilearn Skillup",
    "Fundamental Students Expert - Postman API",
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:glow-accent"
              >
                <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                  <span className="font-semibold text-primary">{edu.score}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <Card className="p-6 bg-card border-border">
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li 
                    key={index}
                    className="flex gap-3 items-start p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
