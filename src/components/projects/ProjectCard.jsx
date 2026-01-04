/* eslint-disable react/prop-types */
import {
  RiGithubFill,
  RiPlayCircleFill,
  RiArrowRightLine,
} from '@remixicon/react';
import { useEffect, useRef, useState } from 'react';
import ProjectButton from './ProjectButton';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

function ProjectCard({ item, index }) {
  const { image, name, gitHubLink, liveDemoLink, tech } = item;
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentCard = cardRef.current;
    if (currentCard) observer.observe(currentCard);

    return () => {
      if (currentCard) observer.unobserve(currentCard);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-full w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 ease-out overflow-hidden project-card border border-gray-100 dark:border-gray-800 ${
        isVisible ? 'animate' : ''
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <a
          href={liveDemoLink}
          className="block relative"
          aria-label={t('projects.aria.viewLiveDemo', { name })}
        >
          <img
            className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
            src={image}
            alt={t('projects.aria.previewImage', { name })}
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* View Project Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
            <span className="flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {t('projects.buttons.ViewProject')}
              <RiArrowRightLine
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </div>
        </a>

        {/* Featured Badge */}
        <div className="absolute top-4 left-4 bg-purple-600 dark:bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {t('projects.badges.featured')}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 h-[calc(100%-14rem)]">
        {/* Title */}
        <a
          href={liveDemoLink}
          className="block group/title mb-3"
          aria-label={t('projects.aria.viewDetails', { name })}
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover/title:text-purple-600 dark:group-hover/title:text-purple-400 transition-colors duration-300 line-clamp-2">
            {t(`projects.${name}.name`)}
          </h5>
        </a>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300  mb-4">
          {t(`projects.${name}.description`)}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-auto">
          {tech.map((el, i) => (
            <span
              key={i}
              className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 text-purple-700 dark:text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              {el}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-700 to-transparent my-4" />

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <ProjectButton href={gitHubLink} btnColor="black">
            <RiGithubFill size={18} className="flex-shrink-0" />
            <span className="hidden sm:inline font-medium">
              {t('projects.buttons.GitHubRepo')}
            </span>
            <span className="sm:hidden font-medium">
              {t('projects.buttons.Code')}
            </span>
          </ProjectButton>

          <ProjectButton href={liveDemoLink} btnColor="purple">
            <RiPlayCircleFill size={18} className="flex-shrink-0" />
            <span className="hidden sm:inline font-medium">
              {t('projects.buttons.LiveDemo')}
            </span>
            <span className="sm:hidden font-medium">
              {t('projects.buttons.Demo')}
            </span>
          </ProjectButton>
        </div>
      </div>

      {/* Decorative Effects */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-700" />

      {/* Hover Glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20" />
      </div>
    </div>
  );
}

export default ProjectCard;
