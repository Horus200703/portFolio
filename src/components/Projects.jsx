import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      <style>{`
        /* Swiper custom styles for the coverflow and blur effect */
        .projects-swiper .swiper-slide {
          transition: filter 0.5s ease, opacity 0.5s ease;
        }
        .projects-swiper .swiper-slide:not(.swiper-slide-active) {
          filter: blur(5px);
          opacity: 0.5;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: #4f46e5; /* indigo-600 */
        }
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #818cf8; /* indigo-400 */
        }
      `}</style>
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

        {/* 3D Coverflow Slider */}
        <div className="relative w-full max-w-5xl mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="projects-swiper py-10"
          >
            {[...projects, ...projects].map((project, index) => (
              <SwiperSlide key={`${project.id}-${index}`} className="max-w-sm sm:max-w-md md:max-w-lg w-full">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
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
