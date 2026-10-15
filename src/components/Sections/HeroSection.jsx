import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageReveal from "@/components/ui/ImageReveal";
import { Download, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
  </svg>
);

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Ambient Gold Glow Backdrop */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ================= TEXT ================= */}
          <div className="w-full md:w-3/5 text-center md:text-left z-10">

           
            {/* Title */}
            <TypingAnimation
              as="h1"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent courgette-regular drop-shadow-sm"
              onComplete={() => setShowSubtitle(true)}
            >
              It's Menna
            </TypingAnimation>

            {/* Subtitle */}
            {showSubtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowParagraph(true)}
                className="text-2xl sm:text-3xl font-semibold text-zinc-100 mb-6 tracking-wide courgette-regular"
              >
                Junior Front-End React Developer
              </motion.h2>
            )}

            {/* Paragraph */}
            {showParagraph && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                onAnimationComplete={() => setShowButtons(true)}
                className="text-base sm:text-lg leading-relaxed text-zinc-400 text-justify aboutParagraph max-w-2xl"
              >
                Passionate about crafting modern, responsive, and user-friendly
                web experiences. I enjoy turning ideas into clean, interactive
                interfaces with a strong focus on performance, attention to detail,
                and intuitive user experiences. Always learning, always building.
              </motion.p>
            )}

            {/* Buttons & Quick Links */}
            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowImage(true)}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8"
              >
                <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full sm:w-auto">
                  {/* Download CV */}
                  <a
                    href="/cv.pdf"
                    download="cv.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95"
                  >
                    <Download className="w-4 h-4 text-black" />
                    Download CV
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mennatullah-ahmed-6b798b353/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-amber-500/60 text-amber-400 font-semibold bg-zinc-950/60 hover:bg-amber-500 hover:text-black transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-95"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* ================= IMAGE ================= */}
          <div className="w-full md:w-2/5 flex justify-center z-10">
            {showImage && (
              <ImageReveal
                play={showImage}
                src="/Snapchat-2056531218.jpg"
                alt="Menna"
                className="scale-100 md:scale-110"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;