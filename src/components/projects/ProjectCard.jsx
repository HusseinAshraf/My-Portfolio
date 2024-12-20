/* eslint-disable react/prop-types */
import { RiGithubFill, RiPlayCircleFill } from '@remixicon/react';
import { useEffect, useRef } from 'react';
import ProjectButton from './ProjectButton';
import './ProjectCard.css';

function ProjectCard({ item, index }) {
  const { image, name, description, gitHubLink, liveDemoLink, tech } = item;
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card relative mb-5 h-[252px] w-[300px] overflow-hidden rounded-lg transition-transform md:h-[293px] md:w-[350px]"
      style={{ animationDelay: `${index * 0.2}s` }} // Add delay based on index
    >
      <img
        src={image}
        alt={`${name} image`}
        className="absolute inset-0 h-full w-full transition-opacity duration-300"
        loading="lazy"
      />
      <div className="relative z-20 flex h-full w-full flex-col justify-between bg-black/60 p-4 text-white">
        <h2 className="mb-4 text-2xl font-medium">{name}</h2>
        <div className="flex flex-col justify-between">
          <p className="mb-3 flex-grow md:text-base text-sm">{description}</p>
          <div className="mb-2 flex items-center justify-end gap-2">
            {tech.map((el, i) => (
              <p key={i} className="rounded-2xl border-2 border-purple-500 p-1 text-center text-xs">
                {el}
              </p>
            ))}
          </div>
          <div className="mb-1 flex items-center gap-1 lg:gap-5">
            <ProjectButton href={gitHubLink} btnColor="black">
              <RiGithubFill size={20} /> GitHub Repo
            </ProjectButton>
            <ProjectButton href={liveDemoLink} btnColor="purple">
              <RiPlayCircleFill size={20} />
              Live Demo
            </ProjectButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
