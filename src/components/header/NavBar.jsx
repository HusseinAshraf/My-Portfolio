import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LIghtModeBtn from '../ui/LIghtModeBtn';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';

const LINKS = [
  { href: '#about',      label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills',     label: 'skills' },
  { href: '#projects',   label: 'projects' },
  { href: '#contact',    label: 'contact' },
];

function NavBar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('');
  const menuRef                   = useRef(null);
  const { t, i18n }               = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: scrolled ? '10px 24px' : '16px 24px',
    transition: 'padding 0.3s ease',
  };

  return (
    <>
      <nav style={navStyle} className={i18n.language === 'ar' ? 'rtl' : ''}>
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1152 }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div
              className="flex items-center justify-center rounded-xl font-bold text-sm text-white flex-shrink-0"
              style={{
                width: 34, height: 34,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
              }}
            >
              {t('logoar')}
            </div>
            <span
              className=" sm:block font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              {t('logo')}<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop nav pill */}
          <div
            className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl"
            style={{
              background: scrolled ? 'var(--bg-card)' : 'var(--bg-card)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: scrolled ? 'var(--shadow-lg)' : 'var(--shadow)',
              transition: 'all 0.3s ease',
            }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className="no-underline transition-all duration-200 rounded-xl"
                style={{
                  padding: '8px 14px',
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: active === link.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: active === link.href ? 'var(--bg-elevated)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (active !== link.href) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'var(--accent-glow)';
                  }
                }}
                onMouseLeave={e => {
                  if (active !== link.href) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {t(`menu.${link.label}`)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div
            className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <LIghtModeBtn />
            <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
            <LanguageSwitch />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              width: 38, height: 38,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <RiMenuLine size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3 px-6"
          style={{
            background: 'var(--bg-base)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <button
            className="absolute top-5 right-5 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              width: 38, height: 38,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <RiCloseLine size={20} />
          </button>

          <div
            className="font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
          >
            Menu
          </div>

          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.href); setMenuOpen(false); }}
              className="no-underline w-full text-center transition-all duration-200 rounded-xl"
              style={{
                maxWidth: 280,
                padding: '16px 24px',
                fontFamily: 'var(--font-display)',
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = 'var(--accent-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t(`menu.${link.label}`)}
            </a>
          ))}

          <div
            className="flex items-center gap-3 mt-6 pt-6 w-full justify-center"
            style={{ borderTop: '1px solid var(--border)', maxWidth: 280 }}
          >
            <LIghtModeBtn />
            <LanguageSwitch />
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
