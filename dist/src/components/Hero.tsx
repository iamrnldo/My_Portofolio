import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import logo2 from "../img/logo3.png";
const techStack = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const codeSnippets = [
  {
    code: `const App = () => {\n  return <div />;\n};`,
    color: "text-cyan-400/40",
    cursorColor: "bg-cyan-400/60",
    lang: "React",
  },
  {
    code: `function hello() {\n  console.log("Hi");\n}`,
    color: "text-yellow-400/40",
    cursorColor: "bg-yellow-400/60",
    lang: "JavaScript",
  },
  {
    code: `Route::get('/', function () {\n  return view('welcome');\n});`,
    color: "text-red-400/40",
    cursorColor: "bg-red-400/60",
    lang: "Laravel",
  },
  {
    code: `<?php\n  echo "Hello";\n  $x = 42;\n?>`,
    color: "text-indigo-400/40",
    cursorColor: "bg-indigo-400/60",
    lang: "PHP",
  },
  {
    code: `<div class="flex">\n  <h1>Hello</h1>\n</div>`,
    color: "text-orange-400/40",
    cursorColor: "bg-orange-400/60",
    lang: "HTML",
  },
  {
    code: `.container {\n  display: grid;\n  gap: 1rem;\n}`,
    color: "text-blue-400/40",
    cursorColor: "bg-blue-400/60",
    lang: "CSS",
  },
  {
    code: `useEffect(() => {\n  fetchData();\n}, []);`,
    color: "text-cyan-300/40",
    cursorColor: "bg-cyan-300/60",
    lang: "React",
  },
  {
    code: `export default\n  defineConfig({\n  plugins: [react()]\n});`,
    color: "text-purple-400/40",
    cursorColor: "bg-purple-400/60",
    lang: "JavaScript",
  },
  {
    code: `$users = DB::table\n  ('users')->get();\nreturn $users;`,
    color: "text-red-300/40",
    cursorColor: "bg-red-300/60",
    lang: "Laravel",
  },
  {
    code: `const router =\n  express.Router();\napp.use(router);`,
    color: "text-green-400/40",
    cursorColor: "bg-green-400/60",
    lang: "Node.js",
  },
  {
    code: `@tailwind base;\n@tailwind components;\n@tailwind utilities;`,
    color: "text-teal-400/40",
    cursorColor: "bg-teal-400/60",
    lang: "Tailwind",
  },
  {
    code: `async function load() {\n  const res = await\n    fetch(url);\n}`,
    color: "text-yellow-300/40",
    cursorColor: "bg-yellow-300/60",
    lang: "JavaScript",
  },
];

function TypingSnippet({
  snippet,
  typingSpeed,
  startDelay,
}: {
  snippet: (typeof codeSnippets)[number];
  typingSpeed: number;
  startDelay: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = snippet.code;
  const indexRef = useRef(0);
  const phaseRef = useRef<"waiting" | "typing" | "pausing" | "deleting">(
    "waiting",
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const startCycle = () => {
      phaseRef.current = "typing";
      setIsTyping(true);
      indexRef.current = 0;
      setDisplayedText("");
      typeNext();
    };

    const typeNext = () => {
      if (indexRef.current <= fullText.length) {
        setDisplayedText(fullText.slice(0, indexRef.current));
        indexRef.current++;
        // Vary speed: faster for spaces/newlines, slower for code chars
        const currentChar = fullText[indexRef.current - 1];
        const delay =
          currentChar === " " || currentChar === "\n"
            ? typingSpeed * 0.3
            : typingSpeed + Math.random() * typingSpeed * 0.8;
        timeout = setTimeout(typeNext, delay);
      } else {
        // Pause after fully typed
        phaseRef.current = "pausing";
        setIsTyping(false);
        timeout = setTimeout(deleteNext, 2500 + Math.random() * 2000);
      }
    };

    const deleteNext = () => {
      phaseRef.current = "deleting";
      setIsTyping(true);
      if (indexRef.current > 0) {
        indexRef.current--;
        setDisplayedText(fullText.slice(0, indexRef.current));
        timeout = setTimeout(deleteNext, typingSpeed * 0.25);
      } else {
        setIsTyping(false);
        // Wait before retyping
        timeout = setTimeout(startCycle, 1500 + Math.random() * 3000);
      }
    };

    // Initial delay before starting
    timeout = setTimeout(startCycle, startDelay);

    return () => clearTimeout(timeout);
  }, [fullText, typingSpeed, startDelay]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Split displayed text into lines for rendering
  const lines = displayedText.split("\n");

  return (
    <div className="relative">
      <span
        className={`text-[8px] font-mono font-bold uppercase tracking-widest ${snippet.color} block mb-1`}
        style={{ opacity: 0.6 }}
      >
        {snippet.lang}
      </span>
      <pre
        className={`text-[10px] sm:text-[11px] font-mono leading-relaxed ${snippet.color} whitespace-pre select-none`}
      >
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && "\n"}
          </span>
        ))}
        <span
          className={`inline-block w-[5px] h-3 sm:h-[13px] ${snippet.cursorColor} ml-px align-middle rounded-[1px] transition-opacity duration-100`}
          style={{
            opacity: showCursor || isTyping ? 1 : 0,
            verticalAlign: "text-bottom",
          }}
        />
      </pre>
    </div>
  );
}

interface FloatingSnippetData {
  id: number;
  snippet: (typeof codeSnippets)[number];
  top: string;
  left: string;
  animDuration: string;
  animDelay: string;
  rotate: string;
  scale: number;
  blurAmount: string;
  driftX: number;
  driftY: number;
  typingSpeed: number;
  startDelay: number;
}

function FloatingCodeSnippets() {
  const [snippets, setSnippets] = useState<FloatingSnippetData[]>([]);

  useEffect(() => {
    const generated: FloatingSnippetData[] = codeSnippets.map((snippet, i) => ({
      id: i,
      snippet,
      top: `${5 + Math.random() * 80}%`,
      left: `${3 + Math.random() * 90}%`,
      animDuration: `${22 + Math.random() * 25}s`,
      animDelay: `${-Math.random() * 20}s`,
      rotate: `${-12 + Math.random() * 24}deg`,
      scale: 0.6 + Math.random() * 0.35,
      blurAmount: `${0.3 + Math.random() * 0.8}px`,
      driftX: 15 + Math.random() * 35,
      driftY: 10 + Math.random() * 30,
      typingSpeed: 60 + Math.random() * 80,
      startDelay: i * 800 + Math.random() * 2000,
    }));
    setSnippets(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes floatDrift {
          0%, 100% {
            transform: translate(0, 0) rotate(var(--rotate));
            opacity: 0.5;
          }
          25% {
            transform: translate(calc(var(--drift-x) * 1px), calc(var(--drift-y) * -1px)) rotate(calc(var(--rotate) + 2deg));
            opacity: 0.75;
          }
          50% {
            transform: translate(calc(var(--drift-x) * -0.5px), calc(var(--drift-y) * 1px)) rotate(calc(var(--rotate) - 1.5deg));
            opacity: 0.4;
          }
          75% {
            transform: translate(calc(var(--drift-x) * -1px), calc(var(--drift-y) * -0.5px)) rotate(calc(var(--rotate) + 1deg));
            opacity: 0.65;
          }
        }
      `}</style>
      {snippets.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={
            {
              top: item.top,
              left: item.left,
              "--rotate": item.rotate,
              "--drift-x": item.driftX,
              "--drift-y": item.driftY,
              animation: `floatDrift ${item.animDuration} ease-in-out ${item.animDelay} infinite`,
              filter: `blur(${item.blurAmount})`,
              transform: `scale(${item.scale})`,
            } as React.CSSProperties
          }
        >
          <TypingSnippet
            snippet={item.snippet}
            typingSpeed={item.typingSpeed}
            startDelay={item.startDelay}
          />
        </div>
      ))}
    </div>
  );
}

function TechOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLDivElement>(".orbit-item");
    const totalItems = items.length;

    const tiltAngle = 0.6;
    const cosT = Math.cos(tiltAngle);
    const sinT = Math.sin(tiltAngle);

    const animate = () => {
      angleRef.current += 0.004;

      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 768;

      const radius = isMobile ? 100 : isTablet ? 140 : 185;
      const depthRadius = isMobile ? 40 : isTablet ? 50 : 65;

      items.forEach((item, index) => {
        const offset = (index / totalItems) * Math.PI * 2;
        const angle = angleRef.current + offset;

        const cx = Math.cos(angle) * radius;
        const cy = Math.sin(angle) * radius;

        const x = cx;
        const y = cy * cosT;
        const z = cy * sinT;

        const depthNorm = (z + depthRadius + 20) / (depthRadius * 2 + 40);
        const scale = 0.45 + depthNorm * 0.7;
        const opacity = 0.15 + depthNorm * 0.85;
        const zIndex = Math.round(z + 100);
        const blur = (1 - depthNorm) * 1.5;

        item.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.zIndex = `${zIndex}`;
        item.style.filter = blur > 0.1 ? `blur(${blur}px)` : "none";
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative mt-10 sm:mt-14 md:mt-18 flex flex-col items-center gap-3 sm:gap-5">
      <p className="text-[10px] sm:text-xs text-gray-500 font-semibold tracking-[0.25em] uppercase">
        Tech Stack
      </p>

      <div className="relative w-full flex items-center justify-center h-64 sm:h-72 md:h-80">
        <div className="absolute w-20 h-20 sm:w-28 sm:h-28 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute w-14 h-14 sm:w-18 sm:h-18 bg-purple-500/6 rounded-full blur-2xl" />

        <div
          className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 border border-white/3 rounded-full pointer-events-none"
          style={{
            transform: "rotateX(35deg) rotateZ(0deg)",
          }}
        />
        <div
          className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 border border-dashed border-white/2 rounded-full pointer-events-none"
          style={{
            transform: "rotateX(35deg) rotateZ(0deg) scale(1.12)",
          }}
        />

        <div
          ref={containerRef}
          className="relative flex items-center justify-center"
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="orbit-item absolute flex flex-col items-center gap-1 sm:gap-1.5 group cursor-pointer"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <div className="relative">
                <div className="absolute -inset-1 sm:-inset-1.5 bg-linear-to-br from-cyan-400/25 to-purple-500/25 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-lg sm:rounded-xl bg-gray-900/90 border border-white/6 group-hover:bg-white/8 group-hover:border-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/30">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6.5 md:h-6.5 object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500 group-hover:text-gray-300 font-medium tracking-wider transition-colors whitespace-nowrap uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

      {/* Floating typing code snippets */}
      <FloatingCodeSnippets />

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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ronald
              </span>
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
           
          </h1>
        </div>

        {/* Description and CTAs */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/90 max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed sm:leading-relaxed">
          I craft modern, responsive, and performant web applications with clean
          code and pixel-perfect design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14 max-w-md sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-7 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 text-sm sm:text-base overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
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

        {/* 3D Diagonal Rotating Tech Stack Orbit */}
        <TechOrbit />
      </div>
    </section>
  );
}
