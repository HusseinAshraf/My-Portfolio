/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';

function SkillCard({ image, children, gradient = 'from-purple-600 to-pink-600' }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`skill-card relative group transition-all duration-700 ease-out w-full h-full ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[150px]'
      }`}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500`}></div>
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl border border-purple-500/20 group-hover:border-purple-500/50 p-5 shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
        <div className="flex items-center gap-4 h-full">
          {/* Icon Container with Gradient Background */}
          <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center p-2">
              <img
                src={image}
                alt="Skill icon"
                className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Skill Name */}
          <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 flex-1">
            {children}
          </span>
        </div>

        {/* Shimmer Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;