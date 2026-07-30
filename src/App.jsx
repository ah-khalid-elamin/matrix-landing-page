import { LanguageProvider } from './hooks/use-language';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Competencies from './components/sections/Competencies';
import Knowledge from './components/sections/Knowledge';
import Projects from './components/sections/Projects';
import Team from './components/sections/Team';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Competencies />
          <Knowledge />
          <Projects />
          <Team />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
