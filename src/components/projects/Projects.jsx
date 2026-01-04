import { PROJECTS } from '../../assets/constants';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiCheckLine } from '@remixicon/react';

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('ALL');

  const filterOptions = [
    { value: 'ALL', icon: '🎯', label: t('projects.filters.all') },
    { value: 'React', icon: '⚛️', label: t('projects.filters.react') },
    { value: 'Angular', icon: '🅰️', label: t('projects.filters.angular') },
    { value: 'JS / API', icon: '🔥', label: t('projects.filters.js') },
    { value: 'Bootstrap', icon: '🎨', label: t('projects.filters.bootstrap') },
    { value: 'Material UI', icon: '📦', label: t('projects.filters.material') },
    { value: 'Tailwind', icon: '💨', label: t('projects.filters.tailwind') },
    { value: 'Html / Css', icon: '🌐', label: t('projects.filters.htmlCss') },
  ];

  const filteredProjects =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterId.includes(filter));

  return (
    <section
      className="projects-section mx-7 overflow-hidden px-6 py-12 flex flex-col"
      id="projects"
    >
      <SectionHeading>{t('projects.title')}</SectionHeading>

      {/* Filter Section */}
      <div className="mt-8 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`group relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                filter === option.value
                  ? 'text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800/80 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {filter === option.value && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl"></div>
              )}

              <span className="relative z-10 flex items-center gap-2">
                <span className="text-base">{option.icon}</span>
                {option.label}
                {filter === option.value && (
                  <RiCheckLine size={18} className="animate-pulse" />
                )}
              </span>

              {filter !== option.value && (
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition duration-300"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((item, index) => (
          <ProjectCard item={item} key={index} index={index} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-400">
            {t('projects.empty')}
          </p>
          <button
            onClick={() => setFilter('ALL')}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            {t('projects.showAll')}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
