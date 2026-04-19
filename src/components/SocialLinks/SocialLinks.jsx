import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill } from '@remixicon/react';

const LINKS = [
  { href: 'https://github.com/HusseinAshraf', Icon: RiGithubFill, label: 'GitHub', hoverColor: 'var(--text-primary)' },
  { href: 'https://www.linkedin.com/in/hussein-ashraf-1018a7203/', Icon: RiLinkedinBoxFill, label: 'LinkedIn', hoverColor: '#6d6aff' },
  { href: 'https://wa.me/+201112685912', Icon: RiWhatsappFill, label: 'WhatsApp', hoverColor: '#22c55e' },
];

function SocialLinks() {
  return (
    <div
      className="flex flex-col gap-2 p-2 rounded-2xl"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {LINKS.map(({ href, Icon, label, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center justify-center rounded-xl transition-all duration-200"
          style={{ width: 36, height: 36, color: 'var(--text-muted)' }}
          onMouseEnter={e => {
            e.currentTarget.style.color = hoverColor;
            e.currentTarget.style.background = 'var(--accent-glow)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = '';
          }}
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
