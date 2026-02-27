import { useState } from "react";
import { ExternalLink, Github, Folder, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string; // gradient color classes
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "WebGIS Mapping System",
    description:
      "An interactive geographic information system allowing users to visualize spatial data, perform buffer analysis, and manage map layers.",
    tech: ["Leaflet", "Bootstrap", "API", "JSON", "PHP", "JavaScript"],
    color: "from-green-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b9e?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/Webgis_Keputih",
    demo: "#",
  },
  {
    title: "Tryout Test Platform",
    description:
      "A tryout platform with authentication, question management, scoring, and detailed result analysis for students.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    color: "from-purple-500 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/Capstone",
  },
  {
    title: "Archived Website (Siketan)",
    description:
      "A web-based platform for centralized online file management, versioning, and collaboration across teams.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    color: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/Siketan_fix",
  },
  {
    title: "PLN Commissioning Management System",
    description:
      "A web app for PLN to manage commissioning activities, approvals, and progress tracking with role-based access.",
    tech: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    color: "from-orange-500 to-red-500",
    image:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/Laravel_Web_Master_Komisioning",
  },
  {
    title: "Attendance Management System",
    description:
      "A platform to manage attendance, track presence across sessions, and generate exportable attendance reports.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    color: "from-blue-500 to-indigo-500",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/Attendance-Laravel",
  },
  {
    title: "1v1 StreetFighterBrawl Game",
    description:
      "A 1v1 fighting game project with character selection, special moves, and dynamic health bar animations.",
    tech: ["Java", "OOP", "Game Loop", "Assets Pipeline"],
    color: "from-pink-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/iamrnldo/1vs1StreetFighterBrawler_UAS_PBO",
  },
];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-gray-950/95 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/15 text-gray-300 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Close project preview"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="relative bg-black/40">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
            <img
              src={project.image}
              alt={project.title}
              className="relative z-[1] h-72 w-full object-cover md:h-full"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Folder size={14} />
              <span>Project Highlight</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-gray-100 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              )}

              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-200 border border-cyan-500/40 hover:bg-cyan-500/20 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/60 to-gray-950" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Milestones
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Project
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Timeline
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A journey of shipped products and experiments that shaped how I
            design, build, and ship modern web experiences.
          </p>
        </div>

        {/* Vertical milestone timeline */}
        <div className="relative mt-10">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/15 to-transparent md:left-6"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="relative flex gap-6 pl-10 md:pl-12"
              >
                {/* Milestone dot & index */}
                <div className="absolute left-1.5 md:left-2 top-3 flex flex-col items-center">
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gray-950 border border-cyan-400/70 shadow-[0_0_0_3px_rgba(8,47,73,0.7)]">
                    <span className="text-[10px] font-semibold text-cyan-100">
                      {index + 1}
                    </span>
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-[6px]" />
                  </div>
                </div>

                {/* Card */}
                <article className="relative flex-1 rounded-2xl border border-white/6 bg-gray-900/80 p-5 sm:p-6 md:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
                  {/* Accent bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.color}`}
                  />

                  <div className="relative flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80 mb-1">
                          Milestone {index + 1}
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-gray-300">
                        <Folder size={14} className="text-cyan-300" />
                        <span>#{(index + 1).toString().padStart(2, "0")}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/8 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
                      {/* Image preview */}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="group relative h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-screen`}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="relative z-[1] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 z-[2] flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3">
                          <span className="text-[11px] font-medium text-gray-100">
                            Click to preview
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-1 text-[10px] font-semibold text-cyan-200 border border-cyan-400/50">
                            <ExternalLink size={12} />
                            <span>Open</span>
                          </span>
                        </div>
                      </button>

                      {/* Links */}
                      <div className="flex flex-col gap-2 sm:gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-100 hover:bg-white/10 hover:border-white/30 transition-colors"
                          >
                            <Github size={16} />
                            <span>View Source Code</span>
                          </a>
                        )}

                        {project.demo && project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/25 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}

                        <p className="text-[11px] text-gray-500">
                          Designed & developed end-to-end.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
