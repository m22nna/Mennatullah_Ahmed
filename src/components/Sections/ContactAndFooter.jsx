import React from 'react';
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
  </svg>
);

const WhatsappIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function ContactAndFooter() {
  const contactLinks = [
    {
      title: "LinkedIn",
      subtitle: "Connect & Professional Network",
      href: "https://www.linkedin.com/in/mennatullah-ahmed-6b798b353/",
      icon: <LinkedinIcon className="w-6 h-6 text-amber-400" />,
      hoverBorder: "hover:border-amber-500/60",
      hoverText: "group-hover:text-amber-400",
      bgIcon: "bg-amber-500/10 border border-amber-500/20",
    },
    {
      title: "GitHub",
      subtitle: "Explore Repositories & Code",
      href: "https://github.com/m22nna",
      icon: <GithubIcon className="w-6 h-6 text-amber-400" />,
      hoverBorder: "hover:border-amber-500/60",
      hoverText: "group-hover:text-amber-400",
      bgIcon: "bg-amber-500/10 border border-amber-500/20",
    },
    {
      title: "Email",
      subtitle: "Send a Direct Message",
      href: "mailto:mennatullahahmed2004@gmail.com",
      icon: <Mail className="w-6 h-6 text-amber-400" />,
      hoverBorder: "hover:border-amber-500/60",
      hoverText: "group-hover:text-amber-400",
      bgIcon: "bg-amber-500/10 border border-amber-500/20",
    },
    {
      title: "WhatsApp",
      subtitle: "Quick Direct Chat",
      href: "https://wa.me/201115471752",
      icon: <WhatsappIcon className="w-6 h-6 text-amber-400" />,
      hoverBorder: "hover:border-amber-500/60",
      hoverText: "group-hover:text-amber-400",
      bgIcon: "bg-amber-500/10 border border-amber-500/20",
    },
  ];

  return (
    <div className="bg-black text-zinc-100 font-sans">
      <section id="contact" className="py-24 border-t border-amber-500/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent courgette-regular drop-shadow-sm">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl mt-4 max-w-2xl mx-auto aboutParagraph">
              Feel free to reach out for collaborations, job opportunities, or just a friendly chat!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`bg-zinc-950/90 border border-zinc-800/90 ${item.hoverBorder} rounded-2xl p-6 sm:p-8 flex items-center justify-between transition-all duration-300 shadow-xl shadow-black/80 hover:shadow-amber-500/15`}>
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${item.bgIcon} transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-zinc-100 text-lg sm:text-xl transition-colors duration-200 ${item.hoverText}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-400 mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 shrink-0 ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-900 text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Menna. All rights reserved.</p>
          <p className="text-zinc-600">Built with React, Tailwind CSS & GSAP</p>
        </div>
      </footer>
    </div>
  );
}