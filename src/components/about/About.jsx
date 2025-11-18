import { RiDownload2Fill } from '@remixicon/react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import './About.css';

function About() {
  const { t } = useTranslation(); 

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
    <section className="about-section  mx-7 my-9 px-4 pt-7 md:min-h-screen md:px-6" id="about">
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        {/* About Me Section */}
        <div ref={aboutMeRef} className="about-me md:w-1/2">
          <SectionHeading>{t('about.aboutMe')}</SectionHeading> {/* الترجمة هنا */}
          <p
            className={`mt-4 text-lg transition-all duration-500 ease-in-out ${aboutMeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}`}
          >
            {t('about.description1')} {/* الترجمة هنا */}
          </p>

        </div>

        {/* Education Section */}
        <div ref={educationRef} className="education md:w-1/2">
          <SectionHeading>{t('about.education')}</SectionHeading> {/* الترجمة هنا */}
          <div className="mt-4">
            <div
              className={`text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}`}
            >
              <strong>{t('about.degree')}</strong> {/* الترجمة هنا */}
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}`}
            >
              {t('about.university')} {/* الترجمة هنا */}
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-150px]'}`}
            >
              {t('about.graduation')} {/* الترجمة هنا */}
            </div>
            <div
              className={`mt-2 text-lg transition-all duration-500 ease-in-out ${educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}`}
            >
              {t('about.graduationProject')} {/* الترجمة هنا */}
            </div>
          </div>
        </div>

        
      </div>

      {/* Download CV Button */}
      <a
        ref={buttonRef}
        className={`mt-8 flex items-center justify-center justify-self-center md:justify-self-end transition-all duration-500 ease-in-out ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100px]'}`}
        href="/resume/my-resume.pdf"
        download="Hussein-Ashraf-Resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button btnAnimated="secondary">
          {t('about.downloadCV')} <RiDownload2Fill className="ml-3" size={20} /> {/* الترجمة هنا */}
        </Button>
      </a>
    </section>
  );
}

export default About;
