import { 
  RiDownload2Fill, 
  RiBriefcaseFill, 
  RiRocketFill, 
  RiBookOpenFill, 
  RiGraduationCapFill,
  RiAwardFill,
  RiBuildingFill,
  RiCalendarFill,
  RiMapPinFill,
  RiLightbulbFlashFill
} from '@remixicon/react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; 
import './About.css';

function About() {
  const { t } = useTranslation(); 

  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const experiences = [
    {
      role: t('about.frontendDeveloper'),
      company: 'Global Experts',
      period: t('about.experiences.globalExperts.period'),
      location: t('about.experiences.globalExperts.location'),
      color: 'from-violet-600 to-purple-600',
      icon: RiBriefcaseFill
    },
    {
      role: t('about.frontendDeveloper'),
      company: 'Finest Touch KSA',
      period: t('about.experiences.finestTouch.period'),
      location: t('about.experiences.finestTouch.location'),
      color: 'from-cyan-500 to-blue-600',
      icon: RiRocketFill
    },
    {
      role: t('about.internship'),
      company: '04 Academy',
      period: t('about.experiences.academy04.period'),
      location: t('about.experiences.academy04.location'),
      color: 'from-fuchsia-500 to-pink-600',
      icon: RiBookOpenFill
    },
    {
      role: t('about.diploma'),
      company: 'Route IT Training Center',
      period: t('about.experiences.routeIT.period'),
      location: t('about.experiences.routeIT.location'),
      color: 'from-amber-500 to-orange-600',
      icon: RiGraduationCapFill
    }
  ];

  return (
    <section className="about-section mx-7 my-12 px-4 md:px-6" id="about">
      <div className="flex flex-col gap-16 md:gap-20">

        {/* About Me Section */}
        <div ref={aboutMeRef} className="about-me relative">
          <SectionHeading>{t('about.aboutMe')}</SectionHeading>
          <div className={`mt-6 relative transition-all duration-700 ease-out ${aboutMeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 shadow-2xl">
              <p className="text-lg leading-relaxed text-gray-100">{t('about.description1')}</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="experience">
          <SectionHeading>{t('about.experience')}</SectionHeading>
          <div className="mt-8 relative">
            {/* Timeline Line */}
            <div className="absolute start-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-blue-600 rounded-full"></div>
            
            <div className="flex flex-col gap-8 ps-20">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ease-out ${experienceInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot with Icon */}
                  <div className="absolute -start-[4.5rem] top-6 flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-2xl shadow-purple-500/50 border-4 border-slate-900 transform transition-transform duration-300 hover:scale-110`}>
                      <exp.icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                    <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{exp.role}</h3>
                        <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${exp.color} rounded-full text-white shadow-lg`}>
                          {t('about.active')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">
                        <span className="font-semibold text-purple-400 flex items-center gap-2">
                          <RiBuildingFill size={16} />
                          {exp.company}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <RiCalendarFill size={14} className="text-purple-400" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <RiMapPinFill size={14} className="text-pink-400" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="education">
          <SectionHeading>{t('about.education')}</SectionHeading>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { label: t('about.degree'), icon: RiGraduationCapFill, delay: 0, color: 'from-violet-600 to-purple-600' },
              { label: t('about.university'), icon: RiBuildingFill, delay: 150, color: 'from-blue-600 to-cyan-600' },
              { label: t('about.graduation'), icon: RiAwardFill, delay: 300, color: 'from-pink-600 to-rose-600' },
              { label: t('about.graduationProject'), icon: RiLightbulbFlashFill, delay: 450, color: 'from-amber-600 to-orange-600' }
            ].map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${educationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                  <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <p className="text-base text-gray-200 leading-relaxed flex-1">{item.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center md:justify-end mt-8">
          <a
            ref={buttonRef}
            className={`transition-all duration-700 ease-out ${buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            href="/resume/my-resume.pdf"
            download="Hussein-Ashraf-Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Button btnAnimated="secondary" className="relative">
                <span className="flex items-center gap-3">
                  {t('about.downloadCV')} 
                  <RiDownload2Fill className="transform group-hover:translate-y-1 transition-transform" size={20} />
                </span>
              </Button>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
