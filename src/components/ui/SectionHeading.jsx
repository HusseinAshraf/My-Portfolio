/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';

function SectionHeading({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,  // ليتم التفعيل مرة واحدة فقط
    threshold: 0.5,     // عند الوصول إلى 50% من العنصر
  });

  return (
    <h1
      ref={ref}
      className={`mb-9  text-center font-new-mono text-[28px] tracking-wider md:text-start md:text-4xl lg:text-5xl transition-all duration-400 ease-in-out ${inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-[-150px] translate-y-[100px]'
        }`}
    >
      {children}
    </h1>
  );
}

export default SectionHeading;
