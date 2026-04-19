import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useEffect } from 'react';

function LIghtModeBtn() {
  const [islight, setIsLight] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: light)').matches,
    'islight',
  );

  useEffect(() => {
    if (islight) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [islight]);

  return (
    <button
      onClick={() => setIsLight(v => !v)}
      className="w-[34px] h-[34px] rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[var(--accent-glow)] border border-transparent hover:border-[var(--border-hover)]"
      style={{ color: 'var(--text-secondary)' }}
      aria-label="Toggle color mode"
    >
      {islight
        ? <RiMoonFill size={16} />
        : <RiSunFill size={16} style={{ color: 'var(--accent)' }} />
      }
    </button>
  );
}

export default LIghtModeBtn;
