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
import SectionHeading from '../ui/SectionHeading';
import SkillCard from './SkillCard';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  const skills = [
    { image: Html, name: t('skills.Html'), gradient: 'from-orange-500 to-red-600' },
    { image: Css, name: t('skills.Css'), gradient: 'from-blue-500 to-cyan-600' },
    { image: Bootstrap, name: t('skills.Bootstrap'), gradient: 'from-purple-600 to-indigo-600' },
    { image: Tailwind, name: t('skills.Tailwind'), gradient: 'from-cyan-400 to-blue-500' },
    { image: Sass, name: t('skills.Sass'), gradient: 'from-pink-500 to-rose-600' },
    { image: Javascript, name: t('skills.Javascript'), gradient: 'from-yellow-400 to-orange-500' },
    { image: ReactLogo, name: t('skills.React'), gradient: 'from-cyan-500 to-blue-600' },
    { image: Angular, name: t('skills.Angular'), gradient: 'from-red-600 to-pink-600' },
    { image: Typescript, name: t('skills.Typescript'), gradient: 'from-blue-600 to-indigo-700' },
    { image: MaterialUI, name: t('skills.Material UI'), gradient: 'from-blue-500 to-purple-600' },
    { image: Git, name: t('skills.Git'), gradient: 'from-orange-600 to-red-600' },
    { image: Github, name: t('skills.Github'), gradient: 'from-gray-700 to-slate-900' },
  ];

  return (
    <section className="skills-section m-7 my-12 px-4 md:px-6" id="skills">
      <SectionHeading>{t('skills.MySkills')}</SectionHeading>
      
      {/* Skills Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            image={skill.image} 
            gradient={skill.gradient}
          >
            {skill.name}
          </SkillCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;