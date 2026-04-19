import {
  RiBriefcaseFill, RiRocketFill, RiCodeBoxFill, RiGraduationCapFill,
  RiBuildingFill, RiCalendarFill, RiMapPinFill, RiCheckboxCircleFill,
} from '@remixicon/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const experiences = [
  {
    key: 'globalExperts',
    roleKey: 'experience.globalExperts.role',
    companyKey: 'experience.globalExperts.company',
    periodKey: 'experience.globalExperts.period',
    locationKey: 'experience.globalExperts.location',
    isCurrent: true,
    dotColor: '#6d6aff',
    dotBg: 'rgba(109,106,255,0.15)',
    Icon: RiBriefcaseFill,
    tech: ['Angular 19', 'TypeScript', 'PrimeNG', 'Tailwind CSS'],
    highlightKeys: [
      'experience.globalExperts.h1',
      'experience.globalExperts.h2',
      'experience.globalExperts.h3',
      'experience.globalExperts.h4',
    ],
  },
  {
    key: 'finestTouch',
    roleKey: 'experience.finestTouch.role',
    companyKey: 'experience.finestTouch.company',
    periodKey: 'experience.finestTouch.period',
    locationKey: 'experience.finestTouch.location',
    isCurrent: false,
    dotColor: '#4ecdc4',
    dotBg: 'rgba(78,205,196,0.15)',
    Icon: RiRocketFill,
    tech: ['Angular', 'REST APIs', 'Bootstrap', 'Responsive Design'],
    highlightKeys: [
      'experience.finestTouch.h1',
      'experience.finestTouch.h2',
      'experience.finestTouch.h3',
      'experience.finestTouch.h4',
    ],
  },
  {
    key: 'freelance',
    roleKey: 'experience.freelance.role',
    companyKey: 'experience.freelance.company',
    periodKey: 'experience.freelance.period',
    locationKey: 'experience.freelance.location',
    isCurrent: true,
    dotColor: '#a78bfa',
    dotBg: 'rgba(167,139,250,0.15)',
    Icon: RiCodeBoxFill,
    tech: ['Angular', 'React', 'JavaScript', 'REST APIs'],
    highlightKeys: [
      'experience.freelance.h1',
      'experience.freelance.h2',
      'experience.freelance.h3',
    ],
  },
  {
    key: 'routeIT',
    roleKey: 'experience.routeIT.role',
    companyKey: 'experience.routeIT.company',
    periodKey: 'experience.routeIT.period',
    locationKey: 'experience.routeIT.location',
    isCurrent: false,
    dotColor: '#f59e0b',
    dotBg: 'rgba(245,158,11,0.15)',
    Icon: RiGraduationCapFill,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React basics'],
    highlightKeys: [
      'experience.routeIT.h1',
      'experience.routeIT.h2',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="relative pl-7 transition-all duration-300"
      style={{
        marginBottom: 20,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: -9,
          top: 28,
          width: 18,
          height: 18,
          background: exp.dotBg,
          border: `2px solid ${exp.dotColor}`,
        }}
      >
        <exp.Icon size={8} style={{ color: exp.dotColor }} />
      </div>

      {/* Card */}
      <div
        className="rounded-2xl p-7 transition-all duration-250"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--border-hover)';
          e.currentTarget.style.transform = 'translateX(4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = 'var(--shadow)';
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>
                {t(exp.roleKey)}
              </h3>
              {exp.isCurrent && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full"
                  style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', fontSize: 11, fontWeight: 600, color: '#22c55e' }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', animation: 'pulseGlow 2s ease-in-out infinite' }} />
                  {t('about.active')}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              <RiBuildingFill size={13} />
              {t(exp.companyKey)}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              <RiCalendarFill size={12} />{t(exp.periodKey)}
            </span>
            <span className="flex items-center gap-1.5" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              <RiMapPinFill size={12} />{t(exp.locationKey)}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mb-4 flex flex-col gap-2" style={{ padding: 0, listStyle: 'none' }}>
          {exp.highlightKeys.map((key, i) => (
            <li key={i} className="flex items-start gap-2" style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              <RiCheckboxCircleFill size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
              {t(key)}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          {exp.tech.map(tech => (
            <span
              key={tech}
              className="rounded-lg"
              style={{ padding: '3px 10px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', fontSize: 11, fontWeight: 500, color: 'var(--text-muted)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: lineRef, inView: lineInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" style={{ padding: '96px 0', position: 'relative' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>

        {/* Heading */}
        <div
          ref={titleRef}
          className="mb-12"
          style={{ opacity: titleInView ? 1 : 0, transform: titleInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full mb-3"
            style={{ padding: '5px 14px', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            {t('experience.label')}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 8 }}>
            {t('experience.heading')}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {t('experience.sub')}
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={lineRef}
          className="relative"
          style={{ paddingLeft: 24 }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 1,
              background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)',
              height: lineInView ? '100%' : 0,
              transition: 'height 1.5s ease',
            }}
          />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.key} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
