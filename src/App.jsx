import React, { useEffect, useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = {
    Cloud: ['Microsoft Azure', 'VMware'],
    Containers: ['Kubernetes', 'Docker'],
    Linux: ['RedHat Linux', 'Ubuntu', 'Shell Scripting'],
    DevOps: ['Git', 'GitHub', 'ServiceNow', 'RPM/YUM'],
    Infrastructure: ['LVM', 'ACLs', 'Patch Management', 'User Administration'],
  };

  const certifications = [
    'Microsoft Certified: Azure AZ-900 Fundamentals',
    'Kubernetes for Absolute Beginners – Hands-on',
    'Complete Linux Training Course – 2025',
    'Linux for Beginners',
  ];

  const projects = [
    {
      title: 'Kubernetes Cluster Management',
      description:
        'Managed Kubernetes pods, deployments, and monitoring for enterprise workloads.',
    },
    {
      title: 'Azure Infrastructure Administration',
      description:
        'Handled Azure cloud resources, VM operations, and infrastructure optimization.',
    },
    {
      title: 'Linux Automation Scripts',
      description:
        'Created shell scripts for automation, monitoring, and patch management.',
    },
    {
      title: 'Dockerized Application Deployment',
      description:
        'Containerized applications using Docker and maintained deployment environments.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-all duration-300 dark:bg-slate-950 dark:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Aman Kumar</h1>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm transition hover:border-cyan-400 dark:border-slate-700"
            >
              {darkMode ? '☀ Light' : '🌙 Dark'}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl border border-slate-300 px-3 py-2 md:hidden dark:border-slate-700"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            DevOps • Linux • Kubernetes • Azure
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I’m <span className="text-cyan-400">Aman Kumar</span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-700 dark:text-slate-300 md:text-3xl">
            DevOps & Cloud Operations Engineer
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Motivated IT professional with 3+ years of experience in Linux
            system administration, Kubernetes orchestration, Azure cloud
            operations, and infrastructure automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="www.linkedin.com/in/aman-devops-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-slate-200 bg-slate-100/80 p-10 dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="mb-6 text-4xl font-bold text-cyan-400">About Me</h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I am a Linux & Cloud Operations Engineer with expertise in
            Kubernetes orchestration, Azure administration, Linux system
            management, and enterprise infrastructure support.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold text-cyan-400">
          Technical Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-200 bg-slate-100/80 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="mb-6 text-2xl font-semibold">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold text-cyan-400">
          Experience
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-slate-100/80 p-10 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-8 border-l-4 border-cyan-400 pl-6">
            <h3 className="text-2xl font-bold">Wipro Limited</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Linux & Cloud Operations Engineer
            </p>
          </div>

          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <div>
              <h4 className="text-xl font-semibold">
                Linux & Kubernetes Administrator
              </h4>
              <p>
                Managed Linux-based systems and Kubernetes orchestration
                environments.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Azure Administrator</h4>
              <p>
                Managed Azure cloud infrastructure and enterprise platform
                operations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Matilda SME</h4>
              <p>
                Worked as a Subject Matter Expert for Matilda Cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold text-cyan-400">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-slate-100/80 p-8 transition hover:-translate-y-2 hover:border-cyan-400/40 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-14 text-center text-4xl font-bold text-cyan-400">
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-2xl border border-slate-200 bg-slate-100/80 p-6 dark:border-slate-800 dark:bg-slate-900/60"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 text-center">
          <h2 className="mb-6 text-4xl font-bold text-cyan-400">Contact Me</h2>

          <p className="mb-8 text-lg text-slate-700 dark:text-slate-300">
            Open to DevOps, Linux Administration, Kubernetes, and Cloud
            Engineering opportunities.
          </p>

          <div className="flex flex-col items-center gap-4 text-lg">
            <p>📧 aman9760528609@gmail.com</p>
            <p>📞 +91 9760528609</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              GitHub
            </a>

            <a
              href="www.linkedin.com/in/aman-devops-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8 text-center text-slate-500 dark:border-slate-800">
        © 2026 Aman Kumar • DevOps & Cloud Operations Engineer
      </footer>
    </div>
  );
}
