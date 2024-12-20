import { RiMoonFill, RiSunFill } from '@remixicon/react';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useEffect } from 'react';

function LIghtModeBtn() {
  const [islight, setIsLight] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: light)').matches,
    'islight',
  );

  useEffect(
    function () {
      if (islight) {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      }
    },
    [islight],
  );

  const handleDarkMode = () => {
    setIsLight((islight) => !islight);
  };

  return (
    <div>
      <button onClick={() => handleDarkMode()} className="cursor-pointer">
        {' '}
        {islight ? (
          <RiMoonFill aria-label="dark mode button" className="text-black" />
        ) : (
          <RiSunFill
            aria-label="light mode button"
            className="text-[#f14907]"
          />
        )}
      </button>
    </div>
  );
}

export default LIghtModeBtn;
