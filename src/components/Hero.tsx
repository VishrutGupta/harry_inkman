import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const title = titleRef.current;
      const text = title.textContent || '';
      title.textContent = '';

      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px)';
        title.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3 + i * 0.015,
          ease: 'power3.out',
        });
      });

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-xs tracking-[0.3em] uppercase font-light text-gray-300">
              Mississauga, Ontario
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </motion.div>

        {/* Main title - all on one line */}
        <h1
          ref={titleRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 text-white whitespace-nowrap"
        >
          ART THAT STAYS. CRAFT THAT LASTS.
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Custom tattoos designed with precision, individuality, and years of
          experience—crafted for clients who value exceptional artistry.
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://wa.me/14376608209"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b0000] to-[#a00000] text-white font-medium tracking-widest uppercase text-sm rounded hover:shadow-[0_20px_40px_rgba(139,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="tel:+14376608209"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white font-medium tracking-widest uppercase text-sm rounded hover:bg-white/5 hover:border-white/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Side elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-xs tracking-[0.2em] text-gray-500 rotate-90 origin-center translate-y-12 whitespace-nowrap">
            ELITE TATTOO ARTIST
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent" />
        </motion.div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block z-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4 }}
          className="text-right"
        >
          <div className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Est. 2015
          </div>
        </motion.div>
      </div>
    </section>
  );
}
