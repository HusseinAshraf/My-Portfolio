/* eslint-disable react/prop-types */
import { RiGithubFill, RiPlayCircleFill } from '@remixicon/react';
import { useEffect, useRef, useState } from 'react';
import ProjectButton from './ProjectButton';
import './ProjectCard.css';

function ProjectCard({ item, index }) {
  const { image, name, description, gitHubLink, liveDemoLink, tech } = item;
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // When element is in view, add the 'animate' class
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
      className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mb-5 project-card ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }} // Add delay based on index
    >
      {/* Ensure the image is within the div and covers only its container */}
      <a href={liveDemoLink}>
        <img
          className="w-full h-[180px] object-cover rounded-t-lg" // Reduced height for image
          src={image}
          alt={`${name} image`}
          loading="lazy"
        />
      </a>
      <div className="px-4 pb-4 pt-5"> {/* Reduced padding */}
        <a href={liveDemoLink}>
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="mb-3 flex flex-wrap gap-2">
          {tech.map((el, i) => (
            <p
              key={i}
              className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              {el}
            </p>
          ))}
        </div>
        <div className="mb-1 flex items-center gap-1 lg:gap-4">
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
  );
}

export default ProjectCard;
