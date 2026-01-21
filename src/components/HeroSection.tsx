import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ChevronDown } from 'lucide-react';
import bottleHero from '@/assets/bottle-hero.png';
import waterSplash from '@/assets/water-splash-hero.jpg';
import logo from '@/assets/logo.jpeg';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={waterSplash}
          alt="Water splash background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Animated Ripple Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-primary-foreground/20 rounded-full ripple-animation" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-primary-foreground/15 rounded-full ripple-animation" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full ripple-animation" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 container-width px-4 md:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            style={{ y: textY, opacity }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <img src={logo} alt="Vyvora" className="w-16 h-16 rounded-full" />
              <div>
                <span className="font-heading text-3xl font-bold text-primary-foreground">
                  Vyvora
                </span>
                <p className="text-primary-foreground/80 text-sm">
                  A Drop of Freshness
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Pure Water for{' '}
              <span className="relative">
                Every Day
                <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/40 -z-10" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Clean, safe, refreshing bottled water. RO + UV purified, BIS & FSSAI certified for your family's health and wellbeing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Button>
              </a>
              <a href="#products">
                <Button variant="heroOutline" size="xl">
                  View Products
                </Button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold">BIS</span>
                </div>
                <span className="text-sm">Certified</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold">FSSAI</span>
                </div>
                <span className="text-sm">Approved</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-bold">BPA</span>
                </div>
                <span className="text-sm">Free</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottle Image */}
          <motion.div
            style={{ y: bottleY, rotate: bottleRotate }}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-75" />
              
              <img
                src={bottleHero}
                alt="Vyvora Water Bottle"
                className="relative z-10 w-full max-w-md drop-shadow-2xl float-animation"
              />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer rounded-3xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#why-us" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
