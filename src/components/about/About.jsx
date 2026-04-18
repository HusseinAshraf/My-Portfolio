import {
  RiDownload2Fill,
  RiGraduationCapFill,
  RiBuildingFill,
  RiAwardFill,
  RiLightbulbFlashFill,
  RiUserSmileFill,
} from '@remixicon/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: eduRef, inView: eduInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const eduItems = [
    { key: 'degree',            Icon: RiGraduationCapFill },
    { key: 'university',        Icon: RiBuildingFill },
    { key: 'graduation',        Icon: RiAwardFill },
    { key: 'graduationProject', Icon: RiLightbulbFlashFill },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-label-row">
          <span className="section-label">{t('about.label')}</span>
          <h2 className="section-heading">{t('about.aboutMe')}</h2>
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div ref={textRef} className={`about-bio ${textInView ? 'about-bio--visible' : ''}`}>
            <div className="about-icon-row">
              <div className="about-icon-wrap"><RiUserSmileFill size={20} /></div>
              <span className="about-icon-label">{t('about.aboutMe')}</span>
            </div>
            <p className="about-desc">{t('about.description1')}</p>
            <div className="about-chips">
              {['Clean Code', 'Team Player', 'Fast Learner', 'Problem Solver'].map((chip) => (
                <span key={chip} className="about-chip">{chip}</span>
              ))}
            </div>
            <a
              href="/resume/my-resume.pdf"
              download="Hussein-Ashraf-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cv-btn"
            >
              <RiDownload2Fill size={18} />
              {t('about.downloadCV')}
            </a>
          </div>

          {/* Education */}
          <div ref={eduRef} className="about-edu">
            <span className="section-label" style={{ marginBottom: '1rem', display: 'block' }}>
              {t('about.education')}
            </span>
            <div className="edu-grid">
              {eduItems.map(({ key, Icon }, i) => (
                <div
                  key={key}
                  className={`edu-card ${eduInView ? 'edu-card--visible' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="edu-icon"><Icon size={18} /></div>
                  <p className="edu-text">{t(`about.${key}`)}</p>
                </div>
              ))}
            </div>
            <div className={`about-award ${eduInView ? 'about-award--visible' : ''}`} style={{ transitionDelay: '420ms' }}>
              <RiAwardFill size={16} />
              <span>{t('about.idealStudent')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
