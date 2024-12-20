/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import './SkillCard.css';

function SkillCard({ image, children }) {
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
      className="skill-card flex w-max items-center gap-1 rounded-lg border border-white object-cover px-2 py-1 shadow-sm shadow-purple-500"
    >
      <div className="h-10 w-12">
        <img
          src={image}
          alt="Skill image"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="font-semibold">{children}</span>
    </div>
  );
}

export default SkillCard;
