/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';

function SkillCard({ image, children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`skill-card flex items-center gap-4 rounded-lg border border-white object-cover p-4 shadow-sm shadow-purple-500 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[150px]'}`}
    >
      <div className="h-12 w-12">
        <img
          src={image}
          alt="Skill image"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <span className="font-semibold text-lg">{children}</span>
    </div>
  );
}

export default SkillCard;
