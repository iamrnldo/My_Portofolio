
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import logo2 from "../img/logo3.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-600/5 rounded-full blur-[100px] sm:blur-[140px] animate-pulse delay-500" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating particles (hidden on mobile for performance) */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-[20%] right-[20%] w-1 h-1 bg-cyan-400/40 rounded-full animate-ping" />
        <div className="absolute top-[60%] left-[15%] w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-700" />
        <div className="absolute bottom-[30%] right-[30%] w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-0.5 h-0.5 bg-cyan-300/30 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-[20%] left-[25%] w-0.5 h-0.5 bg-blue-300/30 rounded-full animate-ping delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-20 sm:py-24 md:py-28">
        {/* Avatar / Logo */}
        <div className="mb-6 sm:mb-8 md:mb-10 inline-flex">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1.5 sm:-inset-2 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-md sm:blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-spin-slow" />
            <div className="absolute -inset-1.5 sm:-inset-2 bg-linear-to-r from-purple-600 via-cyan-400 to-blue-500 rounded-full blur-md sm:blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500 animate-spin-slow" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gray-900 border-2 border-white/10 group-hover:border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img
                src={logo2}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 cursor-default">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-400" />
            </span>
            <span className="text-gray-300 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide">
              Available for freelance work
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-5 sm:mb-6 md:mb-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-medium tracking-wide flex items-center justify-center gap-1.5 sm:gap-2">
            <Sparkles
              size={14}
              className="text-cyan-400 sm:w-4 sm:h-4 md:w-5 md:h-5"
            />
            Full-Stack Developer & Designer
          </p>
          <h1 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
            Hi, I&apos;m{" "}
            <span className="relative">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ronald
              </span>
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            <span className="relative">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Budi Abdul Wahid
              </span>
            </span>
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/90 max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed sm:leading-relaxed">
          I craft modern, responsive, and performant web applications with clean
          code and pixel-perfect design. Turning ideas into elegant digital
          experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14 max-w-md sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-7 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 text-sm sm:text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              View My Work
              <ArrowDown
                size={16}
                className="sm:w-[18px] sm:h-[18px] group-hover:translate-y-0.5 transition-transform"
              />
            </span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/4 text-white font-semibold rounded-xl sm:rounded-2xl border border-white/8 hover:bg-white/8 hover:border-white/18 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] backdrop-blur-md text-sm sm:text-base text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
          {[
            {
              icon: Github,
              label: "GitHub",
              href: "https://github.com/iamrnldo",
              hoverColor: "hover:text-white hover:border-white/20",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/iamrnldo/",
              hoverColor: "hover:text-blue-400 hover:border-blue-400/30",
            },
            {
              icon: Mail,
              label: "Email",
              href: "#contact",
              hoverColor: "hover:text-cyan-400 hover:border-cyan-400/30",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className={`group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-gray-500 ${social.hoverColor} hover:bg-white/8 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
            >
              <social.icon
                size={16}
                className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
              />
            </a>
          ))}
        </div>

        {/* Tech stack hint */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-3">
          <p className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-[0.2em] uppercase">
            Tech Stack
          </p>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-gray-600">
            {["React", "TypeScript", "Node.js", "Tailwind"].map(
              (tech, index) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs md:text-sm font-medium hover:text-gray-400 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-gray-600 group cursor-pointer hover:text-gray-400 transition-colors">
        <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-9 md:w-7 md:h-10 rounded-full border border-gray-700/60 group-hover:border-gray-600 flex justify-center pt-1.5 sm:pt-2 transition-colors">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
