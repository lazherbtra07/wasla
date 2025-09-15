import React from "react";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/process";
import { SecondaryCTA } from "./components/SecondaryCTA";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { ValueProposition } from "./components/ValueProposition";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider children={undefined}>
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
          <Process />
          <Testimonials />
          <SecondaryCTA />
          <Blog />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
