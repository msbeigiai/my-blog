import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePic from "@/assets/pic.png";

const AboutMe = () => {
  const skills = {
    "Backend Development": [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Keycloak",
      "Scala",
      "Slick",
      "C++",
    ],
    "Frontend Development": [
      "React",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
    "Data & Databases": [
      "Apache Kafka",
      "Apache Debezium",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "ETL",
      "OLAP",
    ],
    "DevOps & Infrastructure": [
      "Docker",
      "CI/CD",
      "AWS",
      "GCP",
      "Grafana",
      "Prometheus",
      "GitHub Actions",
    ],
  };

  const experiences = [
    {
      company: "Karelics Co.",
      position: "Software Engineer",
      period: "Oct 2024",
      points: [
        "Developed AI-driven robotics software, focusing on sensor fusion (IMU & odometry)",
        "Built microservice with Python and FastAPI for robot sensor data processing",
        "Maintained RESTful API for processed sensor data distribution",
      ],
    },
    {
      company: "Golestan Group",
      position: "Software Engineer",
      period: "Jan 2022 – Mar 2024",
      points: [
        "Designed real-time Kafka-based data streaming platform handling 25+ TB daily data",
        "Built Grafana and Prometheus monitoring system",
        "Developed non-blocking backend system using Spring Boot Reactive",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/20">
              <img
                src={profilePic}
                alt="Mohsen Sadeghbeigi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Mohsen Sadeghbeigi</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>Finland</span>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Innovative Software Engineer with +5 years of experience in
                designing and developing scalable applications. Specialized in
                Java, Spring Boot, Scala, and React with expertise in real-time
                data pipelines and DevOps.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/msbeigiai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://linkedin.com/in/mohsen-sadeghbeigi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Technical Expertise</h2>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          {/* <section>
            <h2 className="text-2xl font-semibold mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">{exp.company}</h3>
                      <span className="text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg mb-4">{exp.position}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

          {/* Languages Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Languages</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">English</h3>
                    <p className="text-muted-foreground">Fluent</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Finnish</h3>
                    <p className="text-muted-foreground">
                      B1 (Used in workplace & technical documentation)
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Persian</h3>
                    <p className="text-muted-foreground">Native</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
