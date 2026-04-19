import { useTranslation } from 'react-i18next';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiHeartFill } from '@remixicon/react';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socials = [
    { href: 'https://github.com/HusseinAshraf',                          Icon: RiGithubFill,       label: 'GitHub',   hoverColor: 'var(--text-primary)' },
    { href: 'https://www.linkedin.com/in/hussein-ashraf-1018a7203/',     Icon: RiLinkedinBoxFill,  label: 'LinkedIn', hoverColor: '#6d6aff' },
    { href: 'mailto:husseinashraf7414@gmail.com',                        Icon: RiMailLine,         label: 'Email',    hoverColor: '#f472b6' },
  ];

  return (
    <footer
      className="relative z-20 w-full"
      style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div className="flex items-center gap-1.5" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            <span>© {year}</span>
            <span style={{ color: 'var(--border-hover)' }}>·</span>
            <span>{t('AllRightsReserved')}</span>
            <span style={{ color: 'var(--border-hover)' }}>·</span>
            <span className="flex items-center gap-1">
              Built with <RiHeartFill size={11} style={{ color: 'var(--accent)', margin: '0 2px' }} /> by Hussein
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ href, Icon, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-xl transition-all duration-200"
                style={{ width: 34, height: 34, background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = hoverColor; e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
