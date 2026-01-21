import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import bottleVariants from '@/assets/bottle-variants.jpg';

const products = [
  { size: '250 ml', label: 'Perfect for events', delay: 0 },
  { size: '500 ml', label: 'Everyday hydration', delay: 0.1 },
  { size: '1 Litre', label: 'Family pack', delay: 0.2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProductVariants() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="products" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-accent font-semibold text-sm uppercase tracking-wider inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Products
          </motion.span>
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Available in{' '}
            <motion.span
              className="text-gradient inline-block"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              All Sizes
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            From compact bottles for on-the-go to family-sized packs, we have the perfect option for every need.
          </motion.p>
        </motion.div>

        {/* Main Product Image with Parallax */}
        <motion.div
          style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ perspective: 1000 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 40px 80px -20px rgba(0, 100, 200, 0.3)',
            }}
          >
            <img
              src={bottleVariants}
              alt="Vyvora water bottles in different sizes"
              className="w-full h-auto"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          style={{ perspective: 1000 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.size}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 400 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 text-center overflow-hidden"
                whileHover={{
                  boxShadow: '0 25px 50px -12px rgba(0, 100, 200, 0.25)',
                  borderColor: 'rgba(0, 150, 255, 0.3)',
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Size Badge with pulse */}
                <motion.div
                  className="relative inline-block px-6 py-3 rounded-full bg-primary mb-6 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative font-heading text-2xl font-bold text-primary-foreground">
                    {product.size}
                  </span>
                </motion.div>

                <motion.p
                  className="relative text-muted-foreground font-medium"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {product.label}
                </motion.p>

                {/* Decorative water drop */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-12 rounded-full bg-accent/10 flex items-center justify-center"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div 
                    className="w-4 h-5 bg-accent/30 transform rotate-180" 
                    style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} 
                  />
                </motion.div>

                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-muted-foreground"
            whileHover={{ scale: 1.02 }}
          >
            Bulk orders available for events, offices, and retail.{' '}
            <motion.a
              href="#contact"
              className="text-primary font-semibold hover:underline inline-block"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Contact us for pricing →
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
