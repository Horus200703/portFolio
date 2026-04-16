import { useState, useEffect, useCallback } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Aurora from './Aurora';

export default function Hero({ slides, name }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)' }}
    >
      {/* Aurora WebGL background */}
      <Aurora
        colorStops={['#6366f1', '#8b5cf6', '#06b6d4']}
        amplitude={1.2}
        blend={0.6}
        speed={0.5}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20 pb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center md:text-left">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              Disponible para proyectos
            </div>

            {/* Slide content */}
            <div className={`transition-all duration-400 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                <span className="gradient-text">{slide.headline}</span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-4">
                {slide.sub}
              </p>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
                {slide.description}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10">
              <a
                href="#projects"
                className="btn bg-indigo-600 hover:bg-indigo-500 border-none text-white rounded-full px-8 py-3 font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Ver mis proyectos <FiArrowRight />
              </a>
              <a
                href="#contact"
                className="btn btn-outline border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:text-white hover:border-indigo-400 rounded-full px-8 py-3 font-semibold transition-all duration-200"
              >
                Contáctame
              </a>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all duration-200"
                aria-label="Anterior"
              >
                <FiChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 h-2 bg-indigo-500'
                        : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-all duration-200"
                aria-label="Siguiente"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Profile photo ── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative group">
              {/* Glow blob behind photo */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
              />

              {/* Rotating conic ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '-3px',
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                  animation: 'spin 6s linear infinite',
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden group-hover:scale-[1.03] transition-transform duration-500"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  zIndex: 1,
                  outline: '3px solid #0f0f1a',
                  outlineOffset: '0px',
                  boxShadow: '0 0 0 3px #0f0f1a, 0 0 40px #6366f150, 0 0 80px #8b5cf630',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt={`Foto de ${name}`}
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-1 sm:bottom-8 inset-x-0 mx-auto w-fit flex flex-col items-center gap-1 text-gray-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
