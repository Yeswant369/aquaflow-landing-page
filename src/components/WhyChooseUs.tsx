import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Shield, Leaf, Package } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'RO + UV Purified',
    description: 'Multi-stage purification with Reverse Osmosis and UV sterilization for 100% pure water.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Shield,
    title: 'BIS & FSSAI Certified',
    description: 'Meets all government quality standards. Tested and approved for safe consumption.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Leaf,
    title: 'BPA-Free Bottles',
    description: 'Food-grade PET bottles that are safe, recyclable, and environmentally conscious.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: Package,
    title: 'Hygienic Packaging',
    description: 'Sealed in a controlled environment with tamper-proof caps for freshness guarantee.',
    color: 'from-cyan-400 to-cyan-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-accent font-semibold text-sm uppercase tracking-wider inline-block"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            Why Choose Vyvora
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Quality You Can{' '}
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              Trust
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            We deliver pure, safe drinking water through rigorous purification processes and certified quality standards.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className="group relative"
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card card-gradient border border-border hover:border-primary/30 transition-all duration-300 h-full overflow-hidden"
                whileHover={{
                  boxShadow: '0 20px 40px -12px rgba(0, 100, 200, 0.25)',
                }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon with animation */}
                <motion.div
                  className="relative w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 overflow-hidden"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent/30 blur-xl opacity-0 group-hover:opacity-100"
                    animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <feature.icon className="relative z-10 w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>

                <motion.h3
                  className="relative font-heading text-xl font-bold text-foreground mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.title}
                </motion.h3>

                <p className="relative text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner with animation */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
