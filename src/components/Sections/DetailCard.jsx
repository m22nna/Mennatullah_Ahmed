import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Star, X, Layers, Calendar, Sparkles } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function DetailCard({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const formattedDate = project.created_at
    ? new Date(project.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-amber-500/30 bg-zinc-950/95 text-zinc-100 shadow-2xl shadow-amber-500/10 z-10 flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-zinc-400 hover:text-white hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-200 shadow-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Media Header */}
          <div className="relative w-full bg-zinc-900 overflow-hidden border-b border-zinc-800/80 group">
            {project.image ? (
              <div className="relative w-full h-52 sm:h-64 bg-linear-to-br from-zinc-800 to-zinc-900 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-56 bg-linear-to-br from-zinc-900 via-zinc-950 to-amber-950/20 flex flex-col items-center justify-center gap-3">
                <Layers className="w-16 h-16 text-amber-500/40" />
                <span className="text-sm text-zinc-500 font-mono">
                  {project.title}
                </span>
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              {project.featured && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold shadow-lg shadow-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  Featured Project
                </div>
              )}
              {formattedDate && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 text-xs backdrop-blur-sm">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {formattedDate}
                </div>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Title */}
            <div>
              <h2 className="text-xl sm:text-3xl md:text-2xl font-extrabold bg-linear-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3">
              {/* <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                About Project
              </h3> */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans text-justify">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.tags && project.tags.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={`${tag}-${idx}`}
                      className="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium transition-all hover:bg-amber-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 text-black text-sm font-bold shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-yellow-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-white text-sm font-medium transition-all hover:bg-zinc-800/80 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 text-xs font-medium ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
