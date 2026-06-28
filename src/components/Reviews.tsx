import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jordan M.',
    location: 'Toronto, ON',
    rating: 5,
    text: "Harry transformed my vision into something beyond what I imagined. The attention to detail is unmatched—every line is perfect. I've had work done elsewhere, and nothing compares to this level of craftsmanship.",
    service: 'Full Sleeve',
  },
  {
    name: 'Sarah K.',
    location: 'Mississauga, ON',
    rating: 5,
    text: 'The consultation process alone showed me how serious Harry is about his art. He spent hours refining the design until it was exactly what I wanted. The final piece exceeded all expectations.',
    service: 'Japanese Back Piece',
  },
  {
    name: 'Marcus D.',
    location: 'Oakville, ON',
    rating: 5,
    text: "Walked in with a rough sketch, left with a masterpiece. Harry's understanding of flow and composition elevated my simple idea into something truly special. Worth every penny and then some.",
    service: 'Geometric Arm',
  },
  {
    name: 'Elena R.',
    location: 'Brampton, ON',
    rating: 5,
    text: "Third tattoo with Harry, and each one has been flawless. His studio is immaculate, his technique is precise, and his artistry is world-class. Wouldn't trust anyone else with my skin.",
    service: 'Custom Chest Piece',
  },
  {
    name: 'Thomas L.',
    location: 'Hamilton, ON',
    rating: 5,
    text: "Drove an hour each way, and I'd do it again in a heartbeat. Harry doesn't just tattoo—he creates art that you'll carry forever. The consultation, the design process, the execution: all impeccable.",
    service: 'Traditional Half Sleeve',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-blood-red fill-blood-red' : 'text-white/20'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, isActive }: { review: typeof reviews[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        relative rounded-2xl p-8 lg:p-10 w-full
        ${isActive ? 'glass-chrome' : 'glass-dark'}
        transition-all duration-500
      `}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-white" />
      </div>

      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <blockquote className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">
        "{review.text}"
      </blockquote>

      {/* Reviewer info */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-display text-lg font-semibold">
            {review.name}
          </div>
          <div className="text-white/50 text-sm">
            {review.location}
          </div>
        </div>
        <div className="text-right">
          <div className="text-blood-red/80 text-xs tracking-widest uppercase">
            {review.service}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background - blurred studio lights effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bokeh lights */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blood-red/20 blur-[100px] opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-white/10 blur-[80px] opacity-20" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-white/5 blur-[60px] opacity-40" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pure-black via-charcoal/10 to-pure-black" />
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
            <span className="text-xs tracking-[0.3em] text-blood-red uppercase">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6"
          >
            Client Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Real experiences from clients who trusted Harry with their vision
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main review */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <ReviewCard
                key={activeIndex}
                review={reviews[activeIndex]}
                isActive={true}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <button
                onClick={goToPrev}
                className="pointer-events-auto w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>
              <button
                onClick={goToNext}
                className="pointer-events-auto w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === activeIndex
                    ? 'w-8 bg-blood-red'
                    : 'bg-white/30 hover:bg-white/50'
                  }
                `}
              />
            ))}
          </div>

          {/* Google attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-white/40 text-sm">
              Reviews from verified clients
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
