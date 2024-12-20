import { MENULINKS } from '../../assets/constants';
import LIghtModeBtn from '../ui/LIghtModeBtn';
import MobileMenu from './MobileMenu';
import Logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-1 md:rounded-xl">
        <div className="font-new-mono text-2xl tracking-widest md:text-4xl">
          <a href="#" className='flex items-center w-fit'> <img src={Logo} alt="React Logo" className="h-10 w-fit" /><span><span className='text-[#7309E2]'>&lt;</span>Hussein. A<span className='text-[#7309E2]'>/&gt;</span></span></a>
        </div>
        <div className="hidden space-x-8 md:hidden lg:flex lg:items-center">
          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-lg font-semibold transition duration-300 hover:text-[#7309E2]"
            >
              <span className='text-[#7309E2]'>&lt;</span>{link.label}<span className='text-[#7309E2]'>/&gt;</span>
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