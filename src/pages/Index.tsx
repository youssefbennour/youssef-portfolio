
import React from "react";

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
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-2">
      <main className="w-full max-w-[650px] flex flex-col gap-8">
        <header className="mb-2 text-center">
          <h1 className="font-bold text-5xl mb-1 tracking-tight font-serif text-black" style={{ fontFamily: "Georgia, serif" }}>
            Youssef Bennour Sahli
          </h1>
          <div className="text-gray-700 text-lg" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            Software Engineer • Problem Solver • Lifelong Learner
          </div>
          <hr className="my-4 border-gray-400" />
        </header>

        <section className="border border-gray-300 rounded bg-gray-50 px-5 py-4 mb-3 shadow-sm">
          <div className="text-lg font-semibold text-black mb-2 underline underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>
            About Me
          </div>
          <div className="text-base text-gray-900 mb-1" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            A Software Engineer with a thirst for learning new technologies, uncovering the unknowns, and taking on challenges that push me beyond my current knowledge. 
            When life gets too predictable, I dive into competitive programming.
          </div>
        </section>

        <section>
          <div className="text-lg font-semibold text-black underline mb-2 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>
            Experience
          </div>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded bg-white px-5 py-3"
                style={{
                  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="text-xl font-bold text-black" style={{ fontFamily: "Georgia, serif" }}>
                    {exp.role}
                  </span>
                  <span className="mx-1 hidden sm:inline-block">/</span>
                  <span className="text-base text-blue-700 font-semibold">{exp.company}</span>
                </div>
                <div className="text-sm text-gray-700 mb-1">{exp.period} — <span className="italic">{exp.location}</span></div>
                <ul className="list-disc ml-6 text-sm leading-relaxed mt-2 text-gray-900">
                  {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-lg font-semibold text-black underline mb-2 mt-8 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>
            Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded bg-white px-5 py-3"
                style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              >
                <span className="text-base font-bold text-black" style={{ fontFamily: "Georgia, serif" }}>{edu.degree}</span>
                <div className="text-sm text-gray-700">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.period}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Youssef Bennour Sahli &mdash; Crafted with React, styled for the 90s.
        </footer>
      </main>
    </div>
  );
}
