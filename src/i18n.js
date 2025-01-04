import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "/public/locales/en.json";
import ar from "/public/locales/ar.json";

// تحقق من اللغة المخزنة في localStorage
const savedLanguage = localStorage.getItem("language") || "en"; // إذا لم تكن هناك لغة مخزنة، استخدم الإنجليزية كافتراضية

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLanguage, // استخدم اللغة المخزنة من localStorage أو الافتراضية
  fallbackLng: "en", // اللغة الافتراضية إذا لم تكن اللغة المختارة موجودة
  interpolation: { escapeValue: false }, // عدم إخفاء القيم في النصوص
});

// استماع لتغيير اللغة وتحديث خصائص الـ DOM بناءً عليها
i18n.on('languageChanged', (lng) => {
  if (lng === 'ar') {
    document.documentElement.dir = 'rtl'; // تغيير اتجاه النص إلى اليمين لليسار عند اختيار العربية
    document.documentElement.lang = 'ar'; // تعيين لغة الـ HTML إلى العربية
    localStorage.setItem("language", "ar"); // حفظ اللغة في localStorage
  } else {
    document.documentElement.dir = 'ltr'; // العودة إلى الاتجاه من اليسار لليمين عند اختيار الإنجليزية
    document.documentElement.lang = 'en'; // تعيين لغة الـ HTML إلى الإنجليزية
    localStorage.setItem("language", "en"); // حفظ اللغة في localStorage
  }
});

export default i18n;
