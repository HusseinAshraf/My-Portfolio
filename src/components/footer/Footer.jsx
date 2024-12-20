function Footer() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer className="relative z-20 w-full bg-[#7508E8] py-5">
      <div className=" text-white flex w-full items-center justify-center font-semibold sm:text-sm md:text-xl">
        &copy; {year} Hussein. A, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
