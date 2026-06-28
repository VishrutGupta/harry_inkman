import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroScene from './components/HeroScene';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import LoadingScreen from './components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && mainRef.current) {
      const sections = mainRef.current.querySelectorAll('.reveal-section');

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0 h-screen">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 4], fov: 50 }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />
      </div>

      <NoiseOverlay />

      <main ref={mainRef} className="relative z-10">
        <Hero />
        <div className="relative bg-black">
          <About />
          <WhyChoose />
          <Pricing />
          <Reviews />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
