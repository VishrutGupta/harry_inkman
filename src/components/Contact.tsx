import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-pure-black to-pure-black" />

        {/* Map preview (simulated) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
        </div>
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
            <span className="text-xs tracking-[0.3em] text-blood-red uppercase">Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6"
          >
            Book Your Session
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Ready to start your custom piece? Reach out via WhatsApp or phone to schedule your consultation.
          </motion.p>
        </div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/14376608209"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className="glass-chrome rounded-2xl p-10 h-full card-hover relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blood-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blood-red to-blood-red/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle className="w-9 h-9 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                    Book on WhatsApp
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6">
                    Message anytime for quick responses. Share your ideas and reference images directly.
                  </p>

                  {/* Phone number */}
                  <div className="text-blood-red font-mono text-lg tracking-wider">
                    +1 437-660-8209
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-10 right-10 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <ChevronRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+14376608209"
              className="group relative overflow-hidden"
            >
              <div className="glass-dark rounded-2xl p-10 h-full card-hover relative border border-white/10">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gunmetal to-graphite flex items-center justify-center mb-6 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                    <Phone className="w-9 h-9 text-white/80" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                    Call Now
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6">
                    Prefer to talk? Give us a call during studio hours for immediate assistance.
                  </p>

                  {/* Phone number */}
                  <div className="text-white/80 font-mono text-lg tracking-wider">
                    +1 437-660-8209
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-10 right-10 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <ChevronRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Location */}
            <div className="glass-dark rounded-xl p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-blood-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-white/60 text-sm">Mississauga, Ontario</p>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-dark rounded-xl p-6 flex items-start gap-4">
              <Clock className="w-5 h-5 text-blood-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium mb-1">Studio Hours</h4>
                <p className="text-white/60 text-sm">By Appointment Only</p>
              </div>
            </div>

            {/* Response time */}
            <div className="glass-dark rounded-xl p-6 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
              <MessageCircle className="w-5 h-5 text-blood-red mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium mb-1">Response Time</h4>
                <p className="text-white/60 text-sm">Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-gunmetal">
            {/* Map background */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Center pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-10 h-10 rounded-full bg-blood-red flex items-center justify-center shadow-[0_0_30px_rgba(139,0,0,0.5)]">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="w-20 h-px bg-blood-red/50 mx-auto mt-1" />
                <div className="w-10 h-px bg-blood-red/30 mx-auto mt-1" />
              </motion.div>
            </div>

            {/* Location label */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-display text-lg">Mississauga</div>
                  <div className="text-white/50 text-sm">Ontario, Canada</div>
                </div>
                <a
                  href="https://maps.google.com/?q=Mississauga,Ontario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blood-red text-sm hover:text-blood-red-light transition-colors flex items-center gap-2"
                >
                  View on Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 lg:mt-20 pt-8 border-t border-white/10"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <div className="font-display text-xl text-white mb-1">Harry Inkman</div>
              <div className="text-white/40 text-sm">Elite Tattoo Artist</div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Harry Inkman. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ExternalLink({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
