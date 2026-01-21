import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhySection from '@/components/WhySection';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <MenuSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}