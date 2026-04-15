import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OmniComBadge from './components/OmniComBadge';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#030712' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Impact />
      <Contact />
      <Footer />
      <OmniComBadge />
    </div>
  );
}

export default App;
