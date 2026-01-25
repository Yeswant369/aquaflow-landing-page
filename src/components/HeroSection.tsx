import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ChevronDown } from 'lucide-react';
import bottleBranded from '@/assets/bottle-branded.png';
import waterSplash from '@/assets/water-splash-hero.jpg';
import logo from '@/assets/logo.jpeg';

// Water droplet component
const WaterDroplet = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-b from-white/80 to-accent/40"
    style={{
      width: size,
      height: size * 1.3,
      left: `${x}%`,
      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    }}
    initial={{ top: '-10%', opacity: 0, scale: 0 }}
    animate={{
      top: ['0%', '110%'],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: 'easeIn',
    }}
  />
);

// Floating bubble component
const FloatingBubble = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full border border-white/30 bg-white/5"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 6 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Particle component
const Particle = ({ delay, startX, startY }: { delay: number; startX: number; startY: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-white/60"
    style={{ left: `${startX}%`, top: `${startY}%` }}
    animate={{
      y: [-100, 100],
      x: [0, Math.random() * 50 - 25],
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const bottleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mouse parallax for bottle
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 30);
      mouseY.set((clientY - innerHeight / 2) / 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate droplets
  const droplets = Array.from({ length: 15 }, (_, i) => ({
    delay: i * 0.4,
    x: Math.random() * 100,
    size: 8 + Math.random() * 12,
  }));

  // Generate bubbles
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 60,
  }));

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    delay: i * 0.2,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
  }));

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Scale Animation */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <img
          src={waterSplash}
          alt="Water splash background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </motion.div>

      {/* Animated Water Droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {droplets.map((droplet, i) => (
          <WaterDroplet key={i} {...droplet} />
        ))}
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, i) => (
          <FloatingBubble key={i} {...bubble} />
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <Particle key={i} {...particle} />
        ))}
      </div>

      {/* Animated Ripple Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[600px] h-[600px] border rounded-full"
              style={{
                borderColor: `rgba(255, 255, 255, ${0.2 - i * 0.03})`,
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [0.8, 2.5],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 100%)',
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            animate={{
              d: [
                "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",
                "M0,80 C360,20 1080,100 1440,40 L1440,120 L0,120 Z",
                "M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container-width px-4 md:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
         

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Pure Water for{' '}
              </motion.span>
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
              >
                <span className="relative z-10">Every Day</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-accent/40 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Clean, safe, refreshing bottled water. RO + UV purified, BIS & FSSAI certified for your family's health and wellbeing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Button>
              </motion.a>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="heroOutline" size="xl">
                  View Products
                </Button>
              </motion.a>
            </motion.div>

            {/* Trust Badges with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              {['BIS', 'FSSAI', 'BPA'].map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.15, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <span className="text-xs font-bold">{badge}</span>
                  </motion.div>
                  <span className="text-sm">{badge === 'BPA' ? 'Free' : 'Certified'}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottle Image with Label - Enhanced 3D Effect */}
          <motion.div
            style={{
              y: bottleY,
              rotate: bottleRotate,
              scale: bottleScale,
              x: springX,
            }}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: 'spring', stiffness: 100 }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              {/* Multiple Glow Effects */}
              <motion.div
                className="absolute inset-0 bg-accent/40 blur-[80px] rounded-full scale-110"
                animate={{
                  scale: [1.1, 1.3, 1.1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-0 bg-primary-foreground/20 blur-[60px] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />

              {/* Bottle with 3D Transform */}
              <motion.div
                style={{ y: springY }}
                className="relative z-10"
              >
                <motion.img
                  src={bottleBranded}
                  alt="Vyvora Water Bottle"
                  className="relative z-10 w-full max-w-md drop-shadow-2xl"
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0,100,200,0.4))',
                  }}
                />

                {/* Rotating Light Reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  style={{
                    maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                  }}
                />

                {/* Sparkles around bottle */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Water droplets falling from bottle */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-3 bg-gradient-to-b from-accent/80 to-accent/20 rounded-full"
                  style={{
                    left: `${40 + i * 5}%`,
                    bottom: '10%',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  }}
                  animate={{
                    y: [0, 100],
                    opacity: [1, 0],
                    scale: [1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.4 + 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Bounce */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#why-us"
            className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
