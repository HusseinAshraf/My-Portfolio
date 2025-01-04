import Html from '../../assets/images/Html.webp';
import Css from '../../assets/images/CSS.webp';
import Javascript from '../../assets/images/JS.webp';
import ReactLogo from '../../assets/images/react-icon.webp';
import Tailwind from '../../assets/images/Tailwind Css.webp';
import Bootstrap from '../../assets/images/Bootstrap.webp';
import MaterialUI from '../../assets/images/material.webp';
import Sass from '../../assets/images/Sass.webp';
import Github from '../../assets/images/Github3.webp';
import Git from '../../assets/images/git.webp';
import SectionHeading from '../ui/SectionHeading';
import SkillCard from './SkillCard';
import { useTranslation } from 'react-i18next';



function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills-section m-7 my-8 px-4 md:px-6" id="skills">
      <SectionHeading> {t('skills.MySkills')}</SectionHeading>
      <div className="mt-12 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
        <SkillCard image={Html}>{t('skills.Html')}</SkillCard>
        <SkillCard image={Css}>{t('skills.Css')}</SkillCard>
        <SkillCard image={Bootstrap}>{t('skills.Bootstrap')}</SkillCard>
        <SkillCard image={Tailwind}>{t('skills.Tailwind')}</SkillCard>
        <SkillCard image={Sass}>{t('skills.Sass')}</SkillCard>
        <SkillCard image={Javascript}>{t('skills.Javascript')}</SkillCard>
        <SkillCard image={ReactLogo}>{t('skills.React')}</SkillCard>
        <SkillCard image={MaterialUI}>{t('skills.Material UI')}</SkillCard>
        <SkillCard image={Git}>{t('skills.Git')}</SkillCard>
        <SkillCard image={Github}>{t('skills.Github')}</SkillCard>
      </div>
    </section>
  );
}

export default Skills;
