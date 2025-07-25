import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Github, Award, Download, FolderOpen, X, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "BMDRM",
    url: "https://bmdrm.com",
    techStack: [".NET Core", "C#", "Microsoft Orleans", "EF Core", "PostgreSQL", "Docker", "Nomad", "Consul", "Terraform", "Nginx", "Next.js"],
    description: "Global video hosting & streaming platform with over 20k active users, specializing in secure video delivery for e-learning platforms, media, enterprises & broadcasters using DRM technologies.",
    images: [
      "bmdrm-7.png",
      "bmdrm-8.png",
      "bmdrm-2.png",
      "bmdrm-3.png",
      "bmdrm-4.png",
      "bmdrm-5.png",
      "bmdrm-6.png",
    ]
  },
  {
    title: "Triodax",
    url: "https://app.triodax.com",
    techStack: ["ASP.NET Core", "C#", "DDD", "Redis", "Postgres", "Keycloak", "Xunit", "Docker", "Microsoft YARP", "React", "OpenTelemetry"],
    description: "Multi-tenant accounting platform automating financial reporting for companies, ensuring compliance with Tunisia’s fiscal regulations, and enabling acccountants to work for multiple organizations with a single account through intuitive tenant-specific permissions and invitations.",
    images: [
      "triodax_auth.png",
      "triodax_0.png",
      "triodax_1.png",
      "triodax_2.png",
      "triodax_3.png",
      "triodax_4.png",
      "triodax_5.png",
      "triodax_6.png",
      "triodax_7.png",
      "triodax_8.png",
      "triodax_9.png",
      "triodax_10.png",
      "triodax_11.png",
      "triodax_12.png",
      "triodax_13.png",
      "triodax_14.png",
      "triodax_15.png",
      "triodax_16.png",
      "triodax_17.png",
    ]
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-2">
      <main className="w-full max-w-[650px] flex flex-col gap-8">
        <header className="mb-2 text-center flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4 border-2 border-gray-300 shadow-sm">
            <AvatarImage
              src="youssef_bennour_photo.jpg"
              alt="Youssef Bennour Sahli"
            />
            <AvatarFallback>YS</AvatarFallback>
          </Avatar>
          <h1
            className="font-bold text-5xl mb-1 tracking-tight font-serif text-black"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Youssef Bennour
          </h1>
          {/* Contact Info */}
          <div className="flex flex-col items-center gap-3 mt-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:youssefbennour15@gmail.com" 
                className="text-sm hover:text-blue-600 transition-colors"
                style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              >
                youssefbennour15@gmail.com
              </a>
            </div>
            <p>|</p>
              <a 
                href="https://linkedin.com/in/youssef-bennour-sahli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/youssefbennour" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://medium.com/@youssefbennour" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
            
            {/* Call to Action */}
            <Button 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              onClick={() => {
                const projectsSection = document.querySelector('[data-projects-section]');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
          </div>
          
          <hr className="my-6 border-gray-400 w-full" />
        </header>

        <section className="border border-gray-300 rounded bg-gray-50 px-5 py-4 mb-3 shadow-sm">
          <div
            className="text-lg font-semibold text-black mb-2 underline underline-offset-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            About Me
          </div>
          <div
            className="text-base text-gray-900 mb-1"
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            A Software Engineer with over two years of experience building scalable systems used by thousands of users (Video Streaming, IAM, Fintech). I thrive in complex environments, often being the go-to person for debugging hard issues and delivering stable, production-ready features.
            <br></br><br></br>
            I led a team of four engineers to deliver a SaaS accounting platform ahead of schedule, and I've consistently been trusted to own and maintain critical features. I'm quick to adapt to new systems, communicate clearly under pressure, and collaborate to solve issues without friction.          </div>
        </section>

        {/* Download CV */}
        <section className="border border-gray-300 rounded bg-gray-50 px-5 py-4 shadow-sm text-center">
          <div className="flex flex-row items-center justify-center gap-2 mb-3">
            <Download className="w-5 h-5 text-gray-700" />
            <span
              className="text-lg font-semibold text-black underline underline-offset-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Download CV
            </span>
          </div>
          <p 
            className="text-base text-gray-900 mb-4"
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            Get a detailed overview of my experience, skills, and accomplishments.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            onClick={() => {
              // Create a temporary link to download CV
              const link = document.createElement('a');
              link.href = 'Youssef_Bennour_Resume.pdf';
              link.download = 'Youssef_Bennour_Resume.pdf';
              link.click();
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </section>

        {/* Projects */}
        <section data-projects-section>
          <div className="flex flex-row items-center gap-2 mb-4">
            <FolderOpen className="w-5 h-5 text-gray-700" />
            <span
              className="text-lg font-semibold text-black underline underline-offset-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Projects
            </span>
          </div>
          <div className="flex flex-col gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded bg-white px-5 py-4 shadow-sm"
              >
                <h3 
                  className="text-xl font-bold text-black mb-2 cursor-pointer hover:text-blue-600 hover:underline transition-colors" 
                  style={{ fontFamily: "Georgia, serif" }}
                  onClick={() => window.open(project.url)}
                >
                  {project.title}
                </h3>
                
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded border"
                        style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p 
                  className="text-base text-gray-900 mb-4"
                  style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
                >
                  {project.description}
                </p>
                
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {project.images.map((image, imageIdx) => (
                      <CarouselItem key={imageIdx}>
                        <Card>
                          <CardContent className="p-2">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${imageIdx + 1}`}
                              className="w-full h-55 object-contain rounded cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => openModal(idx, imageIdx)}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ))}
          </div>
        </section>

        
        {/* Open Source Contributions */}
        <section className="border border-gray-300 rounded bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-row items-center gap-2 mb-2">
            <Github className="w-5 h-5 text-gray-700" />
            <span
              className="text-lg font-semibold text-black underline underline-offset-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Open Source Contributions
            </span>
          </div>
          <div
            className="text-base text-gray-900 mb-2"
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            Developed an open source, production-ready starter template for building modular monolith applications with .NET 9.0.
            The template has been adopted in real-world production projects and is currently powering revenue-generating applications.
          </div>
          <a
            href="https://github.com/youssefbennour/AspNetCore.Starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm px-3 py-1 rounded border border-gray-300 hover:bg-gray-50 transition"
            style={{ textDecoration: "none", color: "#1660A6" }}
          >
            <Github size={18} className="inline mr-1" /> github.com/youssefbennour/AspNetCore.Starter
          </a>
        </section>

        {/* Honors & Awards */}
        <section className="border border-gray-300 rounded bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-row items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-gray-700" />
            <span
              className="text-lg font-semibold text-black underline underline-offset-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Honors & Awards
            </span>
          </div>
          <ul className="ml-6 list-disc text-base text-gray-900" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            <li>
              <span className="font-bold">4th Place Winner</span> | Salam Hack AI<br />
              <span className="text-sm text-gray-600">Hackathon 2025</span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Youssef Bennour Sahli.
        </footer>
      </main>

      {/* Fullscreen Image Modal */}
      {selectedProject !== null && (
        <Dialog open={selectedProject !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/10">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center justify-between w-full px-16">
                <button 
                  className="absolute left-8 z-50 text-white border border-white hover:bg-white hover:text-black transition-colors bg-black/50 rounded-full p-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    const carousel = e.currentTarget.parentElement?.querySelector('[data-carousel]');
                    carousel?.dispatchEvent(new CustomEvent('carousel-prev'));
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.85355 3.14645l-.70711.70711L8.79289 6.5H1v1h7.79289l-2.64645 2.64645.70711.70711L10.2071 7.5 6.85355 3.14645z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" transform="rotate(180 7.5 7.5)"></path>
                  </svg>
                </button>
                
                <div className="flex items-center justify-center flex-1">
                  <Carousel className="w-full max-w-4xl" opts={{ startIndex: selectedImageIndex }} data-carousel>
                    <CarouselContent>
                      {projects[selectedProject].images.map((image, imageIdx) => (
                        <CarouselItem key={imageIdx}>
                          <div className="flex items-center justify-center h-[85vh]">
                            <img
                              src={image}
                              alt={`${projects[selectedProject].title} screenshot ${imageIdx + 1}`}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden" />
                    <CarouselNext className="hidden" />
                  </Carousel>
                </div>
                
                <button 
                  className="absolute right-8 z-50 text-white border border-white hover:bg-white hover:text-black transition-colors bg-black/50 rounded-full p-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    const carousel = e.currentTarget.parentElement?.querySelector('[data-carousel]');
                    carousel?.dispatchEvent(new CustomEvent('carousel-next'));
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.85355 3.14645l-.70711.70711L8.79289 6.5H1v1h7.79289l-2.64645 2.64645.70711.70711L10.2071 7.5 6.85355 3.14645z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
