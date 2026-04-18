import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LIghtModeBtn from '../ui/LIghtModeBtn';
import Logo from '../../assets/images/logo.svg';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = `mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-300 ${scrolled
      ? 'bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/20 md:my-2 md:rounded-2xl '
      : 'bg-transparent'
    }`;

  return (
    <nav className={i18n.language === 'ar' ? 'rtl' : ''}>
      <div className={navClass}>
        <a href="#" className="flex items-center gap-2 w-fit">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <span className="font-mono text-xl tracking-widest text-gray-400 dark:text-gray-100 sm:block">
            <span className="text-sky-500">&lt;</span>
            {t('logo')}
            <span className="text-sky-500">/&gt;</span>
          </span>
        </a>

        <div className="hidden lg:flex lg:items-center lg:gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group"
            >
              {t(`menu.${link.label}`)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <LIghtModeBtn />
          <LanguageSwitch />
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute inset-0 z-50 flex h-screen flex-col items-center justify-center gap-7 bg-gray-950/97 backdrop-blur-xl lg:hidden"
        >
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-3xl leading-none">&times;</span>
          </button>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-gray-300 transition-colors hover:text-sky-400"
            >
              {t(`menu.${link.label}`)}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-48 justify-center">
            <LIghtModeBtn />
            <LanguageSwitch />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
