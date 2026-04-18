import myPhoto from '../../assets/images/my_photo.png';
import { RiArrowDownDoubleFill, RiDownload2Fill, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import { useTranslation } from 'react-i18next';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useCounter } from '../../hooks/useCounter';
import './Hero.css';

function StatCard({ value, suffix, label, duration }) {
  const { count, ref } = useCounter(value, duration);
  return (
    <div ref={ref} className="stat-card">
      <div className="stat-value">{count}<span className="stat-suffix">{suffix}</span></div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();

  const typingWords = [
    'Angular 19 Developer',
    'React.js Developer',
    'ERP Systems Developer',
    'Frontend Engineer',
  ];

  const typedText = useTypingEffect(typingWords, 75, 45, 2200);

  return (
    <section className="hero-section relative overflow-hidden">
      <div className="hero-grid-bg" />
      <div className="absolute -top-48 -start-48 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 end-0 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 py-20 md:flex-row md:gap-16">

          {/* Content */}
          <div className="flex w-full flex-col md:w-1/2">

            <div className="hero-text hero-text-delay-1 mb-5 flex justify-center md:justify-start">
              <span className="available-badge">
                <span className="available-dot" />
                {t('hero.availableForWork')}
              </span>
            </div>

            <p className="hero-text hero-text-delay-2 mb-2 text-center text-lg text-gray-400 md:text-start">
              {t('hero.greeting')} 👋
            </p>

            <h1 className="hero-text hero-text-delay-3 hero-name mb-3 text-center md:text-start">
              {t('hero.name')}
            </h1>

            <div className="hero-text hero-text-delay-4 mb-5 flex h-9 items-center justify-center md:justify-start">
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-text hero-text-delay-5 mb-6 text-center text-sm leading-relaxed text-gray-400 md:text-start md:text-base">
              {t('hero.description')}
            </p>

            <div className="hero-text hero-text-delay-6 mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a href="#contact" className="btn-primary">
                {t('hero.contactMe')}
                <RiArrowDownDoubleFill size={18} />
              </a>
              <a
                href="/resume/my-resume.pdf"
                download="Hussein-Ashraf-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t('hero.downloadCV')}
                <RiDownload2Fill size={18} />
              </a>
            </div>

            <div className="hero-text hero-text-delay-6 mb-10 flex justify-center gap-3 md:justify-start">
              <a href="https://github.com/HusseinAshraf" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
                <RiGithubFill size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hussein-ashraf-1018a7203/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                <RiLinkedinBoxFill size={20} />
              </a>
            </div>

            <div className="hero-text hero-text-delay-6 hidden items-center gap-8 md:flex">
              <StatCard value={2} suffix="+" label={t('hero.yearsExperience')} duration={1500} />
              <div className="stat-divider" />
              <StatCard value={5} suffix="" label={t('hero.enterpriseSystems')} duration={1200} />
              <div className="stat-divider" />
              <StatCard value={30} suffix="%" label={t('hero.performanceBoost')} duration={1800} />
            </div>
          </div>

          {/* Image */}
          <div className="hero-image flex w-full items-center justify-center md:w-1/2">
            <div className="hero-image-wrapper">
              <div className="hero-image-ring" />
              <div className="hero-image-container">
                <img src={myPhoto} alt={t('hero.name')} className="hero-photo" loading="eager" />
              </div>
              <div className="hero-badge hero-badge-angular">Angular 19</div>
              <div className="hero-badge hero-badge-react">React.js</div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-500">{t('hero.scroll')}</span>
          <RiArrowDownDoubleFill size={18} className="text-gray-500" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
