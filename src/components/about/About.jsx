import { RiDownload2Fill } from '@remixicon/react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="about-section mx-auto ml-7 my-9 px-4  pt-7 md:min-h-screen md:px-6" id="about">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        {/* About Me Section */}
        <div ref={aboutMeRef} className="about-me md:w-1/2">
          <SectionHeading>About Me</SectionHeading>
          <p
            className={`mt-4 text-lg transition-all duration-500 ease-in-out ${aboutMeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}
            `}
          >
            I am a driven Junior Frontend React Developer, proficient in (HTML5, CSS3, Bootstrap, Sass, Javascript, React, Redux, Material UI, Tailwind, Bootstrap)
          </p>

          <p
            className={`mt-4 text-lg transition-all duration-500 ease-in-out ${aboutMeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}
            `}
          >
            Passionate about developing user-friendly web applications, to contribute to innovative projects and enhance my skills.
          </p>

          <p
            className={`mt-4 text-lg transition-all duration-500 ease-in-out ${aboutMeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}
            `}
          >
            My motto is "Do what you love, love what you do," and I aim to excel and innovate in this field.
          </p>
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="education md:w-1/2">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-4">
            <div
              className={`text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}
              `}
            >
              <strong>Bachelor of Science in Computer Science & AI</strong>
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}
              `}
            >
              Beni Suef University, Faculty of Computer and Artificial Intelligence
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}
              `}
            >
              Graduation: 2019 – 2023 | Beni Suef, Egypt
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}
              `}
            >
              Graduation Project: E-Commerce (Grade: Excellent)
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <a
        ref={buttonRef}
        className={`mt-8 flex items-center justify-center justify-self-center md:justify-self-end transition-all duration-500 ease-in-out ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'}
        `}
        href="/public/resume/my-resume.pdf"
        download="Hussein-Ashraf-Resume.pdf" 
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button btnAnimated="secondary">
          Download CV <RiDownload2Fill className="ml-3" size={20} />
        </Button>
      </a>
    </section>
  );
}

export default About;
