import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const FILTER_OPTIONS = [
  { value: 'ALL',         icon: '✦',  labelKey: 'projects.filters.all' },
  { value: 'React',       icon: '⚛',  labelKey: 'projects.filters.react' },
  { value: 'Angular',     icon: '🅰',  labelKey: 'projects.filters.angular' },
  { value: 'JS / API',    icon: '⚡', labelKey: 'projects.filters.js' },
  { value: 'Bootstrap',   icon: '🎨', labelKey: 'projects.filters.bootstrap' },
  { value: 'Material UI', icon: '📦', labelKey: 'projects.filters.material' },
  { value: 'Tailwind',    icon: '💨', labelKey: 'projects.filters.tailwind' },
  { value: 'Html / Css',  icon: '🌐', labelKey: 'projects.filters.htmlCss' },
];

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('ALL');
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const filtered = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterId.includes(filter));

  return (
    <section id="projects" style={{ padding: '96px 0' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>

        {/* Heading */}
        <div
          ref={titleRef}
          className="mb-10"
          style={{ opacity: titleInView ? 1 : 0, transform: titleInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full mb-3"
            style={{ padding: '5px 14px', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            {t('projects.title')}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            {t('projects.title')}
          </h2>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className="inline-flex items-center gap-1.5 rounded-xl font-medium transition-all duration-200 cursor-pointer"
              style={{
                padding: '8px 16px',
                fontSize: 13,
                background: filter === opt.value ? 'var(--accent)' : 'var(--bg-card)',
                color: filter === opt.value ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${filter === opt.value ? 'var(--accent)' : 'var(--border)'}`,
                boxShadow: filter === opt.value ? '0 4px 16px var(--accent-glow-strong)' : 'none',
                outline: 'none',
              }}
              onMouseEnter={e => {
                if (filter !== opt.value) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                }
              }}
              onMouseLeave={e => {
                if (filter !== opt.value) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }
              }}
            >
              <span>{opt.icon}</span>
              {t(opt.labelKey)}
              {filter === opt.value && (
                <span
                  className="rounded-full ml-0.5"
                  style={{ padding: '1px 6px', background: 'rgba(255,255,255,0.25)', fontSize: 10, fontWeight: 700 }}
                >
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {filtered.map((item, i) => (
              <ProjectCard key={item.key} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)' }}>{t('projects.empty')}</p>
            <button
              onClick={() => setFilter('ALL')}
              className="mt-4 rounded-xl font-semibold transition-all duration-200"
              style={{ padding: '10px 22px', background: 'var(--accent)', color: '#fff', border: 'none', fontSize: 13, cursor: 'pointer' }}
            >
              {t('projects.showAll')}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
