import {
  RiBriefcaseFill,
  RiRocketFill,
  RiCodeBoxFill,
  RiGraduationCapFill,
  RiBuildingFill,
  RiCalendarFill,
  RiMapPinFill,
  RiCheckboxCircleFill,
} from '@remixicon/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const experiences = [
  {
    key: 'globalExperts',
    role: 'Frontend Developer — Full Time',
    company: 'Global Experts',
    period: 'Aug 2025 – Present',
    location: 'Egypt, New Cairo',
    type: 'work',
    isCurrent: true,
    color: 'exp-blue',
    Icon: RiBriefcaseFill,
    tech: ['Angular 19', 'TypeScript', 'PrimeNG', 'Tailwind CSS'],
    highlights: [
      'Built 5+ enterprise modules including E-Commerce (1,000+ products), POS, Inventory, and E-Invoicing systems',
      'Reduced API data-fetch latency by 30% via optimized REST integration',
      'Designed scalable component architecture across all modules',
      'Implemented Git branching strategy & collaborative code reviews',
    ],
  },
  {
    key: 'finestTouch',
    role: 'Frontend Developer — Intern',
    company: 'Finest Touch KSA',
    period: 'Jan 2025 – Apr 2025',
    location: 'Egypt, Dokki',
    type: 'work',
    isCurrent: false,
    color: 'exp-teal',
    Icon: RiRocketFill,
    tech: ['Angular', 'REST APIs', 'Bootstrap', 'Responsive Design'],
    highlights: [
      'Delivered 3 production websites with dynamic Angular components',
      'Reduced duplicated code by ~40% through reusable UI components',
      'Built Al-Bait Al-Hijazi Restaurant landing page (mobile-first)',
      'Built ArabiaExpo website with optimized UI interactions',
    ],
  },
  {
    key: 'freelance',
    role: 'Freelance Frontend Developer',
    company: 'Self-Employed (Remote)',
    period: '2023 – Present',
    location: 'Remote',
    type: 'freelance',
    isCurrent: true,
    color: 'exp-purple',
    Icon: RiCodeBoxFill,
    tech: ['Angular', 'React', 'JavaScript', 'REST APIs'],
    highlights: [
      'Delivered full frontend solutions from concept to production for 3+ clients',
      'Kamma — Pharmacy E-Commerce Platform (Angular + PrimeNG + Tailwind)',
      'AL-Amen Marketing Landing Page (React, production deployed)',
    ],
  },
  {
    key: 'routeIT',
    role: 'Frontend Development Diploma',
    company: 'Route IT Training Center',
    period: 'Oct 2022 – Feb 2023',
    location: 'Egypt',
    type: 'education',
    isCurrent: false,
    color: 'exp-amber',
    Icon: RiGraduationCapFill,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React basics'],
    highlights: [
      'Intensive frontend diploma covering modern web technologies',
      'Built 10+ projects across HTML/CSS, JavaScript, and React',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`exp-card ${exp.color} ${inView ? 'exp-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="exp-dot">
        <exp.Icon size={16} />
      </div>

      <div className="exp-card-inner">
        {/* Header */}
        <div className="exp-header">
          <div className="exp-header-left">
            <div className="exp-role-row">
              <h3 className="exp-role">{exp.role}</h3>
              {exp.isCurrent && <span className="exp-current-badge">● Active</span>}
            </div>
            <div className="exp-company">
              <RiBuildingFill size={14} />
              {exp.company}
            </div>
          </div>
          <div className="exp-meta">
            <span><RiCalendarFill size={13} />{exp.period}</span>
            <span><RiMapPinFill size={13} />{exp.location}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="exp-highlights">
          {exp.highlights.map((item, i) => (
            <li key={i}>
              <RiCheckboxCircleFill size={14} className="exp-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="exp-tech">
          {exp.tech.map((t) => (
            <span key={t} className="exp-tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useTranslation();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="exp-section" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div
          ref={titleRef}
          className={`exp-section-title ${titleInView ? 'exp-section-title--visible' : ''}`}
        >
          <span className="exp-section-label">{t('experience.label')}</span>
          <h2 className="exp-section-heading">{t('experience.heading')}</h2>
          <p className="exp-section-sub">{t('experience.sub')}</p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          <div className="exp-timeline-line" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.key} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
