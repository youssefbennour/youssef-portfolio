
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Award } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Softylines",
    period: "January 2024 - Present (1 year 6 months)",
    location: "Sousse, Tunisia",
    details: [
      <>
        Led a team of 4 Junior Software Engineers, delivering a complex accountability project <b>2+ months ahead of schedule</b>, enabling independent feature development and reducing technical debt using <b>Domain-Driven Design</b>.
      </>,
      <>
        Built a reusable multi-tenancy service in <b>ASP.NET Core</b> (cross-tenant memberships, invitations, RBAC, auditing) used in 3+ web apps, saving 190+ dev hours each.
      </>,
      <>
        Developed a <b>DRM (Digital Rights Management) video transcoding microservice</b> in C#, scaling to 50+ cloud and on-prem machines, efficiently transcoding 120,000+ videos/month.
      </>,
      <>
        Enhanced web app security via OpenID Connect (Keycloak), secure cookies, and a custom reverse proxy (<b>Microsoft YARP</b>), reducing XSS/CSRF risk.
      </>,
      <>
        Created a fair HTTP long polling scheduling algorithm, cutting video queue peak wait times <b>from 30h to 1h per client</b>.
      </>,
      <>
        Advocated for team-wide code reviews, consensus-driven technical decisions.
      </>,
      <>
        Orchestrated 30+ microservices & 50+ machines using <b>Nomad, Ansible, Consul</b>.
      </>,
      <>
        Built integration tests with <b>TestContainers</b> and <b>xUnit</b>, simulating a real prod environment.
      </>
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "Softylines",
    period: "May 2023 - December 2023 (8 months)",
    location: "Sousse, Tunisia",
    details: [
      <>
        Key contributor to 'IdentiQube', an Identity and Access Management solution—developed a <b>dynamic schema mgmt system</b> in .NET Core w/ web-based Blazor UI.
      </>,
      <>
        Implemented a <b>metadata-driven modeling language</b> atop SQL Server for flexible IAM data and integrations.
      </>,
      <>
        Built a fluent C# query builder for custom IAM models and automated dynamic form generation.
      </>
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Softylines",
    period: "October 2022 - April 2023 (7 months)",
    location: "Sousse, Tunisia",
    details: [
      <>
        Built a real-time collective-buying app in <b>.NET Core & SignalR</b>, supporting vendor-set pricing tiers and live updates.
      </>,
      <>
        Contributed 10+ reusable UI components to a Blazor library.
      </>
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
    <div
      className="min-h-screen flex flex-col items-center py-8 px-2"
      style={{
        background: "linear-gradient(135deg, hsl(var(--retro-bg)) 80%, hsl(var(--retro-yellow)) 100%)"
      }}
    >
      <main className="w-full max-w-[650px] flex flex-col gap-8">
        {/* Header with accent border & retro name shadow */}
        <header className="mb-2 text-center flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4 border-4 border-[hsl(var(--retro-blue))] shadow-lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=256&h=256&facepad=2"
              alt="Youssef Bennour Sahli"
            />
            <AvatarFallback>YS</AvatarFallback>
          </Avatar>
          <h1
            className="font-bold text-5xl mb-1 tracking-tight font-serif text-black drop-shadow-[2px_2px_0px_hsl(var(--retro-pink))]"
            style={{
              fontFamily: "Georgia, serif",
              color: "#1e245c",
              letterSpacing: "1px",
              textShadow: `2px 2px 0 hsl(var(--retro-pink)), 4px 4px 0 hsl(var(--retro-yellow))`
            }}
          >
            Youssef Bennour Sahli
          </h1>
          <div
            className="text-gray-700 text-lg"
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              color: "hsl(var(--retro-purple))",
              fontWeight: 600,
              textShadow: "1px 1px 0 hsl(var(--retro-orange))"
            }}
          >
            Software Engineer • Problem Solver • Lifelong Learner
          </div>
          <hr className="my-4 border-[hsl(var(--retro-blue))] border-dashed w-full" />
        </header>

        <section
          className="rounded px-5 py-4 mb-3 shadow-md border-2 border-dashed"
          style={{
            background: "linear-gradient(92deg, hsl(var(--retro-teal)) 0%, hsl(var(--retro-bg)) 80%)",
            borderColor: "hsl(var(--retro-purple))"
          }}
        >
          <div
            className="text-lg font-semibold mb-2 underline underline-offset-4"
            style={{
              fontFamily: "Georgia, serif",
              color: "hsl(var(--retro-blue))",
              textShadow: "1px 1px 0 hsl(var(--retro-yellow))"
            }}
          >
            About Me
          </div>
          <div
            className="text-base mb-1"
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              color: "#2b2236"
            }}
          >
            A Software Engineer with a thirst for learning new technologies, uncovering the unknowns, and taking on challenges that push me beyond my current knowledge.
            When life gets too predictable, I dive into competitive programming.
          </div>
        </section>

        {/* Open Source Contributions */}
        <section
          className="rounded px-5 py-4 shadow-md border-2 hover-scale transition"
          style={{
            borderColor: "hsl(var(--retro-yellow))",
            background: "linear-gradient(100deg, hsl(var(--retro-yellow)) 0%, hsl(var(--retro-blue)) 90%)"
          }}
        >
          <div className="flex flex-row items-center gap-2 mb-2">
            <Github className="w-5 h-5 text-[hsl(var(--retro-blue))]" />
            <span
              className="text-lg font-semibold underline underline-offset-4"
              style={{
                fontFamily: "Georgia, serif",
                color: "hsl(var(--retro-pink))",
                textShadow: "1px 1px 0 hsl(var(--retro-violet))"
              }}
            >
              Open Source Contributions
            </span>
          </div>
          <div
            className="text-base mb-2"
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              color: "#2b2236"
            }}
          >
            Developed an open source, production-ready starter template for building modular monolith applications with .NET 9.0.
            The template has been adopted in real-world production projects and is currently powering revenue-generating applications.
          </div>
          <a
            href="https://github.com/youssefbennour/AspNetCore.Starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm px-3 py-1 rounded border-2 border-[hsl(var(--retro-violet))] hover:bg-[hsl(var(--retro-orange))] hover:text-black transition story-link"
            style={{
              textDecoration: "none",
              color: "#8224e3"
            }}
          >
            <Github size={18} className="inline mr-1" /> github.com/youssefbennour/AspNetCore.Starter
          </a>
        </section>

        {/* Honors & Awards */}
        <section
          className="rounded px-5 py-4 shadow-md border-2"
          style={{
            borderColor: "hsl(var(--retro-green))",
            background: "linear-gradient(100deg, hsl(var(--retro-green)) 0%, hsl(var(--retro-bg)) 90%)"
          }}
        >
          <div className="flex flex-row items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-[hsl(var(--retro-green))]" />
            <span
              className="text-lg font-semibold underline underline-offset-4"
              style={{
                fontFamily: "Georgia, serif",
                color: "hsl(var(--retro-orange))",
                textShadow: "1px 1px 0 hsl(var(--retro-pink))"
              }}
            >
              Honors & Awards
            </span>
          </div>
          <ul className="ml-6 list-disc text-base" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#2a2a2a" }}>
            <li>
              <span className="font-bold" style={{ color: "hsl(var(--retro-purple))" }}>
                4th Place Winner
              </span>{" "}
              | Salam Hack AI<br />
              <span className="text-sm" style={{ color: "hsl(var(--retro-blue))" }}>Hackathon 2025</span>
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section>
          <div
            className="text-lg font-semibold underline mb-2 underline-offset-4"
            style={{
              fontFamily: "Georgia, serif",
              color: "hsl(var(--retro-yellow))",
              textShadow: "1px 1px 0 hsl(var(--retro-blue))"
            }}
          >
            Experience
          </div>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded px-5 py-3 border-2 border-dashed shadow-sm"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(90deg, hsl(var(--retro-pink)) 5%, hsl(var(--retro-bg)) 98%)"
                      : "linear-gradient(90deg, hsl(var(--retro-blue)) 5%, hsl(var(--retro-bg)) 98%)",
                  borderColor: "hsl(var(--retro-violet))"
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-xl font-bold" style={{ fontFamily: "Georgia, serif", color: "#1e245c"}}>
                    {exp.role}
                  </span>
                  <span className="mx-1 hidden sm:inline-block">/</span>
                  <span className="text-base font-semibold" style={{ color: "hsl(var(--retro-pink))" }}>{exp.company}</span>
                </div>
                <div className="text-sm" style={{ color: "hsl(var(--retro-orange))" }}>
                  {exp.period} — <span className="italic">{exp.location}</span>
                </div>
                <ul className="list-disc ml-6 text-sm leading-relaxed mt-2" style={{ color: "#26124a" }}>
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div
            className="text-lg font-semibold underline mb-2 mt-8 underline-offset-4"
            style={{
              fontFamily: "Georgia, serif",
              color: "hsl(var(--retro-blue))",
              textShadow: "1px 1px 0 hsl(var(--retro-yellow))"
            }}
          >
            Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded px-5 py-3 border-2 border-dotted"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(93deg, hsl(var(--retro-yellow)) 0%, hsl(var(--retro-bg)) 100%)"
                      : "linear-gradient(88deg, hsl(var(--retro-pink)) 0%, hsl(var(--retro-bg)) 100%)",
                  borderColor: "hsl(var(--retro-orange))"
                }}
              >
                <span className="text-base font-bold" style={{ fontFamily: "Georgia, serif", color: "#1e245c"}}>
                  {edu.degree}
                </span>
                <div className="text-sm" style={{ color: "hsl(var(--retro-green))" }}>{edu.school}</div>
                <div className="text-sm" style={{ color: "hsl(var(--retro-purple))" }}>{edu.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs" style={{ color: "hsl(var(--retro-blue))", textShadow: "1px 1px 0 hsl(var(--retro-yellow))" }}>
          &copy; {new Date().getFullYear()} Youssef Bennour Sahli &mdash; Crafted with React, styled for the 90s.
        </footer>
      </main>
    </div>
  );
}
