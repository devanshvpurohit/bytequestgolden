import { motion } from 'framer-motion';

interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = 'Loading...' }: LoadingScreenProps) {
  return (
    <div className="w-full h-screen bg-hackathon-bg flex flex-col items-center justify-center font-pixel text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Animated logo/icon */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-24 h-24 border-4 border-hackathon-primary border-t-transparent rounded-full"
        />

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-sm md:text-base text-hackathon-primary uppercase tracking-widest"
        >
          {message}
        </motion.p>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
              className="w-3 h-3 bg-hackathon-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
