import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Shield, Leaf, Package } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'RO + UV Purified',
    description: 'Multi-stage purification with Reverse Osmosis and UV sterilization for 100% pure water.',
  },
  {
    icon: Shield,
    title: 'BIS & FSSAI Certified',
    description: 'Meets all government quality standards. Tested and approved for safe consumption.',
  },
  {
    icon: Leaf,
    title: 'BPA-Free Bottles',
    description: 'Food-grade PET bottles that are safe, recyclable, and environmentally conscious.',
  },
  {
    icon: Package,
    title: 'Hygienic Packaging',
    description: 'Sealed in a controlled environment with tamper-proof caps for freshness guarantee.',
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="section-padding bg-background" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Vyvora
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver pure, safe drinking water through rigorous purification processes and certified quality standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card card-gradient border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
