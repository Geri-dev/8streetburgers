import { Instagram, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              
              <span className="text-white font-bold text-lg">8 Street Burgers</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.contactUs}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#EBEB77]" />
                <span>Rruga Brigada e VIII, Tiranë 1111, Albania</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="flex-shrink-0 text-[#EBEB77]" />
                <a href="tel:+355698513997" className="hover:text-white transition-colors">
                  +355 69 851 3997
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.hoursAndSocial}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.footer.openDailyUntil}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/8streetburgerstirana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#EBEB77] transition-colors group"
              >
                <Instagram size={20} className="text-white group-hover:text-black" />
              </a>
              <a
                href="https://www.tiktok.com/@8streetburgerstirana?_r=1&_t=ZS-93GQAcRzryZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#EBEB77] transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white group-hover:fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}