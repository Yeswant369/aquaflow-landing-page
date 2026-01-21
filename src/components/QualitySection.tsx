import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';
import waterPour from '@/assets/water-pour.jpg';

const qualityPoints = [
  'Multi-stage filtration process',
  'Laboratory tested for purity',
  'Sealed in sterile environment',
  'Tamper-evident packaging',
  'Consistent taste and quality',
  'On-time delivery guaranteed',
];

export function QualitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const textX = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="quality" className="section-padding bg-background overflow-hidden relative" ref={ref}>
      {/* Floating sparkles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-3 h-3 text-accent/30" />
          </motion.div>
        ))}
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Parallax */}
          <motion.div
            style={{ y: imageY, rotate: imageRotate }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 40px 80px -20px rgba(0, 100, 200, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={waterPour}
                alt="Pure water being poured"
                className="w-full h-auto"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
              />
              
              {/* Water ripple effect overlay */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,150,255,0.1) 100%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Floating Badge with bounce */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
            >
              <motion.div
                className="text-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.span
                  className="font-heading text-4xl font-bold text-primary block"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  100%
                </motion.span>
                <p className="text-sm text-muted-foreground mt-1">Pure & Safe</p>
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ x: textX }}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              className="text-accent font-semibold text-sm uppercase tracking-wider inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Quality Assurance
            </motion.span>
            <motion.h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Committed to{' '}
              <motion.span
                className="text-gradient inline-block"
                initial={{ rotateX: -90, opacity: 0 }}
                animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                Excellence
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              At Vyvora, we maintain the highest standards in water purification and packaging. Every bottle is a promise of purity, safety, and freshness.
            </motion.p>

            {/* Quality Points with stagger */}
            <div className="grid sm:grid-cols-2 gap-4">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <motion.div
                    className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </motion.div>
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
