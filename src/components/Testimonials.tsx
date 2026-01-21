import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Hotel Manager',
    content: 'We switched to Vyvora for our hotel and guests love the quality. The custom labeling service for conferences has been a game-changer for our corporate clients.',
  },
  {
    name: 'Priya Sharma',
    role: 'Event Planner',
    content: 'Used Vyvora custom bottles for over 50 weddings now. The quality is consistent, delivery is always on time, and the personalized labels add such a special touch.',
  },
  {
    name: 'Anil Reddy',
    role: 'Office Administrator',
    content: 'Our company has been ordering Vyvora water for 2 years. Clean taste, reliable supply, and excellent customer service. Highly recommended for corporate needs.',
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hotels, event planners, and businesses across Vijayawada and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-heading font-bold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
