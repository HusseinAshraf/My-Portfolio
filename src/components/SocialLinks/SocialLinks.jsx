import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
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
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
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
  );
};

export default SocialLinks;
