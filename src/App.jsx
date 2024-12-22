import { lazy } from 'react';
import 'flowbite';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import BackGround from './components/ui/BackGround';
import SocialLinks from './components/SocialLinks/SocialLinks';
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Skills = lazy(() => import('./components/skills/Skills'));

function App() {
  return (
    <>
      <BackGround />
      <Header />

    
        <main className="relative z-30 mx-auto max-w-7xl overflow-x-hidden antialiased">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        
        <Contact />
        <Footer />
      

      {/* SocialLinks */}
      <div className="fixed z-50 ml-5 bottom-5 sm:bottom-10 md:bottom-20">
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
