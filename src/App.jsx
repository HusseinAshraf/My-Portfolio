import { lazy, useEffect } from 'react';
import 'flowbite';
import './i18n.js';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import
BackGround from './components/ui/BackGround';
import SocialLinks from './components/SocialLinks/SocialLinks';
import { useTranslation } from 'react-i18next';
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Skills = lazy(() => import('./components/skills/Skills'));

function App() {
  const { i18n } = useTranslation();

  // Update the direction of the page based on the selected language
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

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
      <div className={`fixed z-50 ${i18n.language === 'ar' ? 'left-5 mr-5' : 'right-5 ml-5'} bottom-5 sm:bottom-10 md:bottom-20`}>
        <SocialLinks />
      </div>


    </>
  );
}

export default App;
