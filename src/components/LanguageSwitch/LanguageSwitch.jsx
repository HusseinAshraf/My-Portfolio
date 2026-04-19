import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="px-2.5 py-1 rounded-lg text-xs font-600 transition-all duration-200"
        style={{
          background: !isAr ? 'var(--accent)' : 'transparent',
          color: !isAr ? 'white' : 'var(--text-muted)',
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: '0.02em',
        }}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('ar')}
        className="px-2.5 py-1 rounded-lg text-xs font-600 transition-all duration-200"
        style={{
          background: isAr ? 'var(--accent)' : 'transparent',
          color: isAr ? 'white' : 'var(--text-muted)',
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: '0.02em',
        }}
        aria-label="Arabic"
      >
        AR
      </button>
    </div>
  );
}

export default LanguageSwitch;
