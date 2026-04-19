import { RiGithubFill, RiExternalLinkLine } from '@remixicon/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function ProjectCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${(index % 6) * 0.07}s, transform 0.5s ease ${(index % 6) * 0.07}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-hover)';
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
      }}
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', background: 'var(--bg-elevated)' }}>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500"
            loading="lazy"
            style={{ objectFit: 'cover' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
          />
        )}

        {/* Overlay with links */}
        <div
          className="absolute inset-0 flex items-end justify-end gap-2 p-3 opacity-0 transition-opacity duration-250"
          style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = 0; }}
        >
          {item.gitHubLink && (
            <a
              href={item.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl font-semibold no-underline transition-all duration-200"
              style={{ padding: '6px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: 11, color: 'var(--text-primary)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <RiGithubFill size={12} /> {t('projects.buttons.Code')}
            </a>
          )}
          {item.liveDemoLink && (
            <a
              href={item.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl font-semibold no-underline transition-all duration-200"
              style={{ padding: '6px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: 11, color: 'var(--text-primary)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <RiExternalLinkLine size={12} /> {t('projects.buttons.Demo')}
            </a>
          )}
        </div>

        {item.featured && (
          <div
            className="absolute top-2.5 left-2.5 rounded-full"
            style={{ padding: '3px 10px', background: 'var(--accent)', fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            {t('projects.badges.featured')}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2.5 p-5 flex-1">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>
          {t(`projects.${item.key}.name`)}
        </h3>
        <p className="flex-1" style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t(`projects.${item.key}.description`)}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          {item.tech?.map(t => (
            <span
              key={t}
              className="rounded-lg"
              style={{ padding: '3px 8px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', fontSize: 10, fontWeight: 500, color: 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
