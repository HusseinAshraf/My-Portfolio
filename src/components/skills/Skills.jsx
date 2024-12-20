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

function Skills() {
  return (
    <section className="skills-section my-8 min-h-60 px-2 md:px-6" id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <SkillCard image={Html}>Html</SkillCard>
        <SkillCard image={Css}>Css</SkillCard>
        <SkillCard image={Bootstrap}>Bootstrap</SkillCard>
        <SkillCard image={Tailwind}>Tailwind</SkillCard>
        <SkillCard image={Sass}>Sass</SkillCard>
        <SkillCard image={Javascript}>Javascript</SkillCard>
        <SkillCard image={ReactLogo}>React</SkillCard>
        <SkillCard image={MaterialUI}>Material UI</SkillCard>
        <SkillCard image={Git}>Git</SkillCard>
        <SkillCard image={Github}>Github</SkillCard>
      </div>
    </section>
  );
}

export default Skills;
