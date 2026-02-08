import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gray-950">
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/20 mb-4">
            Contact Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Work{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-cyan-400" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">iamrnldo@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-cyan-400" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+1 (234) 567-890</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="text-cyan-400" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">
                    Available for Remote Work
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative code block */}
            <div className="p-5 bg-white/3 rounded-2xl border border-white/5 mt-6">
              <pre className="text-xs font-mono text-gray-500 leading-relaxed">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">status</span> ={" "}
                  <span className="text-yellow-300">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-green-300">available</span>:{" "}
                  <span className="text-cyan-400">true</span>,{"\n"}
                  {"  "}
                  <span className="text-green-300">response</span>:{" "}
                  <span className="text-amber-300">"&lt; 24h"</span>,{"\n"}
                  {"  "}
                  <span className="text-green-300">coffee</span>:{" "}
                  <span className="text-amber-300">"always ☕"</span>
                  {"\n"}
                  <span className="text-yellow-300">{"}"}</span>;
                </code>
              </pre>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white/3 rounded-2xl border border-white/5 backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
