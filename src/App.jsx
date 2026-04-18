import { lazy, useEffect, Suspense } from 'react';
import 'flowbite';
import './i18n.js';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import BackGround from './components/ui/BackGround';
import SocialLinks from './components/SocialLinks/SocialLinks';
import { useTranslation } from 'react-i18next';

const About      = lazy(() => import('./components/about/About'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Skills     = lazy(() => import('./components/skills/Skills'));
const Projects   = lazy(() => import('./components/projects/Projects'));
const Contact    = lazy(() => import('./components/contact/Contact'));
const Footer     = lazy(() => import('./components/footer/Footer'));

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const desc = i18n.language === 'ar'
      ? 'حسين أشرف — مطور واجهات أمامية متخصص في Angular 19 و React وأنظمة ERP والـ POS.'
      : 'Hussein Ashraf — Frontend Developer specializing in Angular 19, React, ERP & POS systems. 2+ years building enterprise-grade web applications.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;
  }, [i18n.language]);

  return (
    <>
      <BackGround />
      <Header />

      <main className="relative z-30 mx-auto max-w-7xl overflow-x-hidden antialiased">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Skills />
          <Projects />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Contact />
        <Footer />
      </Suspense>

      <div className={`fixed z-50 ${i18n.language === 'ar' ? 'left-5' : 'right-5'} bottom-5 sm:bottom-10 md:bottom-20`}>
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
