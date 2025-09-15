import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { SecondaryCTA } from './components/SecondaryCTA';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <ValueProposition />
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <Portfolio />
          <Testimonials />
          <SecondaryCTA />
          <Blog />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}