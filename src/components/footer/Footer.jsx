import { useTranslation } from 'react-i18next';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {year} {t('AllRightsReserved')}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/HusseinAshraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 transition-colors hover:text-gray-300">
              <RiGithubFill size={18} />
            </a>
            <a href="https://www.linkedin.com/in/hussein-ashraf-1018a7203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 transition-colors hover:text-blue-400">
              <RiLinkedinBoxFill size={18} />
            </a>
            <a href="mailto:husseinashraf7414@gmail.com" aria-label="Email" className="text-gray-500 transition-colors hover:text-pink-400">
              <RiMailLine size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
