import { Flame, Leaf, Zap, Award, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const iconMap = {
  Flame,
  Leaf,
  Zap,
  Award,
  DollarSign,
  Clock,
};

export default function WhySection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  
  const iconNames = ['Flame', 'Leaf', 'Zap', 'Award', 'DollarSign', 'Clock'] as const;

  return (
    <section id="why" className="py-20 bg-[#0A0A0A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.why.title} <span className="text-[#EBEB77]">{t.why.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.why.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.why.features.map((feature, index) => {
            const Icon = iconMap[iconNames[index]];
            return (
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
                <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#EBEB77] transition-all duration-300 hover:shadow-lg hover:shadow-[#EBEB77]/20 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#EBEB77]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[#EBEB77]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}