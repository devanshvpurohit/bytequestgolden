import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RegistrationForm } from '../components/RegistrationForm';

type Page = 'about' | 'themes' | 'schedule' | 'location' | 'register';

export function Website() {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  const navItems: { id: Page; label: string }[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'themes', label: 'THEMES' },
    { id: 'schedule', label: 'SCHEDULE' },
    { id: 'location', label: 'LOCATION' },
    { id: 'register', label: 'REGISTER' },
  ];

  return (
    <div className="w-screen h-screen bg-hackathon-bg text-white font-pixel flex flex-col">
      {/* Header */}
      <div className="bg-hackathon-surface border-b-4 border-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-hackathon-primary glow-text">CODE<span className="text-hackathon-accent">QUEST</span></h1>
          <button
            onClick={() => {
              import('../game/EventBus').then(m => m.EventBus.emit('show-game'));
            }}
            className="pixel-btn text-xs md:text-sm"
          >
            ← BACK TO GAME
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-hackathon-surface border-b-2 border-white/30">
        <div className="max-w-6xl mx-auto px-6 flex gap-2 md:gap-4 overflow-x-auto py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`pixel-btn text-xs md:text-sm whitespace-nowrap ${
                currentPage === item.id
                  ? 'bg-hackathon-primary text-black'
                  : 'bg-hackathon-surface text-hackathon-primary border-2 border-hackathon-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">            {currentPage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero Section */}
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4 uppercase">
                    The Code Quest
                  </h2>
                  <p className="text-hackathon-accent text-lg mb-4 tracking-[0.3em]">DUNGEON OF BINARY</p>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">📅</div>
                    <div className="text-hackathon-secondary text-sm mb-2 uppercase">Date</div>
                    <div className="text-white">July 17 – 18, 2026</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="text-hackathon-secondary text-sm mb-2 uppercase">Duration</div>
                    <div className="text-white">30 Hours</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-hackathon-secondary text-sm mb-2 uppercase">Prize Pool</div>
                    <div className="text-white">₹1,20,000</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">📍</div>
                    <div className="text-hackathon-secondary text-sm mb-2 uppercase">Venue</div>
                    <div className="text-white">IARE, Hyderabad</div>
                  </div>
                </div>

                {/* About Section */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-hackathon-primary mb-4 uppercase">🎮 Event Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Welcome to Hyderabad's most exciting monsoon hackathon — The Code Quest: Dungeon of Binary! 
                    This dynamic 30-hour hackathon is hosted in collaboration with and at the Institute of 
                    Aeronautical Engineering (IARE), bringing together student innovators in an immersive, 
                    project-based coding adventure.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our mission is to fuel innovation, cultivate teamwork, and challenge young developers 
                    to push the boundaries of what they can create. Participants will engage in cutting-edge 
                    challenges, hands-on coding, and an unforgettable retro-arcade themed hackathon 
                    experience over two action-packed days.
                  </p>
                </div>

                {/* What Participants Get */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="pixel-card">
                    <h3 className="text-xl text-hackathon-secondary mb-4 uppercase">🎁 What You Get</h3>
                    <ul className="text-gray-300 text-xs space-y-2">
                      <li>• Free food throughout the entire 30-hour quest</li>
                      <li>• Transport facilities for participant convenience</li>
                      <li>• Cash prizes and exclusive goodies for winners</li>
                      <li>• Certificate of Participation for every explorer</li>
                      <li>• Networking with industry professionals & mentors</li>
                      <li>• Inclusion in the Guild Registry (Resume Book)</li>
                    </ul>
                  </div>
                  <div className="pixel-card">
                    <h3 className="text-xl text-hackathon-accent mb-4 uppercase">🛡️ Participation</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-hackathon-primary text-xs font-bold uppercase mb-1">Team Structure</p>
                        <p className="text-gray-400 text-[10px]">1-4 members per team. Cross-disciplinary teams (coders + designers) encouraged!</p>
                      </div>
                      <div>
                        <p className="text-hackathon-primary text-xs font-bold uppercase mb-1">Eligibility</p>
                        <p className="text-gray-400 text-[10px]">Open to all undergraduate and postgraduate engineering students from all disciplines.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sponsorship Tiers */}
                <div className="pixel-card border-hackathon-primary/30">
                  <h3 className="text-2xl text-hackathon-primary mb-6 text-center uppercase">🤝 Sponsorship Tiers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-hackathon-surface border-2 border-orange-800 p-4 text-center">
                      <div className="text-orange-800 font-bold mb-1 uppercase text-xs">Bronze</div>
                      <div className="text-lg text-white mb-2">₹20,000</div>
                      <div className="text-[9px] text-gray-400">Workshops, Recognition, Materials, Resume Book</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-gray-400 p-4 text-center">
                      <div className="text-gray-400 font-bold mb-1 uppercase text-xs">Silver</div>
                      <div className="text-lg text-white mb-2">₹50,000</div>
                      <div className="text-[9px] text-gray-400">All Bronze + Trophy Sponsorship, Social Media, Private Finals Access</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-yellow-400 p-4 text-center shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                      <div className="text-yellow-400 font-bold mb-1 uppercase text-xs">Gold</div>
                      <div className="text-lg text-white mb-2">₹75,000</div>
                      <div className="text-[9px] text-gray-400">All Silver + Branded Booth, Logo on Swag, Feast Hall Sponsorship</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-hackathon-accent p-4 text-center shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                      <div className="text-hackathon-accent font-bold mb-1 uppercase text-xs">Platinum</div>
                      <div className="text-lg text-white mb-2">₹1,50,000</div>
                      <div className="text-[9px] text-gray-400">Crown Patron Status, Custom Stronghold Setup, Premier Branding Everywhere</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
              {currentPage === 'themes' && (
              <motion.div
                key="themes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4 uppercase">
                    Challenge Themes
                  </h2>
                  <p className="text-hackathon-accent text-sm tracking-widest uppercase">Decryption Challenges</p>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="pixel-card">
                    <h4 className="text-xl text-hackathon-secondary mb-3 uppercase">🤖 AI & Machine Learning</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Unlock the potential to transform society by developing intelligent solutions 
                      that enhance human capabilities, improve decision-making, and solve 
                      real-world challenges through data-driven technology.
                    </p>
                  </div>
                  <div className="pixel-card">
                    <h4 className="text-xl text-hackathon-accent mb-3 uppercase">🔌 IoT (Internet of Things)</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Develop innovative, connected device ecosystems to bridge the digital 
                      and physical worlds. Build smart solutions that connect hardware 
                      and software in meaningful ways.
                    </p>
                  </div>
                  <div className="pixel-card border-green-500/30">
                    <h4 className="text-xl text-green-400 mb-3 uppercase">🎮 Gamify</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Design interactive and engaging solutions that make technology more fun 
                      by incorporating gamification principles into software and user experiences.
                    </p>
                  </div>
                  <div className="pixel-card border-yellow-500/30">
                    <h4 className="text-xl text-yellow-400 mb-3 uppercase">⛓️ Web 3.0</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Build decentralized solutions that empower individuals, enhance transparency, 
                      and redefine digital ownership through blockchain and distributed technologies.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {currentPage === 'schedule' && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4 uppercase">
                    Quest Timeline
                  </h2>
                  <p className="text-gray-400 mb-4 uppercase">July 17 - 18, 2026</p>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Day 1 */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-hackathon-secondary mb-6 uppercase">📅 Day 1 - July 17</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-primary font-bold">8:00 AM</span>
                      <span className="text-gray-300 text-xs">Registration & Check-In</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-primary font-bold">9:00 AM</span>
                      <span className="text-gray-300 text-xs">Opening Ceremony & Keynote</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-primary font-bold">10:00 AM</span>
                      <span className="text-gray-300 text-xs">Workshops & Expert Sessions</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-accent font-bold">12:00 PM</span>
                      <span className="text-hackathon-accent font-bold text-xs">Hacking Begins! (30h Start)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-primary font-bold">1:00 PM</span>
                      <span className="text-gray-300 text-xs">Lunch & Fueling</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-hackathon-primary font-bold">8:00 PM</span>
                      <span className="text-gray-300 text-xs">Dinner & Overnight Hacking</span>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="pixel-card">
                  <h3 className="text-2xl text-hackathon-accent mb-6 uppercase">📅 Day 2 - July 18</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-secondary font-bold">8:00 AM</span>
                      <span className="text-gray-300 text-xs">Morning Briefing & Progress Check</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-red-500 font-bold">12:00 PM</span>
                      <span className="text-red-400 font-bold text-xs uppercase">Submission Deadline (Code Freeze)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-hackathon-accent font-bold">12:00 PM - 2:00 PM</span>
                      <span className="text-gray-300 text-xs">Judging & Final Presentations</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-hackathon-primary font-bold">2:00 PM - 3:00 PM</span>
                      <span className="text-hackathon-primary font-bold text-xs">Closing Ceremony & Awards</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentPage === 'location' && (
              <motion.div
                key="location"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4">
                    VENUE LOCATION
                  </h2>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Venue Details */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-hackathon-secondary mb-6">📍 IARE - HYDERABAD</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-hackathon-primary mb-4 text-lg">INSTITUTE DETAILS</h4>
                      <div className="space-y-3 text-gray-300">
                        <p><span className="text-hackathon-secondary">Full Name:</span></p>
                        <p className="ml-4">Institute of Aeronautical Engineering</p>
                        <p className="mt-4"><span className="text-hackathon-secondary">Location:</span></p>
                        <p className="ml-4">Hyderabad, Telangana, India</p>
                        <p className="mt-4"><span className="text-hackathon-secondary uppercase text-[10px]">Event Date:</span></p>
                        <p className="ml-4 text-sm font-bold text-white">July 17 – 18, 2026</p>
                        <p className="mt-4"><span className="text-hackathon-secondary uppercase text-[10px]">Format:</span></p>
                        <p className="ml-4 text-sm">30-Hour In-Person Quest</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-hackathon-accent mb-4 text-lg">WHY IARE?</h4>
                      <div className="space-y-2 text-gray-300 text-sm">
                        <p>✓ State-of-the-art facilities</p>
                        <p>✓ Excellent infrastructure</p>
                        <p>✓ Central location in Hyderabad</p>
                        <p>✓ Easy accessibility</p>
                        <p>✓ Spacious campus for events</p>
                        <p>✓ On-campus accommodation available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-hackathon-primary mb-4">🗺️ FIND US ON MAP</h3>
                  <div className="bg-hackathon-surface border-2 border-white/30 p-4 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5555555555556!2d78.7!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65666fa3c4a256d2!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Institute+of+Aeronautical+Engineering/data=!4m2!3m1!1s0x0:0x65666fa3c4a256d2?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn text-lg pulse-glow inline-block"
                  >
                    OPEN IN GOOGLE MAPS
                  </a>
                </div>

                {/* Getting There */}
                <div className="pixel-card">
                  <h3 className="text-2xl text-hackathon-accent mb-6">🚗 GETTING THERE</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-l-4 border-hackathon-primary pl-4">
                      <p className="text-hackathon-primary font-bold mb-2">✈️ BY AIR</p>
                      <p className="text-gray-300 text-sm">
                        Rajiv Gandhi International Airport is ~30km away. Taxis and cabs available.
                      </p>
                    </div>
                    <div className="border-l-4 border-hackathon-secondary pl-4">
                      <p className="text-hackathon-secondary font-bold mb-2">🚌 BY BUS</p>
                      <p className="text-gray-300 text-sm">
                        Well-connected by TSRTC and private buses. Direct routes from city center.
                      </p>
                    </div>
                    <div className="border-l-4 border-hackathon-accent pl-4">
                      <p className="text-hackathon-accent font-bold mb-2">🚕 BY CAB</p>
                      <p className="text-gray-300 text-sm">
                        Uber, Ola, and local taxis available. Easy pickup and drop-off points.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentPage === 'register' && (
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4 uppercase">
                    Enter the Dungeon
                  </h2>
                  <p className="text-hackathon-accent text-sm tracking-widest uppercase">Registration Fee: ₹799 per Team</p>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Prizes - Updated to Brochure Details */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-yellow-400 mb-6 uppercase">🏆 Prize Distribution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-hackathon-surface border-4 border-yellow-400 p-6 text-center shadow-[inset_0_0_20px_rgba(250,204,21,0.1)]">
                      <div className="text-4xl mb-3">🥇</div>
                      <div className="text-yellow-400 font-bold mb-1 uppercase text-xs">1st Place</div>
                      <div className="text-2xl text-white">₹50,000</div>
                      <p className="text-gray-400 text-[8px] mt-2 uppercase tracking-tighter">Trophy + Goodies</p>
                    </div>
                    <div className="bg-hackathon-surface border-4 border-gray-400 p-6 text-center shadow-[inset_0_0_20px_rgba(156,163,175,0.1)]">
                      <div className="text-4xl mb-3">🥈</div>
                      <div className="text-gray-400 font-bold mb-1 uppercase text-xs">2nd Place</div>
                      <div className="text-2xl text-white">₹30,000</div>
                      <p className="text-gray-400 text-[8px] mt-2 uppercase tracking-tighter">Trophy + Goodies</p>
                    </div>
                    <div className="bg-hackathon-surface border-4 border-orange-600 p-6 text-center shadow-[inset_0_0_20px_rgba(234,88,12,0.1)]">
                      <div className="text-4xl mb-3">🥉</div>
                      <div className="text-orange-600 font-bold mb-1 uppercase text-xs">3rd Place</div>
                      <div className="text-2xl text-white">₹20,000</div>
                      <p className="text-gray-400 text-[8px] mt-2 uppercase tracking-tighter">Trophy + Goodies</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-hackathon-surface border-2 border-hackathon-secondary p-4 text-center">
                      <div className="text-hackathon-secondary font-bold uppercase text-[10px]">Best Innovation</div>
                      <div className="text-xl text-white">₹10,000</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-hackathon-accent p-4 text-center">
                      <div className="text-hackathon-accent font-bold uppercase text-[10px]">Best UI/UX</div>
                      <div className="text-xl text-white">₹10,000</div>
                    </div>
                  </div>
                </div>

                {/* Simplified Registration Action */}
                <RegistrationForm />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="pixel-card border-hackathon-secondary/30">
                    <h3 className="text-lg text-hackathon-secondary mb-4 uppercase">📋 Eligibility</h3>
                    <ul className="text-gray-300 text-[10px] space-y-2">
                      <li>• Open to all UG and PG engineering students.</li>
                      <li>• Students from all branches welcome.</li>
                      <li>• Team size: 1 to 4 members.</li>
                      <li>• Max capacity: 480 participants (120 teams).</li>
                    </ul>
                  </div>
                  <div className="pixel-card border-hackathon-accent/30">
                    <h3 className="text-lg text-hackathon-accent mb-4 uppercase">📞 Contact Support</h3>
                    <div className="space-y-2 text-[10px]">
                      <p className="flex justify-between text-gray-300">
                        <span>Devansh:</span>
                        <span className="text-hackathon-primary">8074237354</span>
                      </p>
                      <p className="flex justify-between text-gray-300">
                        <span>Ashrith:</span>
                        <span className="text-hackathon-primary">93909 39091</span>
                      </p>
                      <p className="mt-4 text-gray-500 italic uppercase tracking-tighter">
                        ⚔ May your code compile and your logic prevail. ⚔
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-hackathon-surface border-t-2 border-white/30 text-center py-4 text-gray-600 text-[10px] uppercase tracking-widest">
        <p>© 2026 The Code Quest • Dungeon of Binary • IARE Hyderabad</p>
      </div>
    </div>
  );
}
