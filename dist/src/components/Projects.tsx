import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, shopping cart, user authentication, and payment integration.",
    tech: ["Laravel", "React JS", "Tailwind CSS", "MySQL"],
    color: "from-cyan-500 to-blue-600",
    image: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, task assignments, and progress tracking dashboard.",
    tech: ["Node JS", "Express JS", "React JS", "MongoDB"],
    color: "from-purple-500 to-pink-600",
    image: "📋",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
    tech: ["React JS", "Tailwind CSS", "TypeScript"],
    color: "from-emerald-500 to-teal-600",
    image: "🌐",
  },
  {
    title: "Blog CMS Platform",
    description:
      "A content management system with markdown editor, categories, SEO optimization, and admin dashboard.",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL"],
    color: "from-orange-500 to-red-600",
    image: "📝",
  },
  {
    title: "REST API Service",
    description:
      "A scalable RESTful API with JWT authentication, rate limiting, comprehensive documentation, and automated testing.",
    tech: ["Node JS", "Express JS", "PostgreSQL"],
    color: "from-blue-500 to-indigo-600",
    image: "⚡",
  },
  {
    title: "Social Dashboard",
    description:
      "An analytics dashboard for social media metrics with real-time data visualization and reporting features.",
    tech: ["React JS", "Node JS", "Chart.js", "Tailwind CSS"],
    color: "from-pink-500 to-rose-600",
    image: "📊",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
            My Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for
            building exceptional web experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image/header */}
              <div
                className={`relative h-48 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <span className="relative text-6xl group-hover:scale-125 transition-transform duration-300">
                  {project.image}
                </span>

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                    <Github size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={16} className="text-cyan-400" />
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
