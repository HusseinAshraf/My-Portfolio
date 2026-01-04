import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative z-20 w-full overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 border-t border-purple-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-8">
        {/* Top Decorative Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-6" />

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Copyright Text */}
          <div className="flex items-center gap-2 text-gray-300 font-medium text-sm sm:text-base">
            <span className="text-gray-400">&copy;</span>
            <span>{year}</span>
            <span className="hidden sm:inline text-purple-400">•</span>
            <span className="text-center">{t("AllRightsReserved")}</span>
          </div>

       

         
        </div>

        {/* Bottom Decorative Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mt-6" />
      </div>

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600" />
    </footer>
  );
}

export default Footer;