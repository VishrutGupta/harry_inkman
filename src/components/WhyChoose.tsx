import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Target, Settings, Shield, Eye, Users } from 'lucide-react';

const reasons = [
  {
    icon: Palette,
    title: 'Unique Designs',
    description: 'Every tattoo is custom-designed, never templated. Your vision becomes exclusive art.',
  },
  {
    icon: Target,
    title: 'Precision Work',
    description: 'Master-level technique ensures clean lines, smooth gradients, and lasting quality.',
  },
  {
    icon: Settings,
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and finest inks imported from elite suppliers worldwide.',
  },
  {
    icon: Shield,
    title: 'Sterile Studio',
    description: 'Hospital-grade sterilization. Single-use needles. Your safety is non-negotiable.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'From first consultation to final touch, every moment receives meticulous care.',
  },
  {
    icon: Users,
    title: 'Personal Consultation',
    description: 'Extended design sessions ensure your piece perfectly captures your vision.',
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative"
    >
      <div className="glass-chrome rounded-lg p-8 h-full card-hover relative overflow-hidden">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blood-red/20 via-transparent to-blood-red/20 blur-sm" />
        </div>

        {/* Icon container */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gunmetal to-graphite flex items-center justify-center group-hover:from-blood-red/20 group-hover:to-blood-red/5 transition-colors duration-500">
            <reason.icon className="w-7 h-7 text-white/80 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Icon glow effect */}
          <div className="absolute inset-0 w-16 h-16 rounded-lg bg-blood-red/0 group-hover:bg-blood-red/20 blur-xl transition-all duration-500" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 leading-relaxed text-sm">
          {reason.description}
        </p>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-white/30 to-transparent" />
          <div className="absolute bottom-4 right-4 w-px h-8 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={false}
          whileHover={{
            background: [
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
            ],
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-gradient-to-b from-pure-black via-charcoal/20 to-pure-black">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blood-red/5 via-transparent to-transparent opacity-50" />
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
            <span className="text-xs tracking-[0.3em] text-blood-red uppercase">Why Harry</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6"
          >
            Excellence in Every
            <br />
            <span className="text-white/90">Detail</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Clients travel from across the GTA and beyond for Harry's unmatched commitment to quality. Here's what sets the experience apart.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
