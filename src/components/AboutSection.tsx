import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import nycImage from '../photos/NYC.webp';
import anotherBurgerImage from '../photos/another burger.webp';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const highlights = [
    'Perfectly smashed, caramelized beef patties',
    'Fresh, soft buns baked daily',
    'Premium quality beef',
    'Signature homemade sauces',
    'Fast, friendly service and great vibe',
  ];

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At 8 Street Burgers, we're obsessed with one thing: creating the perfect smash burger. 
              Every patty is smashed to order on a scorching hot griddle, creating those crispy, 
              caramelized edges that burger lovers crave.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We source only the highest quality beef, pair it with fresh ingredients, and top it 
              with our signature homemade sauces. The result? A burger experience that's bold, 
              flavorful, and unforgettable.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#EBEB77] rounded-full flex items-center justify-center mt-1">
                    <Check size={16} className="text-black" />
                  </div>
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={nycImage}
              alt="NYC burger"
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
            <img
              src={anotherBurgerImage}
              alt="Premium burger"
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}