import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function LocationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="location" className="py-20 bg-[#0A0A0A]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visit <span className="text-[#EBEB77]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Come experience the best smash burger in Tirana. We're waiting for you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#EBEB77]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#EBEB77]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Address</h3>
                    <p className="text-gray-400">Rruga Brigada e VIII</p>
                    <p className="text-gray-400">Tiranë 1111, Albania</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#EBEB77]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#EBEB77]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:+355698513997"
                      className="text-gray-400 hover:text-[#EBEB77] transition-colors"
                    >
                      +355 69 851 3997
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#EBEB77]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#EBEB77]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Hours</h3>
                    <p className="text-gray-400">Open Daily</p>
                    <p className="text-gray-400">Closes at 1:00 AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-6 mb-6 sm:mb-0">
              <Button
                onClick={() => window.open('tel:+355698513997')}
                size="lg"
                className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold flex-1 w-full sm:w-auto min-h-[48px] py-4 sm:py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
              <Button
                onClick={() =>
                  window.open('https://maps.google.com/?q=Rruga+Brigada+e+VIII+Tirane', '_blank')
                }
                size="lg"
                variant="outline"
                className="border-2 !border-white !bg-transparent hover:!bg-white !text-white hover:!text-black font-bold flex-1 w-full sm:w-auto min-h-[48px] py-4 sm:py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6744!2d19.8186!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM5LjAiTiAxOcKwNDknMDcuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="8 Street Burgers Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}