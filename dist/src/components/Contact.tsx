import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
            Contact Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'm currently open to new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out for collaborations or just a friendly
                chat.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" size={24} />
              <a
                href="mailto:iamrnldo@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                iamrnldo@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/iamrnldo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/iamrnldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: The Form */}
          {/* 1. Add action and method here */}
          <form
            action="https://formspree.io/f/maqdepza"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name" // Required: Adds a label to the data
              placeholder="Your Name"
              className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition"
              required
            />
            <input
              type="email"
              name="email" // Required: Ensures reply-to works
              placeholder="Your Email"
              className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition"
              required
            />
            <textarea
              name="message" // Required: The content of the email
              placeholder="Your Message"
              rows={6}
              className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
