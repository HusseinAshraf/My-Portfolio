function ProjectButton({ href, children, btnColor }) {
  const blackBtn = (
    <a
      className="before:ease before:content-['GitHub Repo'] w-25 relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-40 before:w-40 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-700 before:transition-all before:duration-300 hover:text-white hover:shadow-gray-800 hover:before:-rotate-180 hover:before:bg-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:before:bg-gray-700"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10 flex items-center justify-center gap-1">
        {children}
      </span>
    </a>
  );

  const purpleBtn = (
    <a
      className="before:ease before:content-['Live Demo'] relative flex w-25 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-purple-800 bg-purple-800 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-40 before:w-40 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-purple-700 before:text-black before:transition-all before:duration-300 hover:text-white hover:shadow-purple-900 hover:before:-rotate-180 hover:before:bg-purple-600 dark:border-purple-900 dark:bg-purple-900 dark:hover:bg-purple-800 dark:hover:before:bg-purple-700"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10 flex items-center justify-center gap-1">
        {children}
      </span>
    </a>
  );

  if (btnColor === 'black') {
    return blackBtn;
  }
  if (btnColor === 'purple') return purpleBtn;
}

export default ProjectButton;
