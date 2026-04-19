import myPhoto from '../../assets/images/my_photo.png';
import { RiArrowDownDoubleFill, RiArrowRightLine, RiDownload2Fill, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import { useTranslation } from 'react-i18next';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useCounter } from '../../hooks/useCounter';

function StatCard({ value, suffix, label, duration }) {
  const { count, ref } = useCounter(value, duration);
  return (
    <div ref={ref} className="flex flex-col gap-0.5">
      <span
        className="font-bold leading-none"
        style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.04em', color: 'var(--text-primary)' }}
      >
        {count}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </span>
      <span className="uppercase tracking-wider" style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();

  const typingWords = [
    t('hero.typing1'),
    t('hero.typing2'),
    t('hero.typing3'),
    t('hero.typing4'),
  ];

  const typedText = useTypingEffect(typingWords, 75, 45, 2200);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '120px 0 80px' }}>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, background: 'radial-gradient(circle, var(--accent), transparent 70%)', filter: 'blur(120px)', opacity: 0.06, top: '-200px', right: '-50px' }} />
        <div className="absolute rounded-full" style={{ width: 400, height: 400, background: 'radial-gradient(circle, var(--accent2), transparent 70%)', filter: 'blur(100px)', opacity: 0.04, bottom: '10%', left: '-50px' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">

          {/* Content */}
          <div className="flex w-full flex-col md:w-1/2">

            {/* Available badge */}
            <div className="hero-anim h-a1 flex justify-center md:justify-start mb-6">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)' }}
              >
                <span
                  className="rounded-full hero-badge-dot"
                  style={{ width: 8, height: 8, background: '#22c55e', flexShrink: 0 }}
                />
                {t('hero.availableForWork')}
              </span>
            </div>

            <p className="hero-anim h-a2 text-center md:text-start mb-2" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
              {t('hero.greeting')} 👋
            </p>

            <h1
              className="hero-anim h-a3 text-center md:text-start mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}
            >
              {t('hero.name')}
            </h1>

            {/* Typing text */}
            <div className="hero-anim h-a4 flex items-center justify-center md:justify-start mb-5" style={{ height: 40 }}>
              <span
                className="font-semibold"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', color: 'var(--accent)' }}
              >
                {typedText}
              </span>
              <span
                className="hero-cursor ml-0.5 rounded-sm"
                style={{ display: 'inline-block', width: 2, height: '1.3em', background: 'var(--accent)', flexShrink: 0 }}
              />
            </div>

            <p
              className="hero-anim h-a5 text-center md:text-start mb-8"
              style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 460 }}
            >
              {t('hero.description')}
            </p>

            {/* CTA buttons */}
            <div className="hero-anim h-a6 flex flex-wrap items-center justify-center gap-3 mb-6 md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200"
                style={{ padding: '12px 22px', background: 'var(--accent)', color: '#fff', fontSize: 14 }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow-strong)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {t('hero.contactMe')}
                <RiArrowRightLine size={16} />
              </a>
              <a
                href="/resume/my-resume.pdf"
                download="Hussein-Ashraf-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200"
                style={{ padding: '11px 22px', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-hover)', fontSize: 14 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {t('hero.downloadCV')}
                <RiDownload2Fill size={16} />
              </a>
            </div>

            {/* Social icons */}
            <div className="hero-anim h-a6 flex gap-2 justify-center mb-10 md:justify-start">
              {[
                { href: 'https://github.com/HusseinAshraf', Icon: RiGithubFill, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/hussein-ashraf-1018a7203/', Icon: RiLinkedinBoxFill, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center rounded-xl transition-all duration-200"
                  style={{ width: 38, height: 38, background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = ''; }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-anim h-a7 hidden md:flex items-center gap-6">
              <StatCard value={2} suffix="+" label={t('hero.yearsExperience')} duration={1500} />
              <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
              <StatCard value={5} suffix="" label={t('hero.enterpriseSystems')} duration={1200} />
              <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
              <StatCard value={30} suffix="%" label={t('hero.performanceBoost')} duration={1800} />
            </div>
          </div>

          {/* Image */}
          <div className="hi-anim w-full flex items-center justify-center md:w-1/2">
            <div className="relative" style={{ width: 300, height: 300 }}>
              {/* Gradient border frame */}
              <div
                className="absolute hero-photo-gradient rounded-3xl"
                style={{
                  inset: -2,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2), var(--accent))',
                  opacity: 0.5,
                  filter: 'blur(1px)',
                  borderRadius: 28,
                }}
              />

              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 26,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <img
                  src={myPhoto}
                  alt={t('hero.name')}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(10%) contrast(1.05)' }}
                  loading="eager"
                />
              </div>

              {/* Tech badges */}
              <div
                className="hero-float-1 absolute flex items-center gap-2 px-3 py-2 rounded-2xl font-semibold"
                style={{
                  top: -14, right: -14,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)',
                  fontSize: 12,
                  color: 'var(--text-primary)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: 14 }}>🅰️</span>
                Angular 19
              </div>

              <div
                className="hero-float-2 absolute flex items-center gap-2 px-3 py-2 rounded-2xl font-semibold"
                style={{
                  bottom: -14, left: -14,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)',
                  fontSize: 12,
                  color: 'var(--text-primary)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: 14 }}>⚛️</span>
                React.js
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
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
