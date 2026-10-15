import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, UserRound, FolderKanban, Award, CheckCircle2 } from "lucide-react";

const aboutData = [
  {
    id: "education",
    title: "Education",
    subtitle: "Computer Science & Information",
    icon: GraduationCap,
    badge: "Class of 2026",
    content: (
      <>
        I am a fresh graduate from the Faculty of Computers and Information,
        October 6 University, Class of 2026. I graduated with an <span className="text-amber-400 font-semibold">Excellent grade</span> and worked on several academic and practical projects during my studies.
      </>
    ),
    highlights: ["Grade: Very Good (3.35)", "Faculty of Computer Science", "October 6 University"],
  },

  {
    id: "specialization",
    title: "Specialization",
    subtitle: "Front-End Development",
    icon: UserRound,
    badge: "React Specialist",
    content: (
      <>
        I specialize in <span className="text-amber-400 font-semibold">Front-End Development</span> using React. I enjoy building responsive, user-friendly interfaces and turning ideas and designs into clean, functional, and performant web applications.
      </>
    ),
    highlights: ["React.js & Modern JS", "Responsive Web Design", "UI/UX & Performance Focus"],
  },

  {
    id: "projects",
    title: "Projects & Experience",
    subtitle: "Academic & Real-world projects",
    icon: FolderKanban,
    badge: "Tareeqy & More",
    content: (
      <>
        I have worked on diverse projects throughout my learning journey, including my graduation project <span className="text-amber-400 font-semibold">Tareeqy</span> and several Front-End web apps leveraging React, RESTful APIs, modern styling, and interactive UI component libraries.
      </>
    ),
    highlights: ["Graduation Project (Tareeqy)", "REST API Integration", "Interactive UI Components"],
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const activeContent = aboutData.find(
    (item) => item.id === activeTab
  );

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-20 min-h-[70vh]">
      {/* Heading */}
      <div className="flex flex-col mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white courgette-regular"
        >
          About{" "}
          <span className="bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 rounded-full bg-amber-500 mt-4"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

        {/* LEFT SIDE - TABS */}
        <div className="md:col-span-5 space-y-4">
          {aboutData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className={`group w-full flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-amber-500/80 bg-linear-to-r from-amber-500/15 to-amber-500/5 shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                    : "border-zinc-800/80 hover:border-amber-500/40 bg-zinc-950/40"
                }`}
              >
                {/* Left content */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500 text-black shadow-md shadow-amber-500/30"
                        : "bg-zinc-900 text-amber-400 group-hover:bg-amber-500/20"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-zinc-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT SIDE - CONTENT CARD */}
        <div className="md:col-span-7 flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full rounded-2xl border border-amber-500/20 bg-zinc-950/70 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-4">
                  <h3 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
                    <activeContent.icon className="w-6 h-6 text-amber-400" />
                    {activeContent.title}
                  </h3>
                  <span className="px-3 py-1 text-xs rounded-full   text-amber-300 font-medium">
                    {activeContent.badge}
                  </span>
                </div>

                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg aboutParagraph my-4">
                  {activeContent.content}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeContent.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">                      
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default About;