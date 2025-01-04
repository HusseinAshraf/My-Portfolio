import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('ALL');

  const filterOptions = ['ALL', 'React', 'JS / API', 'Bootstrap', 'Material UI', 'Tailwind' , 'Html / Css'];

  const filteredProjects = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((project) => project.filterId.includes(filter));

  return (
    <section className="projects-section mx-7 overflow-hidden px-6 py-9  flex flex-col" id="projects">
      <SectionHeading>{t("Project")}</SectionHeading>

      <div className="flex flex-wrap justify-center  gap-4 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform 
              ${filter === option ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white scale-105 shadow-lg' : 'bg-gray-200 text-black hover:bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:text-white'} 
              w-auto`}
          >
             {t(option)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3 pt-9">
        {filteredProjects.map((item, index) => (
          <ProjectCard  item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
