import { useRef, useState, useEffect } from 'react';
import { PhaserGame } from './game/PhaserGame';
import type { IRefPhaserGame } from './game/PhaserGame';
import { OverlayModals } from './components/OverlayModals';
import { EventBus } from './game/EventBus';
import { Website } from './pages/Website';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const onActiveScene = (scene: Phaser.Scene) => {
    console.log('Scene started:', scene.scene.key);
  }

  useEffect(() => {
    const handleShowWebsite = () => {
      setShowWebsite(true);
      setIsGameRunning(false);
    };

    const handleShowGame = () => {
      setShowWebsite(false);
      setIsGameRunning(true);
    };

    EventBus.on('show-website', handleShowWebsite);
    EventBus.on('show-game', handleShowGame);

    // Detect touch device (more reliable than screen width for mobile landscape)
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    // Handle orientation change bug in mobile browsers where dvh takes a moment to update
    const handleResize = () => {
      setTimeout(() => {
        if (phaserRef.current?.game) {
           phaserRef.current.game.scale.resize(window.innerWidth, window.innerHeight);
        }
      }, 100);
      setTimeout(() => {
        if (phaserRef.current?.game) {
           phaserRef.current.game.scale.resize(window.innerWidth, window.innerHeight);
        }
      }, 500); // secondary fallback
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      EventBus.removeListener('show-website', handleShowWebsite);
      EventBus.removeListener('show-game', handleShowGame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Generate random stars for the background
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="w-full h-dvh bg-hackathon-bg flex items-center justify-center font-pixel relative overflow-hidden">
      <AnimatePresence mode="wait">
        {showWebsite ? (
          <Website />
        ) : !isGameRunning ? (
          <motion.div
            key="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center z-10 w-full h-full text-center relative scanlines crt-flicker"
          >
            {/* Stars */}
            {stars.map(star => (
              <div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
                  opacity: 0.3
                }}
              />
            ))}

            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Title */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
                className="flex flex-col items-center"
              >
                <div className="text-[10px] md:text-xs text-hackathon-secondary tracking-[0.5em] mb-4">
                  WELCOME TO
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-hackathon-primary glow-text leading-tight uppercase">
                  Byte<br />Quest
                </h1>
                <div className="gradient-underline w-48 md:w-64 mt-4 rounded-full" />
              </motion.div>

              {/* Subtitle Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: -2 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="relative"
              >
                <div className="pixel-border bg-hackathon-surface px-6 py-3 text-lg md:text-xl text-hackathon-accent glow-purple uppercase tracking-widest">
                  Dungeon of Binary
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] px-2 py-1 border-2 border-black">
                  NEW!
                </div>
              </motion.div>

              {/* Pixel character preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="float-anim my-4"
              >
                <div className="text-4xl">🎮</div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-[10px] md:text-xs text-gray-400 max-w-2xl leading-relaxed px-4"
              >
                Navigate a retro platformer world. Defeat the Glitch Overlord.
                Register for the immersive 30-hour Dungeon of Binary quest at IARE.
              </motion.p>

              {/* Hackathon Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 max-w-2xl"
              >
                <div className="pixel-card text-center">
                  <div className="text-hackathon-primary text-lg mb-1">🏆</div>
                  <div className="text-[8px] text-hackathon-secondary">PRIZES</div>
                  <div className="text-[10px] text-white mt-1">₹1.2L</div>
                </div>
                <div className="pixel-card text-center">
                  <div className="text-hackathon-accent text-lg mb-1">👥</div>
                  <div className="text-[8px] text-hackathon-secondary">TEAMS</div>
                  <div className="text-[10px] text-white mt-1">1-4 MEMBERS</div>
                </div>
                <div className="pixel-card text-center">
                  <div className="text-blue-400 text-lg mb-1">⏱️</div>
                  <div className="text-[8px] text-hackathon-secondary">DURATION</div>
                  <div className="text-[10px] text-white mt-1">30 HOURS</div>
                </div>
                <div className="pixel-card text-center">
                  <div className="text-yellow-400 text-lg mb-1">🎯</div>
                  <div className="text-[8px] text-hackathon-secondary">THEME</div>
                  <div className="text-[10px] text-white mt-1">MONSOON</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  onClick={() => setIsGameRunning(true)}
                  className="pixel-btn text-sm md:text-lg pulse-glow"
                >
                  ▶ START GAME
                </motion.button>
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, type: 'spring' }}
                  onClick={() => setShowWebsite(true)}
                  className="pixel-btn text-sm md:text-lg bg-hackathon-secondary text-black"
                >
                  ⊳ SKIP TO WEBSITE
                </motion.button>
              </div>

              {/* How to Play / Info Toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                onClick={() => setShowInstructions(!showInstructions)}
                className="text-[8px] md:text-[10px] text-hackathon-secondary hover:text-white transition-colors cursor-pointer underline underline-offset-4 mt-2"
              >
                {showInstructions ? '▲ HIDE INFO' : '▼ GAME INFO & RULES'}
              </motion.button>

              <AnimatePresence>
                {showInstructions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pixel-card text-left text-[8px] md:text-[10px] leading-loose mt-2 max-w-2xl">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Controls */}
                        <div>
                          <p className="text-hackathon-primary mb-2 text-[10px]">⌨️ CONTROLS</p>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">MOVE</span>
                              <span>← → or A D</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">JUMP</span>
                              <span>↑ W or SPACE</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">ATTACK</span>
                              <span>F (near boss)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">INTERACT</span>
                              <span>↓ S (on pipes)</span>
                            </div>
                          </div>
                        </div>

                        {/* Hackathon Info */}
                        <div>
                          <p className="text-hackathon-accent mb-2 text-[10px]">🎮 HACKATHON INFO</p>
                          <div className="space-y-1 text-gray-300">
                            <p>📍 Location: IARE, Hyderabad</p>
                            <p>📅 Date: July 17-18, 2026</p>
                            <p>🌐 Fee: ₹799 per Team</p>
                            <p>💬 Discord: community.link</p>
                          </div>
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <p className="text-hackathon-primary mb-2 text-[10px]">💡 TIPS</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400">
                          <p>• Stomp enemies from above</p>
                          <p>• Collect coins for bonus score</p>
                          <p>• Hit ? blocks from below</p>
                          <p>• Find secret passages</p>
                          <p>• Boss appears at level end</p>
                          <p>• Register after victory!</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute -bottom-24 text-[7px] text-gray-600"
              >
                BUILT WITH PHASER 3 + REACT • © 2026 BYTE QUEST
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="game-screen"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-full relative"
          >
            <PhaserGame ref={phaserRef} currentActiveScene={onActiveScene} />
            <OverlayModals />

            {/* Persistent Navigation */}
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <button 
                onClick={() => setShowWebsite(true)}
                className="pixel-btn bg-hackathon-surface text-hackathon-primary py-2 px-4 text-[10px] hover:bg-hackathon-primary hover:text-black transition-all flex items-center gap-2"
                style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.8)' }}
              >
                ⊳ SKIP TO WEBSITE
              </button>
            </div>

             {/* Mobile Touch Controls - Visible only on touch devices */}
            {isTouchDevice && (
              <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end select-none pointer-events-none">
              {/* D-Pad (Left/Down/Right) */}
              <div className="flex gap-1.5 pointer-events-auto">
                <button 
                  className="w-12 h-12 bg-white/20 border border-white/50 rounded-full active:bg-white/40 flex items-center justify-center backdrop-blur-sm text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'left', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'left', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'left', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'left', state: false }); }}
                >
                  ◀
                </button>
                <button 
                  className="w-12 h-12 bg-white/20 border border-white/50 rounded-full active:bg-white/40 flex items-center justify-center backdrop-blur-sm text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'down', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'down', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'down', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'down', state: false }); }}
                >
                  ▼
                </button>
                <button 
                  className="w-12 h-12 bg-white/20 border border-white/50 rounded-full active:bg-white/40 flex items-center justify-center backdrop-blur-sm text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'right', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'right', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'right', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'right', state: false }); }}
                >
                  ▶
                </button>
              </div>

              {/* Action Buttons (Jump, Attack, Dash) */}
              <div className="flex gap-1.5 pointer-events-auto items-end">
                <button 
                  className="w-10 h-10 bg-hackathon-accent/30 border border-hackathon-accent rounded-full active:bg-hackathon-accent/60 flex items-center justify-center backdrop-blur-sm text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'shift', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'shift', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'shift', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'shift', state: false }); }}
                >
                  ⚡
                </button>
                <button 
                  className="w-12 h-12 bg-red-500/30 border border-red-500 rounded-full active:bg-red-500/60 flex items-center justify-center mb-3 backdrop-blur-sm shadow-[0_0_10px_rgba(239,68,68,0.4)] text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'f', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'f', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'f', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'f', state: false }); }}
                >
                  ☄️
                </button>
                <button 
                  className="w-12 h-12 bg-hackathon-primary/30 border border-hackathon-primary rounded-full active:bg-hackathon-primary/60 flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(74,222,128,0.4)] text-xs"
                  onTouchStart={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'up', state: true }); }}
                  onTouchEnd={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'up', state: false }); }}
                  onMouseDown={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'up', state: true }); }}
                  onMouseUp={(e) => { e.preventDefault(); EventBus.emit('mobile-input', { key: 'up', state: false }); }}
                >
                  ▲
                </button>
              </div>
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
