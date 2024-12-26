import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaUsers, FaFacebook } from "react-icons/fa"; // إضافة FaFacebook
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/hussein-ashraf-1018a7203/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/HusseinAshraf",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:husseinashraf7414@gmail.com", // رابط mailto
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/src/assets/resume/my-resume.pdf", 
      style: "rounded-br-md",
      download: true,
    },
  
  ];

  return (
    <div className="fixed top-[35%] left-0 lg:flex flex-col">
      {/* Social Links for large screens */}
      <div className="hidden lg:flex flex-col">
        <ul>
          {links.map(({ id, label, icon, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white font-medium"
                download={download}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Button for small screens (styled as 'Social') */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-[35%] left-0 p-3 text-3xl text-white z-50 hover:scale-110 transition-all duration-300"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <FaUsers size={30} /> 
        )}
      </button>

      {/* Social Links for small screens */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center mt-12">
          <ul>
            {links.map(({ id, label, icon, href, style, download }) => (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 mb-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 ${style} rounded-md`}
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white font-medium"
                  download={download}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
