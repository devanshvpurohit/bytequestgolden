import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Page = 'about' | 'themes' | 'schedule' | 'location';

export function Website() {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  const navItems: { id: Page; label: string }[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'themes', label: 'THEMES' },
    { id: 'schedule', label: 'SCHEDULE' },
    { id: 'location', label: 'LOCATION' },
  ];

  return (
    <div className="w-screen h-screen bg-hackathon-bg text-white font-pixel flex flex-col">
      {/* Header */}
      <div className="bg-hackathon-surface border-b-4 border-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-hackathon-primary glow-text">DUNGEON OF<span className="text-hackathon-accent"> BINARY</span></h1>
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
          <AnimatePresence mode="wait">
            {currentPage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero Section */}
                <motion.div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4">
                    ABOUT HACKATHON
                  </h2>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">📅</div>
                    <div className="text-hackathon-secondary text-sm mb-2">DATE</div>
                    <div className="text-white text-xs">July 17-18, 2026</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">⏱️</div>
                    <div className="text-hackathon-secondary text-sm mb-2">DURATION</div>
                    <div className="text-white text-xs">30 Hours</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-hackathon-secondary text-sm mb-2">PRIZES</div>
                    <div className="text-white text-xs">₹1,20,000</div>
                  </div>
                  <div className="pixel-card text-center">
                    <div className="text-3xl mb-2">📍</div>
                    <div className="text-hackathon-secondary text-sm mb-2">LOCATION</div>
                  </div>
                </div>

                {/* About Section */}
                <div className="pixel-card mb-12">
                  <h3 className="text-2xl text-hackathon-primary mb-4">🎮 THE QUEST BEGINS</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Welcome to Hyderabad's most exciting monsoon hackathon — <strong>The Code Quest: Dungeon of Binary!</strong> 
                    This dynamic 30-hour adventure is hosted at the Institute of Aeronautical Engineering (IARE), 
                    bringing together student innovators in an immersive, project-based coding quest.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our mission is to fuel innovation, cultivate teamwork, and challenge young developers to push 
                    the boundaries of creativity. Experience a retro-arcade themed hackathon with cutting-edge 
                    challenges and hands-on coding over two action-packed days.
                  </p>
                </div>

                {/* Prize Breakdown */}
                <div className="pixel-card mb-12 border-2 border-yellow-400">
                  <h3 className="text-2xl text-yellow-400 mb-6 text-center">🏆 PRIZE POOL BREAKDOWN</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-hackathon-surface border-4 border-yellow-400 p-4 text-center">
                      <div className="text-yellow-400 font-bold text-sm">1ST PLACE</div>
                      <div className="text-2xl text-white">₹50,000</div>
                    </div>
                    <div className="bg-hackathon-surface border-4 border-gray-400 p-4 text-center">
                      <div className="text-gray-400 font-bold text-sm">2ND PLACE</div>
                      <div className="text-2xl text-white">₹30,000</div>
                    </div>
                    <div className="bg-hackathon-surface border-4 border-orange-600 p-4 text-center">
                      <div className="text-orange-600 font-bold text-sm">3RD PLACE</div>
                      <div className="text-2xl text-white">₹20,000</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-hackathon-surface border-2 border-hackathon-primary p-3 text-center">
                      <div className="text-hackathon-primary font-bold text-xs">BEST INNOVATION</div>
                      <div className="text-xl text-white">₹10,000</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-hackathon-accent p-3 text-center">
                      <div className="text-hackathon-accent font-bold text-xs">BEST UI/UX</div>
                      <div className="text-xl text-white">₹10,000</div>
                    </div>
                  </div>
                </div>

                {/* Why Attend */}
                <div className="pixel-card">
                  <h3 className="text-2xl text-hackathon-accent mb-4">✨ WHY ATTEND?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-hackathon-primary pl-4">
                      <p className="text-hackathon-primary font-bold mb-2">🚀 Build Amazing Projects</p>
                      <p className="text-gray-300 text-sm">Create something incredible in just 24 hours</p>
                    </div>
                    <div className="border-l-4 border-hackathon-secondary pl-4">
                      <p className="text-hackathon-secondary font-bold mb-2">🤝 Network & Collaborate</p>
                      <p className="text-gray-300 text-sm">Meet talented developers and make lasting connections</p>
                    </div>
                    <div className="border-l-4 border-hackathon-accent pl-4">
                      <p className="text-hackathon-accent font-bold mb-2">🏅 Win Prizes</p>
                      <p className="text-gray-300 text-sm">Compete for ₹1,20,000 in prizes and recognition</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <p className="text-yellow-400 font-bold mb-2">🎓 Learn & Grow</p>
                      <p className="text-gray-300 text-sm">Expand your skills and learn from industry experts</p>
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
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4">
                    HACKATHON TRACKS
                  </h2>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Main Theme */}
                <div className="pixel-card mb-8 bg-gradient-to-r from-hackathon-surface to-hackathon-surface border-4 border-hackathon-primary">
                  <h3 className="text-3xl text-hackathon-primary mb-4">🎯 THEME: DUNGEON OF BINARY</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Create solutions that matter. Build the future with innovation at its core.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Choose your quest from one of the specialized challenge themes below. 
                    May your code compile and your logic prevail!
                  </p>
                </div>

                {/* Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="pixel-card">
                    <h4 className="text-xl text-blue-500 mb-3">📡 IOT TRACK</h4>
                    <p className="text-gray-300 text-sm">
                      Develop innovative, connected device ecosystems to bridge the digital and physical worlds. 
                    </p>
                  </div>
                  <div className="pixel-card">
                    <h4 className="text-xl text-hackathon-secondary mb-3">🤖 AI & ML TRACK</h4>
                    <p className="text-gray-300 text-sm">
                      Develop intelligent solutions that solve real-world challenges through data-driven technology.
                    </p>
                  </div>
                  <div className="pixel-card">
                    <h4 className="text-xl text-hackathon-accent mb-3">🎮 GAMIFY TRACK</h4>
                    <p className="text-gray-300 text-sm">
                      Design interactive solutions that incorporate gamification principles into software.
                    </p>
                  </div>
                  <div className="pixel-card">
                    <h4 className="text-xl text-yellow-400 mb-3">⛓️ WEB 3.0 TRACK</h4>
                    <p className="text-gray-300 text-sm">
                      Build decentralized solutions that redefine digital ownership through blockchain.
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
                  <h2 className="text-4xl md:text-5xl text-hackathon-primary glow-text mb-4">
                    SCHEDULE
                  </h2>
                  <p className="text-gray-400 mb-4">July 17-18, 2026</p>
                  <div className="gradient-underline w-48 md:w-64 mx-auto rounded-full" />
                </motion.div>

                {/* Day 1 */}
                <div className="pixel-card mb-8">
                  <h3 className="text-2xl text-hackathon-secondary mb-6">📅 DAY 1 - JULY 17</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-primary font-bold">8:00 AM</span>
                      <span className="text-gray-300">Registration & Check-In</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-primary font-bold">9:00 AM</span>
                      <span className="text-gray-300">Opening Ceremony & Keynote</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-primary font-bold">10:00 AM</span>
                      <span className="text-gray-300">Workshops & Sessions</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-primary font-bold">12:00 PM</span>
                      <span className="text-hackathon-secondary glow-text">HACKING BEGINS!</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-primary font-bold">8:00 PM</span>
                      <span className="text-gray-300">Dinner & Overnight Hacking</span>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="pixel-card mb-12">
                  <h3 className="text-2xl text-hackathon-accent mb-6">📅 DAY 2 - JULY 18</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-accent font-bold">8:00 AM</span>
                      <span className="text-gray-300">Morning Briefing</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-accent font-bold">12:00 PM</span>
                      <span className="text-hackathon-primary glow-text font-bold">CODE FREEZE</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-hackathon-accent font-bold">12:30 PM</span>
                      <span className="text-gray-300">Judging & Demos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-hackathon-accent font-bold">2:00 PM</span>
                      <span className="text-gray-300">Closing & Prizes</span>
                    </div>
                  </div>
                </div>

                {/* Sponsorship Tiers */}
                <div className="pixel-card">
                  <h3 className="text-2xl text-hackathon-primary mb-6 text-center">🛡️ SPONSORSHIP TIERS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-hackathon-surface border-2 border-orange-800 p-4 text-center">
                      <div className="text-orange-800 font-bold mb-2">BRONZE</div>
                      <div className="text-xl text-white mb-2">₹20,000</div>
                      <div className="text-[8px] text-gray-400">Workshops, Recognition, Materials</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-gray-400 p-4 text-center">
                      <div className="text-gray-400 font-bold mb-2">SILVER</div>
                      <div className="text-xl text-white mb-2">₹50,000</div>
                      <div className="text-[8px] text-gray-400">Social Media, Finalist Audience</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-yellow-400 p-4 text-center">
                      <div className="text-yellow-400 font-bold mb-2">GOLD</div>
                      <div className="text-xl text-white mb-2">₹75,000</div>
                      <div className="text-[8px] text-gray-400">Booth Space, Logo on Swag</div>
                    </div>
                    <div className="bg-hackathon-surface border-2 border-hackathon-accent p-4 text-center">
                      <div className="text-hackathon-accent font-bold mb-2">PLATINUM</div>
                      <div className="text-xl text-white mb-2">₹1,50,000</div>
                      <div className="text-[8px] text-gray-400">Crown Patron, Best Branding</div>
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
                        <p className="mt-4"><span className="text-hackathon-secondary">Event Date:</span></p>
                        <p className="ml-4">July 17-18, 2026</p>
                        <p className="mt-4"><span className="text-hackathon-secondary">Format:</span></p>
                        <p className="ml-4">In-Person Hackathon</p>
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

          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-hackathon-surface border-t-2 border-white/30 text-center py-4 text-gray-600 text-xs">
        <p>© 2026 DUNGEON OF BINARY • MONSOON EDITION • IARE HYDERABAD</p>
      </div>
    </div>
  );
}
