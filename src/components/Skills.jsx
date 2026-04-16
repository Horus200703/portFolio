import { useEffect, useRef } from 'react';
import {
  SiJavascript, SiReact, SiPhp, SiNodedotjs,
  SiTailwindcss, SiMysql, SiHtml5, SiCss, SiGit,
} from 'react-icons/si';

const iconMap = {
  SiJavascript, SiReact, SiPhp, SiNodedotjs,
  SiTailwindcss, SiMysql, SiHtml5, SiCss, SiGit,
};

function SkillCard({ skill, index }) {
  return (
    <div
      className="skill-badge glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
      style={{ animationDelay: `${index * 0.1}s` }}
      role="listitem"
      aria-label={`${skill.name} - nivel ${skill.level}%`}
    >
      {/* Icon */}
      <div
        className="text-4xl p-3 rounded-xl"
        style={{ color: skill.color, background: `${skill.color}18` }}
      >
        {iconMap[skill.icon] ? (
          (() => {
            const Icon = iconMap[skill.icon];
            return <Icon />;
          })()
        ) : (
          <span className="text-2xl font-bold">{skill.name[0]}</span>
        )}
      </div>

      {/* Name */}
      <span className="text-white font-semibold text-sm">{skill.name}</span>

      {/* Progress bar */}
      <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-1.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
          }}
        />
      </div>

      <span className="text-xs text-gray-400">{skill.level}%</span>
    </div>
  );
}

export default function Skills({ skills }) {
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
    <section id="skills" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0d0d1a, #0f0f1a)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="section-animate text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Lo que sé hacer
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Tecnologías y herramientas que domino para crear soluciones web completas
            y de calidad.
          </p>
        </div>

        {/* Skills grid */}
        <div role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
