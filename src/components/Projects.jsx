import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="section-animate text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Mi trabajo
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Una selección de los proyectos en los que he trabajado, desde sitios web
            hasta aplicaciones interactivas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Ver más en GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Horus200703"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 rounded-full px-8 font-semibold transition-all duration-200 hover:scale-105"
          >
            Ver más en GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
