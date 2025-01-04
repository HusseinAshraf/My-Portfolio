import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
  
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative z-20 w-full bg-gradient-to-r from-[#6A1DFF] via-[#4C00B5] to-[#2C0077] py-6">
      <div className="text-white flex w-full items-center justify-center font-semibold text-sm sm:text-base md:text-lg">
        &copy; {year} {t("AllRightsReserved")}
      </div>
    </footer>
  );
}

export default Footer;
