import Html from '../../assets/images/Html.webp';
import Css from '../../assets/images/CSS.webp';
import Javascript from '../../assets/images/JS.webp';
import ReactLogo from '../../assets/images/react-icon.webp';
import Tailwind from '../../assets/images/Tailwind Css.webp';
import Bootstrap from '../../assets/images/Bootstrap.webp';
import MaterialUI from '../../assets/images/material.webp';
import Sass from '../../assets/images/Sass.webp';
import Github from '../../assets/images/Github3.webp';
import Angular from '../../assets/images/Angular.png';
import Typescript from '../../assets/images/Typescript.png';
import Git from '../../assets/images/git.webp';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function SkillCard({ image, name, index, inView }) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.88)',
        transition: `opacity 0.45s ease ${0.03 * index}s, transform 0.45s ease ${0.03 * index}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 12px 32px var(--accent-glow)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
      }}
    >
      <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={image}
          alt={name}
          style={{ width: 40, height: 40, objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
          loading="lazy"
        />
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center' }}>
        {name}
      </span>
    </div>
  );
}

function Skills() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { image: Html,       name: t('skills.Html') },
    { image: Css,        name: t('skills.Css') },
    { image: Javascript, name: t('skills.Javascript') },
    { image: Typescript, name: t('skills.Typescript') },
    { image: ReactLogo,  name: t('skills.React') },
    { image: Angular,    name: t('skills.Angular') },
    { image: Tailwind,   name: t('skills.Tailwind') },
    { image: Bootstrap,  name: t('skills.Bootstrap') },
    { image: Sass,       name: t('skills.Sass') },
    { image: MaterialUI, name: t('skills.Material UI') },
    { image: Git,        name: t('skills.Git') },
    { image: Github,     name: t('skills.Github') },
  ];

  return (
    <section id="skills" style={{ padding: '96px 0' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1152 }}>

        <div className="mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full mb-3"
            style={{ padding: '5px 14px', background: 'var(--accent-glow)', border: '1px solid rgba(109,106,255,0.2)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
          >
            Toolkit
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            {t('skills.MySkills')}
          </h2>
        </div>

        <div
          ref={ref}
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
