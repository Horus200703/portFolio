import { FiGithub, FiMail, FiMessageCircle, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080810] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-lg font-bold gradient-text">&lt;Diego /&gt;</span>
          <span className="text-gray-500 text-xs">
            Diego Fernando Aponte Cardona — Desarrollador Web
          </span>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 text-sm text-gray-400">
            {['#hero', '#projects', '#skills', '#contact'].map((href, i) => {
              const labels = ['Inicio', 'Proyectos', 'Habilidades', 'Contacto'];
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-indigo-400 transition-colors nav-link"
                  >
                    {labels[i]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Horus200703"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Diego"
            className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 hover:scale-110"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="mailto:diegofernandoaponteaponte@gmail.com"
            aria-label="Email de Diego"
            className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 hover:scale-110"
          >
            <FiMail size={16} />
          </a>
          <a
            href="https://wa.me/573159120444"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Diego"
            className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 hover:scale-110"
          >
            <FiMessageCircle size={16} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs flex items-center justify-center gap-1.5">
          © {year} Diego Fernando Aponte Cardona — Hecho con
          <FiHeart className="text-red-500 inline" size={12} />
          usando React y Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
