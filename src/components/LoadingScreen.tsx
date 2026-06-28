import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="relative">
        {/* Loading animation */}
        <div className="flex flex-col items-center">
          {/* Animated logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Tattoo needle animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                {/* Needle */}
                <rect x="28" y="0" width="4" height="50" rx="2" fill="url(#needleGradient)" />
                <rect x="26" y="45" width="8" height="15" rx="2" fill="url(#gripGradient)" />

                {/* Grip rings */}
                <rect x="24" y="50" width="12" height="2" rx="1" fill="#4a4a4a" />
                <rect x="24" y="55" width="12" height="2" rx="1" fill="#4a4a4a" />

                {/* Ink droplet */}
                <motion.ellipse
                  cx="30"
                  cy="75"
                  rx="4"
                  ry="6"
                  fill="#8b0000"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>

              <defs>
                <linearGradient id="needleGradient" x1="30" y1="0" x2="30" y2="50">
                  <stop stopColor="#c0c0c0" />
                  <stop offset="1" stopColor="#606060" />
                </linearGradient>
                <linearGradient id="gripGradient" x1="30" y1="45" x2="30" y2="60">
                  <stop stopColor="#2a2a2a" />
                  <stop offset="1" stopColor="#1a1a1a" />
                </linearGradient>
              </defs>
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <h1 className="font-display text-2xl tracking-widest text-gradient">
              HARRY INKMAN
            </h1>
            <p className="text-white/40 text-xs tracking-[0.3em] mt-2">ELITE TATTOO ARTIST</p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 w-48"
          >
            <div className="h-px bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blood-red to-transparent"
              />
            </div>
            <p className="text-white/30 text-xs tracking-widest uppercase mt-3 text-center">
              Loading...
            </p>
          </motion.div>
        </div>

        {/* Ink splash effect in background */}
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blood-red/20 blur-2xl"
        />
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8">
        <div className="h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
        <div className="w-16 h-px bg-gradient-to-r from-white/20 to-transparent mt-1" />
      </div>

      <div className="absolute bottom-8 right-8">
        <div className="h-16 w-px bg-gradient-to-t from-white/20 to-transparent" />
        <div className="w-16 h-px bg-gradient-to-l from-white/20 to-transparent mb-1" />
      </div>
    </motion.div>
  );
}
