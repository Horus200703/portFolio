import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio.json';
import ClickSpark from './components/ClickSpark';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula consumo via Fetch API (JS ES6 - requisito técnico)
    // En producción puedes reemplazar esto con: fetch('/api/portfolio')
    const loadData = async () => {
      try {
        // Si usas el JSON local directamente (import arriba)
        setData(portfolioData);
      } catch (err) {
        console.error('Error cargando datos del portafolio:', err);
      }
    };
    loadData();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-indigo-500" />
          <p className="text-gray-400 text-sm animate-pulse">Cargando portafolio...</p>
        </div>
      </div>
    );
  }

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen bg-[#0f0f1a]">
        {/* SEO: title handled in index.html */}
        <Navbar />
        <main>
          <Hero slides={data.heroSlides} name={data.personal.name} />
          <Projects projects={data.projects} />
          <Skills skills={data.skills} />
          <Contact contact={data.contact} />
        </main>
        <Footer />

        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </ClickSpark>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-900/50 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
}

export default App;
