/* eslint-disable react/prop-types */
function ProjectButton({ href, children, btnColor }) {
  const blackBtn = (
    <a
      className="before:ease before:content-['GitHub Repo'] w-25 relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-black bg-stone-500 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-40 before:w-40 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 hover:text-white hover:shadow-stone-700 hover:before:-rotate-180"
      href={href}
      target="_blank"
      rel="noopener norefferer"
    >
      <span className="relative z-10 flex items-center justify-center gap-1">
        {children}
      </span>
    </a>
  );

  const purpleBtn = (
    <a
      className="before:ease before:content-['Live Demo'] relative flex w-25 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-black bg-purple-700 px-2 py-2 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-40 before:w-40 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-purple-500 before:text-black before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
      href={href}
      target="_blank"
      rel="noopener norefferer"
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
