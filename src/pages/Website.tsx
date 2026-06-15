import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegistrationForm } from '../components/RegistrationForm';

type Page = 'about' | 'themes' | 'schedule' | 'location' | 'partners' | 'register';

const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: 'about',    label: 'ABOUT',    icon: '🏠' },
  { id: 'themes',   label: 'THEMES',   icon: '💡' },
  { id: 'schedule', label: 'SCHEDULE', icon: '📅' },
  { id: 'location', label: 'LOCATION', icon: '📍' },
  { id: 'partners', label: 'PARTNERS', icon: '🤝' },
  { id: 'register', label: 'REGISTER', icon: '⚔' },
];

// Animation variants (kept for potential future use)
// const pageVariants = {
//   initial: { opacity: 0, y: 18 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25,0.46,0.45,0.94] } },
//   exit:    { opacity: 0, y: -12, transition: { duration: 0.2 } },
// };

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Website() {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  return (
    <motion.div
      key="website"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-dvh bg-hackathon-bg text-white font-pixel flex flex-col relative overflow-hidden scanlines crt-flicker"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-hackathon-primary/4 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-hackathon-accent/4 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 pixel-grid-bg opacity-100" />
        
        {/* Decorative background particles (stars) */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 3 + 2) + 's',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      {/* ── Header ── */}
      <div className="relative z-50 bg-hackathon-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
          {/* Logo area */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0 group cursor-pointer" onClick={() => setCurrentPage('about')}>
            <div className="flex -space-x-2">
              <div className="bg-white border border-hackathon-primary/60 p-0.5 h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rotate-[-3deg] group-hover:rotate-0 transition-transform">
                <img src="/assets/logo_ecell.png" alt="E-Cell IARE" className="h-full w-auto object-contain" />
              </div>
              <div className="bg-white border border-hackathon-primary/60 p-0.5 h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rotate-[3deg] group-hover:rotate-0 transition-transform">
                <img src="/assets/logo_robot.png" alt="Byte Quest" className="h-full w-auto object-contain" />
              </div>
            </div>
            <h1 className="text-lg md:text-3xl leading-none font-bold">
              <span className="text-hackathon-primary title-shimmer">BYTE</span>
              <span className="text-hackathon-accent glow-purple">QUEST</span>
            </h1>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => import('../game/EventBus').then(m => m.EventBus.emit('show-game'))}
              className="pixel-btn text-[8px] md:text-xs py-2 px-2 md:px-4 bg-black/40 text-hackathon-primary border-hackathon-primary/40 hover:bg-hackathon-primary hover:text-black"
            >
              ← GAME
            </button>
            <button
              onClick={() => setCurrentPage('register')}
              className="pixel-btn text-[8px] md:text-xs py-2 px-3 md:px-5 pulse-glow"
            >
              ⚔ REGISTER
            </button>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="relative z-40 bg-hackathon-surface/60 backdrop-blur-md border-b border-white/8 sticky top-0">
        <div className="max-w-7xl mx-auto px-2 md:px-6 flex gap-1 overflow-x-auto py-2 scrollbar-none justify-start md:justify-center">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`
                flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 text-[8px] md:text-[11px] uppercase whitespace-nowrap
                transition-all duration-300 cursor-pointer font-pixel border-2
                ${currentPage === item.id
                  ? 'bg-hackathon-primary/10 text-hackathon-primary border-hackathon-primary neon-border-green'
                  : 'bg-transparent text-gray-400 border-transparent hover:text-white hover:bg-white/5'}
              `}
            >
              <span className="text-sm md:text-base">{item.icon}</span>
              <span className="tracking-tighter md:tracking-normal">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10 flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <AnimatePresence mode="wait">

            {/* ════════════ ABOUT ════════════ */}
            {currentPage === 'about' && (
              <motion.div key="about" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-8 md:space-y-12">
                {/* Hero */}
                <motion.div variants={fadeUp} className="text-center">
                  <div className="inline-block px-3 py-1 bg-hackathon-primary/10 border border-hackathon-primary/30 text-hackathon-primary text-[8px] md:text-[10px] mb-4 tracking-[0.2em] uppercase badge-pulse">
                    IARE'S PREMIER HACKATHON
                  </div>
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase leading-tight">Byte Quest 2026</h2>
                  <p className="text-hackathon-accent text-xs md:text-base tracking-[0.4em] uppercase mb-6 font-orbitron font-bold">Dungeon of Binary</p>
                  <div className="gradient-underline w-48 md:w-80 mx-auto rounded-full shadow-[0_0_15px_rgba(74,222,128,0.3)]" />
                </motion.div>

                {/* Stats row */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { emoji: '📅', label: 'Date',       value: 'July 17-18, 2026',   color: 'border-hackathon-secondary/40', glow: 'shadow-[0_0_15px_rgba(96,165,250,0.15)]' },
                    { emoji: '⏱️', label: 'Duration',   value: '30 Hours',            color: 'border-hackathon-accent/40',    glow: 'shadow-[0_0_15px_rgba(192,132,252,0.15)]' },
                    { emoji: '🏆', label: 'Prize Pool', value: '₹60,000',             color: 'border-hackathon-gold/40',      glow: 'shadow-[0_0_15px_rgba(251,191,36,0.15)]' },
                    { emoji: '👥', label: 'Participants', value: '280+',              color: 'border-hackathon-primary/40',   glow: 'shadow-[0_0_15px_rgba(74,222,128,0.15)]' },
                  ].map(s => (
                    <div key={s.label} className={`pixel-card text-center flex flex-col items-center justify-center p-4 md:p-6 group ${s.glow}`}>
                      <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.emoji}</div>
                      <div className="text-hackathon-secondary text-[8px] md:text-[10px] mb-1 uppercase tracking-widest opacity-80">{s.label}</div>
                      <div className="text-white text-[9px] md:text-xs font-bold">{s.value}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Overview */}
                <motion.div variants={fadeUp} className="pixel-card border-hackathon-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-hackathon-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-hackathon-primary/10 transition-colors" />
                  <h3 className="text-xl md:text-2xl text-hackathon-primary mb-6 uppercase flex items-center gap-3">
                    <span className="animate-pulse">🎮</span> Event Overview
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed text-[10px] md:text-sm max-w-3xl">
                    <p>
                      <span className="text-white font-bold">Byte Quest 2026</span> is the flagship national-level innovation hackathon hosted by the <span className="text-hackathon-accent font-bold">Entrepreneurship Cell</span> of the <span className="text-white font-bold">Institute of Aeronautical Engineering</span>.
                    </p>
                    <p>
                      Inspired by retro gaming adventures and digital exploration, Byte Quest challenges <span className="text-hackathon-primary font-bold">280+ participants</span> to solve real-world problems through innovation, collaboration, and technology.
                    </p>
                    <p>
                      Over <span className="text-hackathon-secondary font-bold">30 intense hours</span>, participants will ideate, build, test, and present solutions while working alongside talented peers and receiving mentorship from industry professionals.
                    </p>
                    <p>
                      Byte Quest is more than a competition—it's a <span className="text-hackathon-accent font-bold">launchpad for future innovators</span>, where students develop practical technical skills, explore emerging technologies, gain startup ecosystem exposure, and build impactful real-world solutions.
                    </p>
                  </div>
                </motion.div>

                {/* Two-col */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="pixel-card border-hackathon-secondary/20 group hover:border-hackathon-secondary/50 transition-colors">
                    <h3 className="text-lg text-hackathon-secondary mb-5 uppercase flex items-center gap-2">
                      <span className="text-xl">🎁</span> What You Get
                    </h3>
                    <ul className="text-gray-300 text-[10px] md:text-xs space-y-3 leading-loose">
                      {[
                        'Free food throughout the 30-hour quest',
                        'Transport facilities for convenience',
                        'Cash prizes & exclusive goodies for winners',
                        'Participation certificate for every explorer',
                        'Networking with industry professionals',
                        'Inclusion in the Guild Registry (Resume Book)',
                      ].map(item => (
                        <li key={item} className="flex items-start gap-3 group/item">
                          <span className="text-hackathon-primary mt-0.5 group-hover/item:scale-150 transition-transform">•</span>
                          <span className="group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pixel-card border-hackathon-accent/20 group hover:border-hackathon-accent/50 transition-colors">
                    <h3 className="text-lg text-hackathon-accent mb-5 uppercase flex items-center gap-2">
                      <span className="text-xl">🛡️</span> Participation
                    </h3>
                    <div className="space-y-5">
                      <div className="group/detail">
                        <p className="text-hackathon-primary text-[10px] md:text-xs font-bold uppercase mb-1 tracking-wider">Team Structure</p>
                        <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed group-hover/detail:text-gray-200 transition-colors">1-4 members per team. Cross-disciplinary teams (coders + designers) strongly encouraged!</p>
                      </div>
                      <div className="group/detail">
                        <p className="text-hackathon-primary text-[10px] md:text-xs font-bold uppercase mb-1 tracking-wider">Eligibility</p>
                        <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed group-hover/detail:text-gray-200 transition-colors">Open to all undergraduate and postgraduate engineering students from any discipline.</p>
                      </div>
                      <div className="group/detail">
                        <p className="text-hackathon-primary text-[10px] md:text-xs font-bold uppercase mb-1 tracking-wider">Capacity</p>
                        <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed group-hover/detail:text-gray-200 transition-colors">Max 480 participants (120 teams). Spots are limited — register early!</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sponsorship */}
                <motion.div variants={fadeUp} className="pixel-card border-white/8 bg-black/40">
                  <h3 className="text-xl md:text-2xl text-hackathon-primary mb-8 text-center uppercase tracking-widest">🤝 Sponsorship Tiers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                      { tier:'Bronze',   color:'#92400e', glow:'rgba(146,64,14,0.3)',   amount:'₹20,000',   perks:'Workshops, Recognition, Materials, Resume Book' },
                      { tier:'Silver',   color:'#9ca3af', glow:'rgba(156,163,175,0.3)', amount:'₹50,000',   perks:'All Bronze + Trophy, Social Media, Finals Access' },
                      { tier:'Gold',     color:'#fbbf24', glow:'rgba(251,191,36,0.3)',  amount:'₹75,000',   perks:'All Silver + Branded Booth, Swag, Feast Sponsor' },
                      { tier:'Platinum', color:'#c084fc', glow:'rgba(192,132,252,0.3)', amount:'₹1,50,000', perks:'Crown Patron, Custom Stronghold, Premier Branding' },
                    ].map(s => (
                      <div
                        key={s.tier}
                        className="pixel-card p-6 text-center border-2 hover:scale-105 transition-all duration-300"
                        style={{ borderColor: `${s.color}55`, boxShadow: `0 0 30px ${s.glow}` }}
                      >
                        <div className="font-bold mb-2 uppercase text-[10px] md:text-xs tracking-[0.2em]" style={{ color: s.color }}>{s.tier}</div>
                        <div className="text-xl md:text-2xl text-white mb-4 font-bold">{s.amount}</div>
                        <div className="text-[8px] md:text-[10px] text-gray-400 leading-relaxed font-orbitron">{s.perks}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ════════════ THEMES ════════════ */}
            {currentPage === 'themes' && (
              <motion.div key="themes" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-10 md:space-y-14">
                <motion.div variants={fadeUp} className="text-center">
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase">Challenge Themes</h2>
                  <p className="text-hackathon-accent text-xs md:text-base tracking-[0.3em] uppercase mb-6 font-orbitron">Decryption Challenges Await</p>
                  <div className="gradient-underline w-48 md:w-80 mx-auto rounded-full" />
                </motion.div>

                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  {[
                    {
                      icon: '🤖', title: 'AI & Machine Learning', color: '#60a5fa',
                      desc: 'Unlock potential to transform society by developing intelligent solutions that enhance human capabilities, improve decision-making, and solve real-world challenges through data-driven technology.',
                      tags: ['Deep Learning', 'NLP', 'Computer Vision'],
                    },
                    {
                      icon: '🔌', title: 'IoT (Internet of Things)', color: '#c084fc',
                      desc: 'Develop innovative connected device ecosystems to bridge the digital and physical worlds. Build smart solutions that connect hardware and software in meaningful ways.',
                      tags: ['Sensors', 'Edge Computing', 'Smart Systems'],
                    },
                    {
                      icon: '🎮', title: 'Gamify', color: '#4ade80',
                      desc: 'Design interactive and engaging solutions that make technology more fun by incorporating gamification principles into software and user experiences.',
                      tags: ['Game Design', 'UX', 'Engagement'],
                    },
                    {
                      icon: '⛓️', title: 'Web 3.0', color: '#fbbf24',
                      desc: 'Build decentralized solutions that empower individuals, enhance transparency, and redefine digital ownership through blockchain and distributed technologies.',
                      tags: ['Blockchain', 'DeFi', 'NFT', 'DAO'],
                    },
                  ].map(theme => (
                    <motion.div
                      key={theme.title}
                      variants={fadeUp}
                      className="pixel-card border-2 p-6 md:p-8 group hover:translate-y-[-8px] transition-all"
                      style={{ borderColor: `${theme.color}44`, boxShadow: `0 8px 32px -8px ${theme.color}22` }}
                    >
                      <div className="flex items-center gap-5 mb-6">
                        <span className="text-4xl md:text-5xl group-hover:rotate-12 transition-transform">{theme.icon}</span>
                        <h4 className="text-lg md:text-xl uppercase font-bold" style={{ color: theme.color }}>{theme.title}</h4>
                      </div>
                      <p className="text-gray-300 text-[10px] md:text-sm leading-loose mb-6 font-orbitron opacity-90">{theme.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {theme.tags.map(t => (
                          <span
                            key={t}
                            className="text-[8px] md:text-[10px] px-3 py-1.5 border-2 uppercase font-bold transition-colors"
                            style={{ borderColor: `${theme.color}55`, color: theme.color, background: `${theme.color}11` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* ════════════ SCHEDULE ════════════ */}
            {currentPage === 'schedule' && (
              <motion.div key="schedule" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-10">
                <motion.div variants={fadeUp} className="text-center">
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase">Quest Timeline</h2>
                  <p className="text-gray-400 text-xs md:text-base mb-6 uppercase tracking-[0.4em] font-orbitron">July 17 – 18, 2026</p>
                  <div className="gradient-underline w-48 md:w-80 mx-auto rounded-full shadow-[0_0_20px_rgba(74,222,128,0.2)]" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                  {[
                    {
                      day: 'Day 1 — July 17', color: 'hackathon-secondary', glow: 'rgba(96,165,250,0.2)',
                      events: [
                        { time: '8:00 AM',  label: 'Registration & Check-In',          highlight: false },
                        { time: '9:00 AM',  label: 'Opening Ceremony & Keynote',        highlight: false },
                        { time: '10:00 AM', label: 'Workshops & Expert Sessions',        highlight: false },
                        { time: '12:00 PM', label: '🚀 Hacking Begins! (30h Clock)', highlight: true  },
                        { time: '1:00 PM',  label: 'Lunch & Fueling Station',            highlight: false },
                        { time: '8:00 PM',  label: 'Dinner & Overnight Hacking',         highlight: false },
                      ],
                    },
                    {
                      day: 'Day 2 — July 18', color: 'hackathon-accent', glow: 'rgba(192,132,252,0.2)',
                      events: [
                        { time: '8:00 AM',         label: 'Morning Briefing & Progress Check', highlight: false },
                        { time: '12:00 PM',         label: '🔴 Code Freeze — Submission Deadline', highlight: true  },
                        { time: '12:00 – 2:00 PM', label: 'Judging & Final Presentations',     highlight: false },
                        { time: '2:00 – 3:00 PM',  label: '🏆 Closing Ceremony & Awards',  highlight: true  },
                      ],
                    },
                  ].map(section => (
                    <motion.div key={section.day} variants={fadeUp} className="pixel-card border-white/10 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1" style={{ background: `var(--color-${section.color})` }} />
                      <h3 className={`text-xl md:text-2xl text-${section.color} mb-8 uppercase font-bold flex items-center gap-3`}>
                        <span className="text-2xl">📅</span> {section.day}
                      </h3>
                      <div className="space-y-1">
                        {section.events.map((ev, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-4 border-b border-white/5 last:border-0 group/ev hover:bg-white/5 transition-colors ${ev.highlight ? 'bg-hackathon-gold/5' : ''}`}
                          >
                            <span className={`text-[10px] md:text-xs font-bold mb-1 sm:mb-0 ${ev.highlight ? 'text-hackathon-gold' : `text-${section.color}`}`}>{ev.time}</span>
                            <span className={`text-[10px] md:text-xs text-left sm:text-right font-orbitron ${ev.highlight ? 'text-hackathon-gold glow-gold font-bold scale-105 transition-transform' : 'text-gray-300'}`}>{ev.label}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ════════════ LOCATION ════════════ */}
            {currentPage === 'location' && (
              <motion.div key="location" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-10">
                <motion.div variants={fadeUp} className="text-center">
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase">Venue</h2>
                  <div className="gradient-underline w-32 md:w-56 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <motion.div variants={fadeUp} className="lg:col-span-1 space-y-8">
                    <div className="pixel-card border-hackathon-secondary/30 bg-hackathon-secondary/5 h-full">
                      <h3 className="text-lg text-hackathon-secondary mb-6 uppercase flex items-center gap-2">
                        <span>📍</span> IARE — Hyderabad
                      </h3>
                      <div className="space-y-6 text-[10px] md:text-xs text-gray-300">
                        {[
                          ['Full Name',   'Institute of Aeronautical Engineering'],
                          ['City',        'Hyderabad, Telangana'],
                          ['Event Date',  'July 17 – 18, 2026'],
                          ['Format',      '30-Hour In-Person Hackathon'],
                        ].map(([label, val]) => (
                          <div key={label} className="group/item">
                            <span className="text-hackathon-secondary uppercase tracking-widest text-[8px] md:text-[10px] block mb-2 opacity-70">{label}:</span>
                            <p className="text-white font-bold group-hover:text-hackathon-primary transition-colors">{val}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <h4 className="text-hackathon-accent mb-4 uppercase text-xs">Why IARE?</h4>
                        <div className="space-y-3 text-[9px] md:text-[11px] text-gray-400">
                          {['State-of-the-art facilities','Excellent infrastructure','Central Hyderabad location','Easy accessibility'].map(p => (
                            <p key={p} className="flex items-center gap-2"><span className="text-hackathon-primary text-base">✓</span> {p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="lg:col-span-2">
                    <div className="pixel-card border-white/10 p-2 md:p-3 bg-black/40 shadow-2xl">
                      <div className="aspect-video w-full overflow-hidden border-2 border-white/10 mb-4 group">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5555555555556!2d78.7!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1234567890"
                          width="100%" height="100%"
                          className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700"
                          style={{ border: 0 }}
                          allowFullScreen loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2 py-2">
                        <p className="text-[8px] md:text-[10px] text-gray-400 font-orbitron">DUNDIGAL, HYDERABAD, TELANGANA 500043</p>
                        <a
                          href="https://www.google.com/maps/place/Institute+of+Aeronautical+Engineering"
                          target="_blank" rel="noopener noreferrer"
                          className="pixel-btn text-[9px] md:text-xs pulse-glow w-full sm:w-auto text-center"
                        >
                          OPEN IN MAPS ↗
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="pixel-card border-white/10 bg-black/20">
                  <h3 className="text-lg text-hackathon-accent mb-8 uppercase text-center tracking-[0.3em]">🚗 Getting There</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-[10px] md:text-xs">
                    {[
                      { icon:'✈️', mode:'By Air',  color:'hackathon-primary',   desc:'Rajiv Gandhi International Airport ~30km away. Taxis & airport cabs available 24/7.' },
                      { icon:'🚌', mode:'By Bus',  color:'hackathon-secondary', desc:'Well-connected by TSRTC. Take direct routes from city centers like Secunderabad or LB Nagar.' },
                      { icon:'🚕', mode:'By Cab',  color:'hackathon-accent',    desc:'Uber, Ola & Rapido provide seamless connectivity to the campus gate.' },
                    ].map(t => (
                      <div key={t.mode} className={`border-l-4 border-${t.color} pl-6 py-2 group hover:bg-white/5 transition-colors`}>
                        <p className={`text-${t.color} font-bold mb-3 uppercase tracking-widest flex items-center gap-2`}>
                          <span className="text-2xl">{t.icon}</span> {t.mode}
                        </p>
                        <p className="text-gray-400 leading-relaxed font-orbitron">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ════════════ PARTNERS ════════════ */}
            {currentPage === 'partners' && (
              <motion.div key="partners" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-12">
                <motion.div variants={fadeUp} className="text-center">
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase">Guild Partners</h2>
                  <p className="text-hackathon-accent text-xs md:text-base tracking-[0.3em] uppercase mb-6 font-orbitron">The Mighty Allies Supporting Our Quest</p>
                  <div className="gradient-underline w-48 md:w-80 mx-auto rounded-full" />
                </motion.div>

                <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {[
                    { logo:'/assets/nexus_logo.png',    name:'NEXUS LABS',     role:'Quantum Network Core',        color:'hackathon-secondary' },
                    { logo:'/assets/cyber_logo.png',    name:'CYBER CORP',     role:'Synthetic Processing Systems', color:'hackathon-primary'   },
                    { logo:'/assets/pixel_quantum.png', name:'QUANTUM COMP',   role:'Supercomputing Solutions',    color:'hackathon-accent'    },
                    { logo:'/assets/retro_gaming.png',  name:'RETRO GAMING',   role:'Dungeon Design & Audio',      color:'hackathon-gold'      },
                  ].map(p => (
                    <motion.div
                      key={p.name}
                      variants={fadeUp}
                      className="pixel-card flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 border-2"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="w-28 h-28 md:w-40 md:h-40 mb-6 bg-black/40 border-2 border-white/10 p-4 flex items-center justify-center group-hover:border-hackathon-primary/50 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-hackathon-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="w-full h-full object-contain filter brightness-75 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500 relative z-10"
                        />
                      </div>
                      <div className={`text-${p.color} font-bold mb-2 uppercase text-[10px] md:text-xs tracking-[0.2em]`}>{p.name}</div>
                      <div className="text-[8px] md:text-[10px] text-gray-500 font-orbitron">{p.role}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="pixel-card border-dashed border-white/20 bg-hackathon-primary/5 text-center py-12 md:py-20 relative overflow-hidden group">
                  <div className="absolute inset-0 pixel-grid-bg opacity-10" />
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-3xl text-hackathon-primary mb-4 uppercase font-bold tracking-[0.1em]">🛡️ Become a Guild Partner</h3>
                    <p className="text-[10px] md:text-sm text-gray-400 max-w-2xl mx-auto mb-10 leading-loose font-orbitron">
                      Equip our explorers with tools, APIs, and rewards. Support the next generation of innovators and get premier branding throughout the event.
                    </p>
                    <button
                      onClick={() => setCurrentPage('register')}
                      className="pixel-btn text-xs md:text-sm px-10 py-5 pulse-glow"
                    >
                      🤝 JOIN AS PARTNER
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ════════════ REGISTER ════════════ */}
            {currentPage === 'register' && (
              <motion.div key="register" variants={stagger} initial="initial" animate="animate" exit="exit" className="space-y-12">
                <motion.div variants={fadeUp} className="text-center">
                  <h2 className="text-4xl md:text-7xl text-hackathon-primary title-shimmer mb-4 uppercase">Enter the Dungeon</h2>
                  <p className="text-hackathon-accent text-xs md:text-base tracking-[0.3em] uppercase mb-6 font-orbitron font-bold">Registration Fee: ₹350 per Head</p>
                  <div className="gradient-underline w-48 md:w-80 mx-auto rounded-full shadow-[0_0_20px_rgba(192,132,252,0.3)]" />
                </motion.div>

                {/* Prize Distribution */}
                <motion.div variants={fadeUp} className="pixel-card border-hackathon-gold/20 bg-black/30 p-8 md:p-12">
                  <h3 className="text-xl md:text-3xl text-hackathon-gold mb-10 uppercase text-center glow-gold font-bold tracking-[0.2em]">🏆 Prize Distribution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {[
                      { place:'1st', medal:'🥇', color:'#fbbf24', shadow:'rgba(251,191,36,0.2)', amount:'₹30,000' },
                      { place:'2nd', medal:'🥈', color:'#9ca3af', shadow:'rgba(156,163,175,0.15)', amount:'₹20,000' },
                      { place:'3rd', medal:'🥉', color:'#ea580c', shadow:'rgba(234,88,12,0.15)',  amount:'₹10,000' },
                    ].map((p) => (
                      <div
                        key={p.place}
                        className="pixel-card p-8 text-center tilt-card border-2 group hover:bg-white/5 transition-all duration-500"
                        style={{ borderColor: `${p.color}66`, boxShadow: `inset 0 0 40px ${p.shadow}, 10px 10px 0 rgba(0,0,0,0.8)` }}
                      >
                        <div className="text-6xl md:text-7xl mb-6 group-hover:scale-125 transition-transform duration-500">{p.medal}</div>
                        <div className="font-bold mb-2 uppercase text-[10px] md:text-xs tracking-[0.3em]" style={{ color: p.color }}>{p.place} Place</div>
                        <div className="text-3xl md:text-4xl text-white font-bold mb-4 font-orbitron tracking-tighter">{p.amount}</div>
                        <div className="h-0.5 w-12 mx-auto mb-4" style={{ backgroundColor: p.color }} />
                        <p className="text-gray-400 text-[8px] md:text-[10px] uppercase font-bold tracking-widest">Trophy + Goodies</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {[
                      { label:'Best Innovation', amount:'₹10,000', color:'hackathon-secondary', icon: '💡' },
                      { label:'Best UI/UX',       amount:'₹10,000', color:'hackathon-accent',    icon: '🎨'   },
                    ].map(s => (
                      <div
                        key={s.label}
                        className={`pixel-card p-6 text-center border-2 hover:bg-white/5 transition-all group border-${s.color}/30`}
                      >
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
                        <div className={`text-${s.color} font-bold uppercase text-[10px] md:text-xs tracking-widest mb-2`}>{s.label}</div>
                        <div className="text-2xl md:text-3xl text-white font-bold font-orbitron">{s.amount}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Registration form */}
                <motion.div variants={fadeUp} className="max-w-4xl mx-auto w-full relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-hackathon-primary to-hackathon-accent rounded-lg blur opacity-20" />
                  <div className="relative">
                    <RegistrationForm />
                  </div>
                </motion.div>

                {/* Bottom cards */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="pixel-card border-hackathon-secondary/30 bg-hackathon-secondary/5">
                    <h3 className="text-lg text-hackathon-secondary mb-6 uppercase flex items-center gap-3">
                      <span className="text-2xl">📋</span> Eligibility
                    </h3>
                    <ul className="text-gray-300 text-[10px] md:text-xs space-y-4 leading-relaxed font-orbitron">
                      <li className="flex items-start gap-3"><span className="text-hackathon-primary">•</span> Open to all UG and PG engineering students.</li>
                      <li className="flex items-start gap-3"><span className="text-hackathon-primary">•</span> Students from all branches welcome.</li>
                      <li className="flex items-start gap-3"><span className="text-hackathon-primary">•</span> Team size: 1 to 4 members.</li>
                      <li className="flex items-start gap-3"><span className="text-hackathon-primary">•</span> Max capacity: 480 participants (120 teams).</li>
                    </ul>
                  </div>
                  <div className="pixel-card border-hackathon-accent/30 bg-hackathon-accent/5">
                    <h3 className="text-lg text-hackathon-accent mb-6 uppercase flex items-center gap-3">
                      <span className="text-2xl">📞</span> Contact Support
                    </h3>
                    <div className="space-y-4 text-[10px] md:text-xs">
                      {[
                        { name:'Devansh', phone:'8074237354', role: 'Organizing Lead' },
                        { name:'Ashrith', phone:'93909 39091', role: 'Technical Lead' },
                      ].map(c => (
                        <div key={c.name} className="flex justify-between items-center group/contact p-3 border border-white/5 hover:border-white/10 transition-colors">
                          <div>
                            <span className="text-white font-bold block">{c.name}</span>
                            <span className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-wider">{c.role}</span>
                          </div>
                          <a href={`tel:${c.phone}`} className="text-hackathon-primary font-bold hover:glow-text transition-all">{c.phone}</a>
                        </div>
                      ))}
                      <div className="mt-8 text-center">
                        <p className="text-gray-500 italic text-[9px] md:text-[10px] font-orbitron tracking-widest">
                          ⚔ May your code compile and your logic prevail. ⚔
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-40 bg-hackathon-surface/90 backdrop-blur-xl border-t border-white/10 text-center py-4 md:py-6 group">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-orbitron">
          <span>© 2026 Byte Quest</span>
          <span className="hidden md:inline">•</span>
          <span className="text-hackathon-primary group-hover:text-white transition-colors">Dungeon of Binary</span>
          <span className="hidden md:inline">•</span>
          <span>IARE Hyderabad</span>
        </div>
      </div>

      {/* Mobile-only quick nav or scroll hint */}
      <div className="md:hidden fixed bottom-20 right-4 z-[100] pointer-events-none">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 rounded-full bg-hackathon-primary/20 border border-hackathon-primary/50 flex items-center justify-center text-hackathon-primary shadow-lg backdrop-blur-sm"
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
}
