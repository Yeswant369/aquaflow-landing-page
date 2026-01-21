import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bottleVariants from '@/assets/bottle-variants.jpg';

const products = [
  { size: '250 ml', label: 'Perfect for events', gridArea: 'sm' },
  { size: '500 ml', label: 'Everyday hydration', gridArea: 'md' },
  { size: '1 Litre', label: 'Family pack', gridArea: 'lg' },
];

export function ProductVariants() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Available in All Sizes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From compact bottles for on-the-go to family-sized packs, we have the perfect option for every need.
          </p>
        </motion.div>

        {/* Main Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={bottleVariants}
              alt="Vyvora water bottles in different sizes"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center">
                {/* Size Badge */}
                <div className="inline-block px-6 py-3 rounded-full bg-primary mb-6">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">
                    {product.size}
                  </span>
                </div>

                <p className="text-muted-foreground font-medium">
                  {product.label}
                </p>

                {/* Decorative water drop */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-3 h-4 bg-accent/40 rounded-full transform rotate-180" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Bulk orders available for events, offices, and retail.{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact us for pricing
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
