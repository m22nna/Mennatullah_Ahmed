import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { Code2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Tech SVG Icons for crisp, professional visuals
const TechIcon = ({ name, icon, color, className = "w-6 h-6" }) => {
  const normalized = (name || "").toLowerCase().trim();

  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  if (normalized === "javascript" || normalized === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M3 3h18v18H3V3zm13.7 14.3c1.3 0 2.2-.7 2.2-2.1v-4.1h-1.8v3.9c0 .6-.3.9-.8.9-.4 0-.7-.3-.7-.8v-.3h-1.7c0 1.5 1.1 2.5 2.8 2.5zm-5.7 0c1.5 0 2.4-.8 2.4-2.1 0-1.4-.9-1.9-2.2-2.3l-.6-.2c-.6-.2-.9-.4-.9-.8 0-.4.3-.7.8-.7.5 0 .8.3.9.7h1.7c-.1-1.2-1-2-2.5-2-1.4 0-2.4.9-2.4 2.1 0 1.3.8 1.9 2.1 2.3l.6.2c.7.2 1 .5 1 .9 0 .5-.4.8-1 .8-.6 0-1-.4-1.1-.9H7.9c.1 1.3 1.1 2 2.1 2z" />
      </svg>
    );
  }

  if (normalized === "typescript" || normalized === "ts") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
        <path d="M3 3h18v18H3V3zm8.3 8.2H7.2V9.5h6.2v1.7h-2.1V18h-2V11.2zm6.2 6.8c1.5 0 2.4-.8 2.4-2.1 0-1.4-.9-1.9-2.2-2.3l-.6-.2c-.6-.2-.9-.4-.9-.8 0-.4.3-.7.8-.7.5 0 .8.3.9.7h1.7c-.1-1.2-1-2-2.5-2-1.4 0-2.4.9-2.4 2.1 0 1.3.8 1.9 2.1 2.3l.6.2c.7.2 1 .5 1 .9 0 .5-.4.8-1 .8-.6 0-1-.4-1.1-.9H15c.1 1.3 1.1 2 2.5 2z" />
      </svg>
    );
  }

  if (normalized.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#264DE4">
        <path d="M4.2 2.5l1.4 16.3 6.4 1.7 6.4-1.7 1.4-16.3H4.2zm12.5 5.2h-7.1l.2 2.4h6.7l-.6 6.3-3.9 1.1-3.9-1.1-.3-3.1h2.1l.1 1.4 2 .5 2-.5.3-2.6H6.9L6.3 5.4h10.6l-.2 2.3z" />
      </svg>
    );
  }

  if (normalized.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
        <path d="M4.2 2.5l1.4 16.3 6.4 1.7 6.4-1.7 1.4-16.3H4.2zm12.3 4.8H7.5l.2 2.4h8.6l-.7 7.2-3.6 1-3.6-1-.2-2.5h2.1l.1 1.1 1.6.4 1.6-.4.2-2.6H7.9l-.5-5.6h9.3l-.2 2z" />
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1 3.2-.6.7.2 1.2.7 1.7 1.3 1 1 2 2.2 4.1 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1-3.2.6-.7-.2-1.2-.7-1.7-1.3-1-1-2-2.2-4.1-2.2zm-6 6.5c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1 3.2-.6.7.2 1.2.7 1.7 1.3 1 1 2 2.2 4.1 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1-3.2.6-.7-.2-1.2-.7-1.7-1.3-1-1-2-2.2-4.1-2.2z" />
      </svg>
    );
  }

  if (normalized.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 0 0-2.4 0L8.3 4.8l3 3a2 2 0 0 1 2.5 2.5l2.9 2.9a2 2 0 1 1-1.2 1.2l-2.7-2.7v4.6a2 2 0 1 1-1.7 0V11.5a2 2 0 0 1-1.1-2.6L7.1 6.1 2.4 10.8a1.7 1.7 0 0 0 0 2.4l8.5 8.5a1.7 1.7 0 0 0 2.4 0l8.3-8.3a1.7 1.7 0 0 0 0-2.5z" />
      </svg>
    );
  }

  if (normalized.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3ECF8E">
        <path d="M13.3 2.5L3.6 13.9a.9.9 0 0 0 .7 1.5h7.3l-1 6.1a.8.8 0 0 0 1.4.6l9.6-11.4a.9.9 0 0 0-.7-1.5h-7.3l1-6.1a.8.8 0 0 0-1.3-.6z" />
      </svg>
    );
  }

if (icon && icon !== "⚡") {
  return <span className="text-2xl leading-none">{icon}</span>;
}

// Clean fallback icon
return (
  <Code2
    className={className}
    style={{ color: color || "#64748B" }}
    strokeWidth={1.8}
  />
);
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchSkills() {
      setLoading(true);
      setError("");

      try {
        const { data, error } = await supabase
          .from("skills")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        setSkills(
          (data ?? []).map((skill) => ({
            ...skill,
            name: skill.name ?? "",
            category: skill.category ?? "Other",
            icon: skill.icon ?? "",
            color: skill.color ?? "#F59E0B",
            level: skill.level,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch skills from Supabase:", err);
        if (isMounted) {
          setError("Couldn't load skills. Please try again later.");
          setSkills([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    if (!skills || skills.length === 0) return ["All"];
    const unique = [
      "All",
      ...new Set(skills.map((skill) => skill.category).filter(Boolean)),
    ];
    return unique;
  }, [skills]);

  const selectedCategory = categories.includes(activeCategory)
    ? activeCategory
    : "All";

  const filtered = useMemo(() => {
    return selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);
  }, [skills, selectedCategory]);

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 min-h-[50vh]"
    >
      {/* Heading */}
      <div className="flex flex-col mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white courgette-regular"
        >
          My{" "}
          <span className="bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 rounded-full bg-amber-500 mt-4"
        />
      </div>

      {/* Category Filter Tabs (only if more than 1 category exists) */}
      {!loading && !error && categories.length > 2 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? skills.length
                : skills.filter((s) => s.category === cat).length;

            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20 font-bold scale-105"
                    : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:border-amber-500/40 hover:text-amber-300"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-black/20 text-black"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mb-4" />
          <p className="text-zinc-400 text-sm">Loading skills from Supabase...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Code2 className="w-16 h-16 text-zinc-700 mb-4" />
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      ) : skills.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <Code2 className="w-16 h-16 text-zinc-700 mb-4" />
          <p className="text-zinc-500 text-lg">No skills added yet.</p>
          <p className="text-zinc-600 text-sm mt-1">
            Add your skills to Supabase to see them here.
          </p>
        </motion.div>
      ) : (
        /* Skills Grid */
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 backdrop-blur-sm p-5 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Color Glow inside Card */}
                <div
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color || "#F59E0B" }}
                />

                {/* Top: Icon + Name */}
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      backgroundColor: `${skill.color || "#F59E0B"}18`,
                      border: `1px solid ${skill.color || "#F59E0B"}40`,
                    }}
                  >
                    <TechIcon
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                      className="w-7 h-7"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg group-hover:text-amber-300 transition-colors truncate">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-zinc-400 bg-zinc-900/90 px-2.5 py-0.5 rounded-full border border-zinc-800">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Optional Level Bar if 'level' column exists in Supabase */}
                {skill.level !== undefined && skill.level !== null && (
                  <div className="space-y-1.5 relative z-10 pt-4 mt-4 border-t border-zinc-900">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-medium text-[11px]">
                        Proficiency
                      </span>
                      <span
                        className="font-bold text-[11px]"
                        style={{ color: skill.color || "#F59E0B" }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-zinc-800/80 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${
                            skill.color || "#F59E0B"
                          }60, ${skill.color || "#F59E0B"})`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
