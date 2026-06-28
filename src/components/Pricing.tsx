import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Award } from 'lucide-react';

const pricingTiers = [
  {
    title: 'Small Tattoos',
    size: '2-4 inches',
    price: 'From $150',
    features: ['Custom design', '1-2 hour session', 'Touch-up included'],
    popular: false,
  },
  {
    title: 'Medium Tattoos',
    size: '4-8 inches',
    price: 'From $350',
    features: ['Custom design', '2-4 hour session', 'Touch-up included', 'Detailed shading'],
    popular: true,
  },
  {
    title: 'Large Tattoos',
    size: '8+ inches',
    price: 'From $600',
    features: ['Custom design', 'Multiple sessions', 'Touch-up included', 'Complex detail work'],
    popular: false,
  },
  {
    title: 'Custom Projects',
    size: 'Full sleeve / Back piece',
    price: 'Consultation',
    features: ['Multiple sessions over weeks/months', 'Full custom design process', 'Priority scheduling', 'Extended consultation'],
    popular: false,
  },
];

function PricingCard({ tier, index }: { tier: typeof pricingTiers[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="relative group"
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-blood-red px-4 py-1.5 rounded-full text-xs tracking-widest font-medium flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span>MOST CHOSEN</span>
          </div>
        </div>
      )}

      <div
        className={`
          relative h-full rounded-xl p-8 lg:p-10 card-hover overflow-hidden
          ${tier.popular
            ? 'glass-chrome border-blood-red/20'
            : 'glass-dark'
          }
        `}
      >
        {/* Gradient overlay for popular */}
        {tier.popular && (
          <div className="absolute inset-0 bg-gradient-to-b from-blood-red/10 via-transparent to-transparent opacity-50" />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-2">
            {tier.title}
          </h3>

          {/* Size */}
          <p className="text-white/50 text-sm tracking-wide mb-6">
            {tier.size}
          </p>

          {/* Price */}
          <div className="mb-8">
            <span className="font-display text-3xl lg:text-4xl font-bold text-gradient">
              {tier.price}
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className={`
                  mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                  ${tier.popular
                    ? 'bg-blood-red/20 border border-blood-red/40'
                    : 'bg-white/5 border border-white/10'
                  }
                `}>
                  <Check className={`w-2.5 h-2.5 ${tier.popular ? 'text-blood-red' : 'text-white/60'}`} />
                </div>
                <span className="text-white/70 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/14376608209"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full py-3.5 rounded-lg text-center text-sm tracking-widest uppercase font-medium
              transition-all duration-500
              ${tier.popular
                ? 'bg-gradient-to-r from-blood-red to-blood-red-light text-white hover:shadow-[0_10px_40px_rgba(139,0,0,0.3)]'
                : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
              }
            `}
          >
            Get Quote
          </a>
        </div>

        {/* Corner accent */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10">
          <div className={`
            absolute inset-0 rounded-full blur-2xl
            ${tier.popular ? 'bg-blood-red' : 'bg-white'}
          `} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-charcoal/10 to-pure-black" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-blood-red/5 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-radial from-white/5 to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-xs tracking-[0.3em] text-blood-red uppercase">Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6"
          >
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-4"
          >
            Every tattoo is quoted individually after consultation to ensure the price reflects the complexity and time required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-blood-red/80 text-sm"
          >
            <Award className="w-4 h-4" />
            <span>Premium Quality Guarantee</span>
          </motion.div>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.title} tier={tier} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-dark inline-block px-8 py-4 rounded-full">
            <p className="text-white/50 text-sm">
              <span className="text-white/80">Deposits required</span> for booking. All prices include aftercare guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
