import { Code2, Palette, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "9+" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and well-documented code is my priority.",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    desc: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Optimizing every aspect of the application for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working effectively with teams and clients to deliver the best results.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Passionate About{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web Development
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A dedicated full-stack web developer who loves turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image / Code block */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gray-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-gray-500 text-sm font-mono">
                  about.ts
                </span>
              </div>
              <pre className="text-sm md:text-base font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">"Web Developer"</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">role</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">"Full Stack Dev"</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">passion</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">"Building the web"</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">loves</span>
                  <span className="text-white">: [</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">"Clean Code"</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">"Modern UI"</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-amber-300">"Performance"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white">],</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">available</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-cyan-400">true</span>
                  {"\n"}
                  <span className="text-yellow-300">{"}"}</span>
                  <span className="text-white">;</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Building Digital Experiences That Matter
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              I'm a full-stack web developer with expertise in both frontend and
              backend technologies. I specialize in creating responsive,
              user-friendly web applications using modern frameworks and tools.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              From crafting pixel-perfect UI with React and Tailwind CSS to
              building robust APIs with Laravel and Express.js, I enjoy every
              aspect of web development. I'm constantly learning and adapting to
              new technologies to deliver the best solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
            >
              Let's Work Together
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all group hover:bg-white/[0.07]"
            >
              <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all hover:bg-white/[0.07] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
