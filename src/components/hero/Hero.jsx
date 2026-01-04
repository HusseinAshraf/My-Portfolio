import myPhoto from '../../assets/images/my_photo.png';
import { RiArrowDownDoubleFill } from '@remixicon/react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-visible mt-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute -top-40 -start-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -end-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 py-12 md:flex-row md:gap-12 lg:gap-16">

          {/* Content Section */}
          <div className="flex w-full flex-col md:w-1/2 lg:ps-8">
            <p className="hero-text hero-text-delay-1 mb-4 mt-3 text-center text-xl md:mb-6 md:mt-14 md:text-start md:text-2xl lg:text-3xl">
              {t('hero.greeting')} 🖐️ {t('hero.introduction')}
            </p>
            <h1 className="hero-text hero-text-delay-2 mb-7 text-center font-new-mono text-2xl md:text-start md:text-[28px] lg:text-5xl">
              {t('hero.name')}
            </h1>
            <p className="hero-text hero-text-delay-3 mb-4 text-base md:text-2xl">
              {t('hero.jobTitle')}
            </p>
            <p className="hero-text hero-text-delay-4 text-base leading-8 md:text-2xl">
              {t('hero.description')}
            </p>
            {/* CTA Button */}
            <div className="hero-text hero-text-delay-5 mt-5 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="group inline-flex transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={t('hero.contactMe')}
              >
                <Button btnAnimated="primary">
                  <span className="flex items-center gap-2">
                    {t('hero.contactMe')}
                    <RiArrowDownDoubleFill
                      className="transition-transform duration-300 group-hover:translate-y-1"
                      size={20}
                    />
                  </span>
                </Button>
              </a>
            </div>



            {/* Social Proof / Stats */}
            <div className="hero-text hero-text-delay-6 mt-12 hidden items-center gap-8 md:flex">
              <div className="text-center md:text-start">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center md:text-start">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.projectsCompleted')}</div>
              </div>
              <div className="text-center md:text-start">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('hero.happyClients')}</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-image flex w-full items-center justify-center md:w-1/2">
            <div className="relative">
              {/* Decorative ring around image */}
              <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />

              {/* Image container */}
              <div className="relative overflow-visible rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1 shadow-2xl">
                <img
                  src={myPhoto}
                  alt={t('hero.name')}
                  className="h-auto w-auto max-h-[70vh] max-w-[70vw] rounded-3xl object-contain"
                  loading="eager"
                />
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-gray-600 dark:text-gray-400">{t('hero.scroll')}</span>
          <RiArrowDownDoubleFill size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
