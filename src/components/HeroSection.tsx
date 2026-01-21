import { Button } from '@/components/ui/button';
import { MapPin, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import mainBurgerImage from '../photos/main-burger.webp';

export default function HeroSection() {
  const [starAnimationComplete, setStarAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarAnimationComplete(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Generate positions for small stars
  const starPositions = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 200,
    delay: i * 0.1,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainBurgerImage}
          alt="Delicious Smash Burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-white">The Best </span>
          <span className="text-[#EBEB77]">Smash Burger</span>
          <br />
          <span className="text-white">in Tirana</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Perfectly smashed, caramelized beef patties with premium ingredients.
          <br />
          Bold street-food flavor that hits different.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => window.open('https://wolt.com/en/alb/tirana/restaurant/eight-street-burgers', '_blank')}
            size="lg"
            className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
          >
            <ShoppingBag className="mr-2" size={24} />
            Order on Wolt
          </Button>
          <Button
            onClick={() => window.open('https://maps.google.com/?q=Rruga+Brigada+e+VIII+Tirane', '_blank')}
            size="lg"
            variant="outline"
            className="border-2 !border-white !bg-transparent hover:!bg-white !text-white hover:!text-black font-bold text-lg px-8 py-6 w-full sm:w-auto transition-all"
          >
            <MapPin className="mr-2" size={24} />
            Get Directions
          </Button>
        </motion.div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-gray-300 py-3 sm:py-0">
          <div className="flex items-center space-x-2 px-2 sm:px-0 relative">
            {/* Small stars that animate toward main star */}
            {starPositions.map((star) => (
              <motion.span
                key={star.id}
                className="absolute text-lg"
                initial={{
                  x: star.x,
                  y: star.y,
                  opacity: 0.6,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{
                  duration: 1.2,
                  delay: star.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                ⭐
              </motion.span>
            ))}
            {/* Main star */}
            <motion.span
              className="text-2xl relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: starAnimationComplete ? [1.2, 1] : 1,
                opacity: 1,
              }}
              transition={{
                scale: {
                  duration: 0.3,
                  delay: 1.1,
                  ease: 'easeOut',
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.8,
                },
              }}
            >
              ⭐
            </motion.span>
            <span className="font-semibold text-sm sm:text-base">4.8/5 Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center space-x-2 px-2 sm:px-0">
            <span className="text-2xl">🍔</span>
            <span className="font-semibold text-sm sm:text-base">Premium Smash Burgers</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center space-x-2 px-2 sm:px-0">
            <span className="text-2xl">💰</span>
            <span className="font-semibold text-sm sm:text-base">ALL 500-1,000</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}