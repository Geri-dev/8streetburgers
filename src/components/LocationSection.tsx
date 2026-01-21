import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function LocationSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });
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
            {t.location.title}{" "}
            <span className="text-[#EBEB77]">{t.location.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.location.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-6"
          >
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#EBEB77]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#EBEB77]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {t.location.address}
                    </h3>
                    <p className="text-gray-400">{t.location.addressLine1}</p>
                    <p className="text-gray-400">{t.location.addressLine2}</p>
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
                    <h3 className="text-white font-bold text-lg mb-2">
                      {t.location.phone}
                    </h3>
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
                    <h3 className="text-white font-bold text-lg mb-2">
                      {t.location.hours}
                    </h3>
                    <p className="text-gray-400">{t.location.openDaily}</p>
                    <p className="text-gray-400">{t.location.closesAt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-6 mb-6 sm:mb-0">
              <Button
                onClick={() => window.open("tel:+355698513997")}
                size="lg"
                className="bg-[#EBEB77] hover:bg-[#E5E560] text-black font-bold flex-1 w-full sm:w-auto min-h-[48px] py-4 sm:py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                {t.location.callNow}
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Rruga+Brigada+e+VIII+Tirane",
                    "_blank",
                  )
                }
                size="lg"
                variant="outline"
                className="border-2 !border-white !bg-transparent hover:!bg-white !text-white hover:!text-black font-bold flex-1 w-full sm:w-auto min-h-[48px] py-4 sm:py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                {t.location.getDirections}
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.206041702792!2d19.81427336943174!3d41.321616995548936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031773c5e0ff5%3A0x2bd4f22ee00ac9f3!2s8%20Street%20Burgers%20Tirana!5e1!3m2!1sen!2s!4v1769038249625!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
              
            >
              
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
