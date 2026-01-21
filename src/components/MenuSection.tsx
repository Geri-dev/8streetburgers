import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import mainBurgerImage from '../photos/main-burger.webp';
import smashingImage from '../photos/smashing.webp';
import menuSmashImage from '../photos/menu smash.webp';

export default function MenuSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  
  const menuItems = t.menu.items.map((item, index) => ({
    ...item,
    image: [mainBurgerImage, smashingImage, menuSmashImage][index],
  }));

  return (
    <section id="menu" className="py-20 bg-[#0A0A0A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.menu.title} <span className="text-[#EBEB77]">{t.menu.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden hover:border-[#EBEB77] transition-all duration-300 hover:shadow-lg hover:shadow-[#EBEB77]/20 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-[#EBEB77] font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <Button
            onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
            size="lg"
            className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold text-lg px-8"
          >
            {t.menu.orderFullMenu}
          </Button>
          <p className="text-gray-500 text-sm mt-4">{t.menu.dineInTakeout}</p>
        </motion.div>
      </div>
    </section>
  );
}