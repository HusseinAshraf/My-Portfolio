import { MENULINKS } from '../../assets/constants';
import LIghtModeBtn from '../ui/LIghtModeBtn';
import MobileMenu from './MobileMenu';
import Logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-1 md:rounded-xl">
        <div className="font-new-mono text-2xl tracking-widest text-white md:text-4xl">
          <a href="#" className="flex items-center w-fit">
            <img src={Logo} alt="React Logo" className="h-10 w-auto mr-2" />
            <span>
              <span className="text-[#FFD700]">&lt;</span>Hussein. A
              <span className="text-[#FFD700]">/&gt;</span>
            </span>
          </a>
        </div>
        <div className="hidden space-x-8 md:hidden lg:flex lg:items-center">
          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-lg font-semibold text-white transition-all duration-300 hover:text-[#FFD700] hover:scale-105"
            >
              <span className="text-[#FFD700]">&lt;</span>{link.label}<span className="text-[#FFD700]">/&gt;</span>
            </a>
          ))}
          <LIghtModeBtn />
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}

export default NavBar;