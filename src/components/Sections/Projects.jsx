import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Star, Layers, FolderKanban, Eye } from "lucide-react";
import { supabase } from "../../lib/supabase";
import DetailCard from "./DetailCard";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      setLoading(true);
      setError("");

      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (!isMounted) return;

        const formattedProjects = (data ?? []).map((project) => ({
          ...project,
          // Support both image_url from Supabase schema and any alternative key
          image: project.image_url || project.image || project.imageUrl || "",
          liveUrl: project.live_url ?? project.liveUrl ?? "",
          githubUrl: project.github_url ?? project.githubUrl ?? "",
          // Support both technologies array from Supabase and tags
          tags:
            Array.isArray(project.technologies) && project.technologies.length > 0
              ? project.technologies
              : Array.isArray(project.tags)
              ? project.tags
              : [],
        }));

        setProjects(formattedProjects);
      } catch (err) {
        console.error("Failed to fetch projects:", err);

        if (isMounted) {
          setError("Couldn't load projects. Please try again later.");
          setProjects([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-20 min-h-[60vh]"
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
            Projects
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

      {/* Projects Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mb-4" />
          <p className="text-zinc-400 text-sm">Loading projects...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <FolderKanban className="w-16 h-16 text-zinc-700 mb-4" />
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      ) : projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <FolderKanban className="w-16 h-16 text-zinc-700 mb-4" />
          <p className="text-zinc-500 text-lg">No projects added yet.</p>
          <p className="text-zinc-600 text-sm mt-1">
            Visit the dashboard to add your projects.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`relative group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col ${
                  project.featured
                    ? "border-amber-500/30 bg-linear-to-b from-amber-500/5 to-zinc-950/80"
                    : "border-zinc-800/60 bg-zinc-950/60"
                }`}
              >
                {/* Image / Thumbnail */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-900">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder if no image or image fails */}
                  <div
                    className={`w-full h-full bg-linear-to-br from-zinc-800/80 to-zinc-900 flex flex-col items-center justify-center gap-2 ${
                      project.image ? "hidden" : ""
                    }`}
                  >
                    <Layers className="w-12 h-12 text-zinc-700" />
                    <span className="text-xs text-zinc-500">{project.title}</span>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold shadow-lg shadow-amber-500/20 z-10">
                      <Star className="w-3 h-3 fill-black" />
                      Featured
                    </div>
                  )}

                  {/* Hover overlay hint: View Details */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-black text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-4 text-justify">
                      {project.description}
                    </p>

                    {/* Technologies / Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 5).map((tag, index) => (
                          <span
                            key={`${project.id}-${tag}-${index}`}
                            className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 5 && (
                          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs">
                            +{project.tags.length - 5}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Links & Details CTA */}
                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/60 mt-auto">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-600 italic">No demo</span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-medium ml-auto hover:underline"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Detail Modal Component */}
      <DetailCard
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
