import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <article
      className="project-card glass-card rounded-2xl overflow-hidden flex flex-col group"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm bg-white text-indigo-700 hover:bg-indigo-100 border-none rounded-full flex items-center gap-1 font-semibold"
            aria-label={`Ver demo de ${project.title}`}
          >
            <FiExternalLink size={14} /> Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-indigo-700 rounded-full flex items-center gap-1 font-semibold"
            aria-label={`Ver código de ${project.title}`}
          >
            <FiGithub size={14} /> Código
          </a>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            ⭐ Destacado
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm bg-indigo-600 hover:bg-indigo-500 border-none text-white rounded-full flex-1 flex items-center justify-center gap-1.5 font-semibold transition-all"
            aria-label={`Ir al demo de ${project.title}`}
          >
            <FiExternalLink size={14} /> Ver Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-300 rounded-full flex-1 flex items-center justify-center gap-1.5 font-semibold transition-all"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
