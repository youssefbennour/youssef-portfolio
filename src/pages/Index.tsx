import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Award, Download, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "AspNetCore Starter Template",
    techStack: [".NET Core", "ASP.NET", "C#", "Domain-Driven Design", "Multi-tenancy"],
    description: "A production-ready starter template for building modular monolith applications with .NET 9.0. Features multi-tenancy, RBAC, auditing, and DDD patterns.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    title: "DRM Video Transcoding Service",
    techStack: ["C#", "Microservices", "Cloud Computing", "Video Processing"],
    description: "A scalable DRM video transcoding microservice handling 120,000+ videos monthly across 50+ cloud and on-premise machines.",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
    ]
  }
];

const education = [
  {
    degree: "Bachelor's degree, Computer Science",
    school: "Horizon School of Digital Technologies - Tunisia",
    period: "October 2022 - May 2025"
  },
  {
    degree: "High School Diploma, Mathematics",
    school: "Lycée Mohamed Boudhina Hammamet",
    period: "September 2017 - June 2022"
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-2">
      <main className="w-full max-w-[650px] flex flex-col gap-8">
        <header className="mb-2 text-center flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4 border-2 border-gray-300 shadow-sm">
            <AvatarImage
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=256&h=256&facepad=2"
              alt="Youssef Bennour Sahli"
            />
            <AvatarFallback>YS</AvatarFallback>
          </Avatar>
          <h1
            className="font-bold text-5xl mb-1 tracking-tight font-serif text-black"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Youssef Bennour Sahli
          </h1>
          <div
            className="text-gray-700 text-lg"
            style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
          >
            Software Engineer • Problem Solver • Lifelong Learner
          </div>
          <hr className="my-4 border-gray-400 w-full" />
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
            A Software Engineer with a thirst for learning new technologies, uncovering the unknowns, and taking on challenges that push me beyond my current knowledge.
            When life gets too predictable, I dive into competitive programming.
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

        {/* Projects */}
        <section>
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
                  className="text-xl font-bold text-black mb-2" 
                  style={{ fontFamily: "Georgia, serif" }}
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
                
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {project.images.map((image, imageIdx) => (
                      <CarouselItem key={imageIdx}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-2">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${imageIdx + 1}`}
                              className="w-full h-full object-cover rounded"
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
              link.href = '/cv-youssef-bennour-sahli.pdf'; // You'll need to add this file to public folder
              link.download = 'Youssef_Bennour_Sahli_CV.pdf';
              link.click();
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </section>

        {/* Education */}
        <section>
          <div
            className="text-lg font-semibold text-black underline mb-2 mt-8 underline-offset-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded bg-white px-5 py-3"
                style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              >
                <span className="text-base font-bold text-black" style={{ fontFamily: "Georgia, serif" }}>
                  {edu.degree}
                </span>
                <div className="text-sm text-gray-700">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Youssef Bennour Sahli &mdash; Crafted with React, styled for the 90s.
        </footer>
      </main>
    </div>
  );
}
