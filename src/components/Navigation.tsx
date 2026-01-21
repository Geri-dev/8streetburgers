import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
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
              About
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-white hover:text-[#EBEB77] transition-colors font-semibold"
            >
              Location
            </button>
            <Button
              onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
              className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold"
            >
              Order Now
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
              About
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left text-white hover:text-[#EBEB77] transition-colors font-semibold py-2"
            >
              Location
            </button>
            <Button
              onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
              className="w-full bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}