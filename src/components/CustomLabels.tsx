import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Gift, Building2 } from 'lucide-react';
import weddingImg from '@/assets/custom-wedding.jpg';
import birthdayImg from '@/assets/custom-birthday.jpg';
import corporateImg from '@/assets/custom-corporate.jpg';

const customOptions = [
  {
    title: 'Weddings',
    description: 'Personalize with names and dates for your special day',
    icon: Heart,
    image: weddingImg,
    features: ['Couple names', 'Wedding date', 'Custom designs', 'Bulk quantities'],
  },
  {
    title: 'Birthdays',
    description: 'Celebrate with custom photo and name labels',
    icon: Gift,
    image: birthdayImg,
    features: ['Birthday photo', 'Name & age', 'Theme designs', 'Party packs'],
  },
  {
    title: 'Corporate Events',
    description: 'Brand your bottles with company logo and message',
    icon: Building2,
    image: corporateImg,
    features: ['Company logo', 'Brand colors', 'Event details', 'Professional finish'],
  },
];

export function CustomLabels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customOptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentIndex + 1) % customOptions.length);
  const prevSlide = () => goToSlide((currentIndex - 1 + customOptions.length) % customOptions.length);

  return (
    <section id="custom" className="section-padding hero-gradient text-primary-foreground overflow-hidden" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Custom Labels
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Personalized Bottles for Your Events
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Make your celebrations memorable with custom-labeled water bottles featuring your branding, photos, and messages.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {customOptions.map((option, index) => (
                <div key={option.title} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 bg-primary-foreground/10 backdrop-blur-sm rounded-3xl overflow-hidden">
                    {/* Image */}
                    <div className="relative h-64 md:h-96">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30 md:hidden" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:py-12 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                        <option.icon className="w-7 h-7 text-accent" />
                      </div>
                      
                      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                        {option.title}
                      </h3>
                      
                      <p className="text-primary-foreground/80 mb-6">
                        {option.description}
                      </p>

                      <ul className="space-y-2">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {customOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg"
          >
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
