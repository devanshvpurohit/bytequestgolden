import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { PhaserGame } from './game/PhaserGame';
import type { IRefPhaserGame } from './game/PhaserGame';
import { OverlayModals } from './components/OverlayModals';
import { EventBus } from './game/EventBus';
import { Website } from './pages/Website';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Star seed (generated once, memoized for performance) ───────────────────────────── */
const generateStars = () => Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 8,
  duration: Math.random() * 4 + 3,
  opacity: Math.random() * 0.5 + 0.2,
}));

/* ── Shooting stars ────────────────────────────────────────── */
const generateShootingStars = () => Array.from({ length: 5 }, (_, i) => ({
  id: i,
  top: Math.random() * 40,
  left: Math.random() * 60,
  delay: i * 3.5 + Math.random() * 2,
}));

// Details and controls restored to original inline format
/* ── Detail cards (info grid) ──────────────────────────────── */
const DETAILS = [
  { icon: '🏆', label: 'PRIZES',   value: '₹60K',      color: '#fbbf24' },
  { icon: '👥', label: 'TEAMS',    value: '1-4 MEMBERS', color: '#c084fc' },
  { icon: '⏱️', label: 'DURATION', value: '30 HOURS',   color: '#60a5fa' },
  { icon: '🗓️', label: 'DATE',    value: 'JUL 17-18',  color: '#4ade80' },
];

/* ── Controls ──────────────────────────────────────────────── */
const CONTROLS = [
  { key: 'A / ←', action: 'MOVE LEFT' },
  { key: 'D / →', action: 'MOVE RIGHT' },
  { key: 'SPACE',  action: 'JUMP' },
  { key: 'SHIFT',  action: 'DASH' },
  { key: 'F',      action: 'FIREBALL' },
  { key: 'F×2 JUMP', action: 'DOUBLE JUMP' },
];

function App() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [isGameRunning, setIsGameRunning]     = useState(false);
  const [showWebsite, setShowWebsite]         = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isTouchDevice]                       = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false
  );

  // Memoize star arrays for better performance
  const stars = useMemo(() => generateStars(), []);
  const shootingStars = useMemo(() => generateShootingStars(), []);

  const onActiveScene = useCallback((scene: Phaser.Scene) => {
    console.log('Scene started:', scene.scene.key);
  }, []);

  useEffect(() => {
    const onShowWebsite = () => { setShowWebsite(true);  setIsGameRunning(false); };
    const onShowGame    = () => { setShowWebsite(false); setIsGameRunning(true);  };

    EventBus.on('show-website', onShowWebsite);
    EventBus.on('show-game',    onShowGame);

    const handleResize = () => {
      [100, 500].forEach(delay =>
        setTimeout(() => {
          phaserRef.current?.game?.scale.resize(window.innerWidth, window.innerHeight);
        }, delay)
      );
    };

    window.addEventListener('resize',            handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      EventBus.removeListener('show-website', onShowWebsite);
      EventBus.removeListener('show-game',    onShowGame);
      window.removeEventListener('resize',            handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const startGame = useCallback(() => {
    setIsGameRunning(true);
  }, []);

  const goToWebsite = useCallback(() => {
    setShowWebsite(true);
  }, []);

  const backToStart = useCallback(() => {
    setShowWebsite(false);
    setIsGameRunning(false);
  }, []);

  return (
    <div className="w-full h-dvh bg-hackathon-bg flex items-center justify-center font-pixel relative overflow-hidden">
      <AnimatePresence mode="wait">

        {/* ──────────── Website ──────────── */}
        {showWebsite ? (
          <Website key="website" />
        ) : !isGameRunning ? (

          /* ──────────── Start Screen ──────────── */
          <motion.div
            key="start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center z-10 w-full h-full text-center relative scanlines crt-vignette crt-flicker"
          >
            {/* ── Pixel grid background ── */}
            <div className="absolute inset-0 pixel-grid-bg opacity-100 pointer-events-none" />

            {/* ── Stars field ── */}
            {stars.map(s => (
              <div
                key={s.id}
                className="absolute rounded-full bg-white pointer-events-none"
                style={{
                  left:       `${s.left}%`,
                  top:        `${s.top}%`,
                  width:      `${s.size}px`,
                  height:     `${s.size}px`,
                  opacity:    s.opacity,
                  animation:  `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
                }}
                aria-hidden="true"
              />
            ))}

            {/* ── Shooting stars ── */}
            {shootingStars.map(s => (
              <div
                key={s.id}
                className="absolute pointer-events-none"
                style={{
                  top:  `${s.top}%`,
                  left: `${s.left}%`,
                  animation: `shoot 1.2s ${s.delay}s ease-out infinite`,
                  width: '60px', height: '2px',
                  background: 'linear-gradient(90deg, transparent, white)',
                  borderRadius: '999px',
                  opacity: 0,
                }}
                aria-hidden="true"
              />
            ))}

            {/* ── Ambient corner glows ── */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-hackathon-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-hackathon-accent/5 blur-3xl pointer-events-none" />

            {/* ── Main Content ── */}
            <div className="relative z-10 flex flex-col items-center gap-5 px-4 max-w-3xl w-full">

              {/* — Sub-label — */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[9px] md:text-[11px] text-hackathon-secondary tracking-[0.6em] uppercase"
              >
                IARE × E-CELL PRESENTS
              </motion.div>

              {/* — Main Title — */}
              <motion.div
                initial={{ y: -40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 90, damping: 14 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel leading-none uppercase">
                  <span className="title-shimmer">BYTE</span>
                  <br />
                  <span className="title-shimmer" style={{ animationDelay: '0.5s' }}>QUEST</span>
                </h1>
                <div className="gradient-underline w-56 md:w-80 mt-4 rounded-full" />
              </motion.div>

              {/* — Subtitle badge — */}
              <motion.div
                initial={{ scale: 0, rotate: -8 }}
                animate={{ scale: 1, rotate: -2 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 220, damping: 16 }}
                className="badge-pulse relative"
              >
                <div
                  className="glass-panel px-6 py-2.5 text-sm md:text-base text-hackathon-accent uppercase tracking-widest glow-purple"
                  style={{ border: '2px solid rgba(192,132,252,0.5)', borderRadius: 0 }}
                >
                  ⚔ Dungeon of Binary ⚔
                </div>
                <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[7px] px-2 py-0.5 border border-black font-pixel uppercase">
                  NEW!
                </div>
              </motion.div>

              {/* — Description — */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="text-[9px] md:text-[11px] text-gray-400 max-w-lg leading-loose"
              >
                30-hour hackathon at IARE, Hyderabad · July 17-18, 2026
                <br />
                Fight the Glitch Overlord · Register your team · Win big
              </motion.p>

              {/* — Info Cards — */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-2.5 w-full mt-1"
              >
                {DETAILS.map((d, i) => (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + i * 0.08 }}
                    className="pixel-card text-center py-4 px-2"
                    style={{ borderColor: `${d.color}33` }}
                  >
                    <div className="text-2xl mb-1.5">{d.icon}</div>
                    <div className="text-[7px] mb-1 uppercase tracking-widest" style={{ color: d.color }}>{d.label}</div>
                    <div className="text-[9px] text-white font-bold">{d.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* — CTA Buttons — */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-sm"
              >
                <button
                  onClick={startGame}
                  className="pixel-btn flex-1 text-sm md:text-base pulse-glow"
                  id="btn-start-game"
                >
                  ▶ START GAME
                </button>
                <button
                  onClick={goToWebsite}
                  className="pixel-btn flex-1 text-sm md:text-base"
                  id="btn-go-website"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: '#fff', borderColor: 'rgba(139,92,246,0.6)' }}
                >
                  ⊳ WEBSITE
                </button>
              </motion.div>

              {/* — Game Info Toggle — */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.45 }}
                onClick={() => setShowInstructions(v => !v)}
                className="text-[8px] md:text-[9px] text-hackathon-secondary hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                {showInstructions ? '▲ HIDE INFO' : '▼ GAME INFO & RULES'}
              </motion.button>

              {/* — Instructions panel — */}
              <AnimatePresence>
                {showInstructions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    <div className="glass-panel border border-white/10 text-left text-[8px] md:text-[9px] leading-loose p-4 w-full">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-hackathon-primary mb-2 text-[10px]">⌨️ CONTROLS</p>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">MOVE</span>
                              <span>← → or A D</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">JUMP</span>
                              <span>SPACE</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">DASH</span>
                              <span>SHIFT</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">ATTACK</span>
                              <span>F</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-hackathon-secondary">INTERACT</span>
                              <span>↓ S (on pipes)</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-hackathon-accent mb-2 text-[9px] uppercase tracking-wider">📍 Hackathon Info</p>
                          <div className="space-y-1 text-gray-300">
                            <p>📍 IARE, Hyderabad</p>
                            <p>📅 July 17-18, 2026</p>
                            <p>🌐 Fee: ₹349 / team</p>
                            <p>🏆 Prize: ₹60,000</p>
                          </div>
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <p className="text-hackathon-primary mb-1 text-[8px] uppercase">💡 Tips</p>
                            <p className="text-gray-400">• Stomp from above to kill enemies</p>
                            <p className="text-gray-400">• Hit ? blocks from below</p>
                            <p className="text-gray-400">• Defeat the boss to complete the quest</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="absolute bottom-4 text-[6px] md:text-[7px] text-gray-600 uppercase tracking-[0.3em]"
            >
              BUILT WITH PHASER 3 + REACT • © 2026 BYTE QUEST • ALL RIGHTS RESERVED
            </motion.div>
          </motion.div>

        ) : (

          /* ──────────── Game Screen ──────────── */
          <motion.div
            key="game-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <PhaserGame ref={phaserRef} currentActiveScene={onActiveScene} />
            <OverlayModals />

            {/* Nav Bar */}
            <div className="absolute top-3 right-3 z-50 flex gap-2">
              <button
                onClick={backToStart}
                className="pixel-btn py-1.5 px-3 text-[8px] bg-hackathon-surface text-hackathon-secondary hover:text-white border-white/20"
                style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.8)' }}
              >
                ⌂ MENU
              </button>
              <button
                onClick={goToWebsite}
                className="pixel-btn py-1.5 px-3 text-[8px] bg-hackathon-surface text-hackathon-primary"
                style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.8)' }}
              >
                ⊳ WEBSITE
              </button>
            </div>

            {/* Mobile Touch Controls */}
            {isTouchDevice && (
              <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end select-none pointer-events-none">

                {/* D-Pad */}
                <div className="flex gap-1.5 pointer-events-auto">
                  {(['left','down','right'] as const).map(dir => {
                    const icons: Record<string, string> = { left:'◀', down:'▼', right:'▶' };
                    return (
                      <button
                        key={dir}
                        className="w-12 h-12 bg-white/15 border border-white/40 rounded-full active:bg-white/35 flex items-center justify-center backdrop-blur-sm text-sm shadow-lg"
                        onTouchStart={e => { e.preventDefault(); EventBus.emit('mobile-input', { key: dir, state: true }); }}
                        onTouchEnd={e =>   { e.preventDefault(); EventBus.emit('mobile-input', { key: dir, state: false }); }}
                        onMouseDown={e =>  { e.preventDefault(); EventBus.emit('mobile-input', { key: dir, state: true }); }}
                        onMouseUp={e =>    { e.preventDefault(); EventBus.emit('mobile-input', { key: dir, state: false }); }}
                      >
                        {icons[dir]}
                      </button>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1.5 pointer-events-auto items-end">
                  {[
                    { key: 'shift', icon: '⚡', color: 'border-hackathon-accent bg-hackathon-accent/20' },
                    { key: 'f',     icon: '🔥', color: 'border-red-500 bg-red-500/20',  big: true },
                    { key: 'up',    icon: '▲',  color: 'border-hackathon-primary bg-hackathon-primary/20' },
                  ].map(btn => (
                    <button
                      key={btn.key}
                      className={`${btn.big ? 'w-14 h-14 mb-3' : 'w-11 h-11'} border rounded-full active:brightness-150 flex items-center justify-center backdrop-blur-sm text-sm shadow-lg ${btn.color}`}
                      onTouchStart={e => { e.preventDefault(); EventBus.emit('mobile-input', { key: btn.key, state: true }); }}
                      onTouchEnd={e =>   { e.preventDefault(); EventBus.emit('mobile-input', { key: btn.key, state: false }); }}
                      onMouseDown={e =>  { e.preventDefault(); EventBus.emit('mobile-input', { key: btn.key, state: true }); }}
                      onMouseUp={e =>    { e.preventDefault(); EventBus.emit('mobile-input', { key: btn.key, state: false }); }}
                    >
                      {btn.icon}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
