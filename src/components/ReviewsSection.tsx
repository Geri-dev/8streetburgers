import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function ReviewsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  
  // Reviews remain in English as they are from actual customer reviews
  const reviews = [
    {
      name: 'Ardit K.',
      rating: 5,
      text: 'One of the best burgers in the city. The smash technique creates the perfect crispy edges. Highly recommend!',
      date: 'December 2025',
    },
    {
      name: 'Elena M.',
      rating: 5,
      text: "Legit smash burger – don't look elsewhere. Fresh ingredients, great sauces, and the vibe is amazing.",
      date: 'January 2026',
    },
    {
      name: 'Marco T.',
      rating: 5,
      text: 'Great quality for a fair price. The combo meal is unbeatable value. Will definitely come back!',
      date: 'January 2026',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.reviews.title} <span className="text-[#EBEB77]">{t.reviews.titleHighlight}</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#EBEB77] text-[#EBEB77]" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.8 / 5</span>
          </div>
          <p className="text-gray-400 text-lg">{t.reviews.subtitle}</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#EBEB77] transition-all duration-300 hover:shadow-lg hover:shadow-[#EBEB77]/20">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#EBEB77] text-[#EBEB77]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-4 italic">"{review.text}"</p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{review.name}</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/search/8+Street+Burgers+Tirana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EBEB77] hover:text-[#E5E560] font-semibold text-lg transition-colors"
          >
            {t.reviews.readAllReviews}
          </a>
        </motion.div>
      </div>
    </section>
  );
}