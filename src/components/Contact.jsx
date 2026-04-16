import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiMail, FiMessageCircle, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'Horus200703',
    href: 'https://github.com/Horus200703',
    icon: FiGithub,
    color: '#e2e8f0',
    bg: '#24292e',
    description: 'Mira mi código y proyectos',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'diegofernandoaponteaponte@gmail.com',
    href: 'mailto:diegofernandoaponteaponte@gmail.com',
    icon: FiMail,
    color: '#ea4335',
    bg: '#ea433518',
    description: 'Escríbeme directamente',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+57 315 912 0444',
    href: 'https://wa.me/573159120444',
    icon: FiMessageCircle,
    color: '#25d366',
    bg: '#25d36618',
    description: 'Hablemos en tiempo real',
  },
];

function ContactCard({ item }) {
  const [copied, setCopied] = useState(false);
  const Icon = item.icon;

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por ${item.label}`}
      className="glass-card rounded-2xl p-6 flex items-start gap-4 group hover:border-indigo-500/40 transition-all duration-300 project-card"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform"
        style={{ color: item.color, background: item.bg }}
      >
        <Icon />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-400 font-medium mb-0.5">{item.label}</p>
        <p className="text-white font-semibold text-sm truncate group-hover:text-indigo-300 transition-colors">
          {item.value}
        </p>
        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
      </div>

      <button
        onClick={handleCopy}
        className="flex-shrink-0 text-gray-500 hover:text-indigo-400 transition-colors mt-1"
        title="Copiar"
        aria-label={`Copiar ${item.label}`}
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy size={15} />}
      </button>
    </a>
  );
}

export default function Contact({ contact }) {
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
    <section id="contact" className="py-24 px-6 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="section-animate text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            ¡Hablemos!
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en escribirme,
            estoy disponible y listo para escucharte.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA box */}
        <div className="glass-card rounded-2xl p-8 text-center glow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Cuéntame tu idea y juntos la hacemos realidad.
          </p>
          <a
            href="https://wa.me/573159120444"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-indigo-600 hover:bg-indigo-500 border-none text-white rounded-full px-8 font-semibold hover:scale-105 transition-all duration-200"
          >
            Enviarme un mensaje 💬
          </a>
        </div>
      </div>
    </section>
  );
}
