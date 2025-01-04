import myPhoto from '../../assets/images/my_photo.jpg';
import { RiArrowDownDoubleFill } from '@remixicon/react';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import './Hero.css';

function Hero() {
  const { t } = useTranslation(); // استخدام الترجمة

  return (
    <section>
      <div className="relative m-7 flex p-4 min-h-screen flex-col-reverse items-center justify-center md:flex-row">
        <div className="w-full  md:w-1/2 md:p-6">
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
          <a
            className="hero-text hero-text-delay-5 mt-8 flex items-center justify-center justify-self-center md:justify-self-start"
            href="#contact"
          >
            <Button btnAnimated="primary">
              {t('hero.contactMe')} <RiArrowDownDoubleFill className="ml-3" size={20} />
            </Button>
          </a>
        </div>
        <div className="hero-image flex w-full items-center justify-center p-6 md:w-1/2 md:p-8">
          <img
            src={myPhoto}
            alt="My photo"
            className="mt-12 h-[400px] w -[350px] rounded-3xl md:mt-0 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[350px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
