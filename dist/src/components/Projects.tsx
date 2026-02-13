import { ExternalLink, Github, Folder } from "lucide-react";
import logo2 from "../img/webgis.png";
import logo3 from "../img/edusukses.png";
import logo4 from "../img/siketan.png";
import logo5 from "../img/pln.png";
import logo6 from "../img/attendance.png";
import logo7 from "../img/game.png";

const projects = [
  {
    title: "WebGIS Mapping System",
    description:
      "An interactive geographic information system allowing users to visualize spatial data, perform buffer analysis, and manage map layers.",
    tech: ["Leaflet", "Bootstrap", "Api", "Json", "Php", "Js"],
    color: "from-green-500 to-emerald-700",
    image: logo2,
    isImage: true,
    // 1. Add the GitHub URL here
    github: "https://github.com/iamrnldo/Webgis_Keputih",
    demo: "#", // Optional: You can add a demo link too
  },
  {
    title: "Tryout Test Platform",
    description:
      "A Tryout Test Platform with authentication, question management, and result analysis.",
    tech: ["Node JS", "Express JS", "React JS", "MongoDB"],
    color: "from-purple-500 to-pink-600",
    image: logo3,
    isImage: true,
    github: "https://github.com/yourusername/tryout-platform",
  },
  {
    title: "Archived Website",
    description:
      "An Archived website for Siketan, a web-based platform for online file management and collaboration.",
    tech: ["React JS", "Tailwind CSS", "TypeScript"],
    color: "from-emerald-500 to-teal-600",
    image: logo4,
    isImage: true,
    github: "https://github.com/yourusername/siketan-archive",
  },
  {
    title: "PLN Web Commissioning Management System",
    description:
      "A web application for PLN to manage commissioning activities and track progress.",
    tech: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    color: "from-orange-500 to-red-600",
    image: logo5,
    isImage: true,
    github: "https://github.com/yourusername/pln-system",
  },
  {
    title: "Attendance List Management System",
    description:
      "A web application for managing attendance lists and generating reports.",
    tech: ["Node JS", "Express JS", "PostgreSQL"],
    color: "from-blue-500 to-indigo-600",
    image: logo6,
    isImage: true,
    github: "https://github.com/iamrnldo/Attendance-Laravel",
  },
  {
    title: "Game 1v1 StreetFighterBrawl",
    description:
      "An analytics dashboard for social media metrics with real-time data visualization and reporting features.",
    tech: ["React JS", "Node JS", "Chart.js", "Tailwind CSS"],
    color: "from-pink-500 to-rose-600",
    image: logo7,
    isImage: true,
    github: "https://github.com/yourusername/streetfighter-game",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
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

                {project.isImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="relative text-6xl group-hover:scale-125 transition-transform duration-300">
                    {project.image}
                  </span>
                )}

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* 2. Changed Button to Anchor Tag (<a>) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <Github size={20} />
                  </a>

                  {/* You can do the same for the External Link if you add a 'demo' property */}
                  <a
                    href={project.demo || "#"}
                    className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

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
