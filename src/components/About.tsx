import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: '2015', event: 'Began tattooing professionally in Toronto' },
  { year: '2018', event: 'Opened private studio in Mississauga' },
  { year: '2020', event: 'Featured in international tattoo conventions' },
  { year: '2023', event: 'Recognized for excellence in custom design' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Parallax on image
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        {/* Leather texture pattern simulated with CSS */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 2%),
                             radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 1.5%)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Decorative line art */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,90 Q25,85 50,90 T100,85"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          fill="none"
          stroke="white"
          strokeWidth="0.1"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Frame */}
              <div className="absolute inset-0 border border-white/10 z-20" />

              {/* Image placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gunmetal via-graphite to-charcoal">
                {/* Simulated portrait area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-titanium/30 to-gunmetal/50 mx-auto mb-6" />
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto" />
                  </div>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Name plate */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="glass-dark px-6 py-4">
                  <h3 className="font-display text-2xl text-white mb-1">Harry Inkman</h3>
                  <p className="text-silver/70 text-sm tracking-widest uppercase">Tattoo Artist</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-blood-red/30 opacity-50" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-white/5 opacity-30" />
          </motion.div>

          {/* Content side */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="text-xs tracking-[0.3em] text-blood-red uppercase">About the Artist</span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-gradient leading-tight"
            >
              Precision Meets
              <br />
              <span className="text-white/90">Artistry</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-white/70 text-lg leading-relaxed mb-12"
            >
              <p>
                With over a decade of experience transforming skin into canvas, Harry Inkman has established himself as one of Mississauga's premier tattoo artists. His work speaks in the language of precision—every line deliberate, every shade purposeful.
              </p>
              <p>
                Specializing in custom designs that reflect each client's unique story, Harry approaches every piece as a collaboration. From intricate geometric patterns to flowing organic forms, his portfolio showcases a versatility born of mastery, not trend-following.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-4">Journey</h3>
              <div className="relative pl-8 border-l border-white/10">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                    className="relative mb-6 last:mb-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-[-8px] top-2 w-2 h-2 rounded-full bg-blood-red/60" />

                    {/* Year */}
                    <span className="text-xs text-blood-red/80 tracking-widest">{item.year}</span>

                    {/* Event */}
                    <p className="text-white/80 mt-1">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '10+', label: 'Years' },
                { value: '2000+', label: 'Tattoos' },
                { value: '100%', label: 'Custom' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl sm:text-4xl text-gradient-chrome font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest text-white/50 mt-2 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
