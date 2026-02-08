import {
  FaPhp,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaLaravel,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/20",
    level: 90,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "from-yellow-400 to-yellow-600",
    shadow: "shadow-yellow-500/20",
    level: 88,
    category: "Frontend",
  },
  {
    name: "React JS",
    icon: FaReact,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
    level: 85,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "from-teal-400 to-cyan-500",
    shadow: "shadow-teal-500/20",
    level: 92,
    category: "Frontend",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "from-indigo-400 to-purple-600",
    shadow: "shadow-indigo-500/20",
    level: 88,
    category: "Backend",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "from-red-500 to-rose-600",
    shadow: "shadow-red-500/20",
    level: 85,
    category: "Backend",
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-green-500/20",
    level: 82,
    category: "Backend",
  },
  {
    name: "Express JS",
    icon: SiExpress,
    color: "from-gray-400 to-gray-600",
    shadow: "shadow-gray-500/20",
    level: 80,
    category: "Backend",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technologies I{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated collection of technologies and tools I use to bring ideas
            to life, from frontend interfaces to backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 ${skill.shadow}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center shadow-lg ${skill.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <skill.icon className="text-white text-2xl" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-semibold text-lg">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 px-2 py-0.5 bg-white/5 rounded-full">
                      {skill.category}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-500 text-xs font-medium">
                        Proficiency
                      </span>
                      <span className="text-gray-400 text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-linear-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            ...and always exploring new technologies to expand my toolkit 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
