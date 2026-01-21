import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            
            <span className="text-[#EBEB77] font-bold text-xl">8 Street Burgers</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              {t.nav.whyUs}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              {t.nav.reviews}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              {t.nav.location}
            </button>
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-[#1A1A1A] rounded-lg px-2 py-1 border border-[#2A2A2A]">
              <button
                onClick={() => setLanguage('sq')}
                className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                  language === 'sq'
                    ? 'bg-[#EBEB77] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SQ
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-[#EBEB77] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <Button
              onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
              className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold"
            >
              {t.nav.orderNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              {t.nav.whyUs}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              {t.nav.menu}
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              {t.nav.reviews}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              {t.nav.location}
            </button>
            {/* Language Switcher - Mobile */}
            <div className="flex items-center justify-center space-x-1 bg-[#1A1A1A] rounded-lg px-2 py-1 border border-[#2A2A2A] w-full">
              <button
                onClick={() => setLanguage('sq')}
                className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                  language === 'sq'
                    ? 'bg-[#EBEB77] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SQ
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-[#EBEB77] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            <Button
              onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
              className="w-full bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold"
            >
              {t.nav.orderNow}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}