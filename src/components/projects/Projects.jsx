import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('ALL');  

  
  const techOptions = ['ALL', 'React', 'JS / API', 'Bootstrap',  'Material UI', 'Tailwind' ,'HTML-CSS'];

  
  const filteredProjects = filter === 'ALL'
    ? PROJECTS
    : filter === 'HTML-CSS'
      ? PROJECTS.filter((project) => project.tech.includes('Html') && project.tech.includes('Css'))
      : filter === 'JS / API'
        ? PROJECTS.filter((project) => project.tech.includes('JavaScript') || project.tech.includes('API'))
        : filter === 'Tailwind'
          ? PROJECTS.filter((project) => project.tech.includes('Tailwind'))
          : PROJECTS.filter((project) => project.tech.includes(filter));

  return (
    <section className="projects-section mx-auto overflow-hidden px-6 py-9 flex flex-col" id="projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {techOptions.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform 
              ${filter === tech ? 'bg-purple-600 text-white scale-105 shadow-lg' : 'bg-gray-200 text-black hover:bg-purple-500 hover:text-white'} 
              w-auto`} 
          >
            {tech}
          </button>
        ))}
      </div>

    
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 pt-9">
        {filteredProjects.map((item, index) => (
          <ProjectCard item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
