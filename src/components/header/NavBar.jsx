import { useState, useEffect, useRef } from "react";
import { MENULINKS } from "../../assets/constants";
import LIghtModeBtn from "../ui/LIghtModeBtn";
import Logo from "../../assets/images/logo.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="hidden space-x-8 lg:flex lg:items-center">
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
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white shadow-lg lg:hidden"
        >
          {/* زر الإغلاق */}
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-2xl">&times;</span>
          </button>

          {MENULINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="mb-4 ztext-2xl font-semibold transition-all duration-300 hover:text-[#FFD700]"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-[#FFD700]">&lt;</span>{link.label}<span className="text-[#FFD700]">/&gt;</span>
            </a>
          ))}
          <LIghtModeBtn />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
