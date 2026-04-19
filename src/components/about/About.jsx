import {
  RiDownload2Fill, RiGraduationCapFill, RiBuildingFill,
  RiAwardFill, RiLightbulbFlashFill, RiUserSmileFill,
} from '@remixicon/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Remove unused CSS import - we style inline now

function About() {
  const { t } = useTranslation();
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const eduItems = [
    { key: 'degree',            Icon: RiGraduationCapFill },
    { key: 'university',        Icon: RiBuildingFill },
    { key: 'graduation',        Icon: RiAwardFill },
    { key: 'graduationProject', Icon: RiLightbulbFlashFill },
  ];

  const chipKeys = ['about.chip1', 'about.chip2', 'about.chip3', 'about.chip4'];

  return (
    <section id="about" style={{ padding: '96px 0', position: 'relative' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>

        {/* Heading */}
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full mb-3"
            style={{ padding: '5px 14px', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            {t('about.label')}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            {t('about.aboutMe')}
          </h2>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Bio card */}
          <div
            className="md:col-span-3 p-8 rounded-2xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 36, height: 36, background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', color: 'var(--accent)' }}
              >
                <RiUserSmileFill size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>
                {t('about.aboutMe')}
              </span>
            </div>

            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 24 }}>
              {t('about.description1')}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {chipKeys.map(chipKey => (
                <span
                  key={chipKey}
                  className="rounded-full"
                  style={{
                    padding: '5px 14px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(109,106,255,0.2)',
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  {t(chipKey)}
                </span>
              ))}
            </div>

            <a
              href="/resume/my-resume.pdf"
              download="Hussein-Ashraf-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 no-underline"
              style={{ padding: '11px 20px', background: 'var(--accent)', color: '#fff', fontSize: 13 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow-strong)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <RiDownload2Fill size={16} />
              {t('about.downloadCV')}
            </a>
          </div>

          {/* Education card */}
          <div
            className="md:col-span-2 rounded-2xl p-6 flex flex-col gap-3"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
            }}
          >
            <span
              className="rounded-full inline-block mb-1"
              style={{ padding: '4px 12px', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', width: 'fit-content' }}
            >
              {t('about.education')}
            </span>

            {eduItems.map(({ key, Icon }, i) => (
              <div
                key={key}
                className="flex items-start gap-3 rounded-xl p-3"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${0.2 + i * 0.1}s, transform 0.5s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ width: 30, height: 30, background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', color: 'var(--accent)' }}
                >
                  <Icon size={14} />
                </div>
                <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {t(`about.${key}`)}
                </p>
              </div>
            ))}

            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-3 mt-1"
              style={{
                background: 'rgba(250,204,21,0.06)',
                border: '1px solid rgba(250,204,21,0.2)',
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.5s ease 0.65s',
              }}
            >
              <RiAwardFill size={14} style={{ color: '#facc15', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: '#facc15', fontWeight: 500 }}>{t('about.idealStudent')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
