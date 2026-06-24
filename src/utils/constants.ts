// Event Details Constants
export const EVENT_DETAILS = {
  name: 'Byte Quest 2026',
  shortName: 'Byte Quest',
  tagline: 'Dungeon of Binary',
  date: 'July 17-18, 2026',
  duration: '30 Hours',
  venue: 'IARE, Hyderabad',
  fullVenue: 'Institute of Aeronautical Engineering, Hyderabad',
  prizePool: '₹60,000',
  registrationFee: '₹350 per head',
  maxParticipants: 280,
  teamSize: '1-4 members',
  registrationUrl: 'https://iare.ac.in',
  organizer: 'Entrepreneurship Cell (E-Cell), IARE',
} as const;

// Contact Information
export const CONTACTS = [
  { name: 'Devansh', phone: '8074237354', role: 'Organizing Lead' },
  { name: 'Ashrith', phone: '93909 39091', role: 'Technical Lead' },
] as const;

// Prize Distribution
export const PRIZES = {
  first: { amount: '₹30,000', place: '1st', medal: '🥇', color: '#fbbf24' },
  second: { amount: '₹20,000', place: '2nd', medal: '🥈', color: '#9ca3af' },
  third: { amount: '₹10,000', place: '3rd', medal: '🥉', color: '#ea580c' },
  innovation: { amount: '₹10,000', label: 'Best Innovation', icon: '💡', color: 'hackathon-secondary' },
  uiux: { amount: '₹10,000', label: 'Best UI/UX', icon: '🎨', color: 'hackathon-accent' },
} as const;

// Challenge Themes
export const THEMES = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    color: '#60a5fa',
    desc: 'Unlock potential to transform society by developing intelligent solutions that enhance human capabilities, improve decision-making, and solve real-world challenges through data-driven technology.',
    tags: ['Deep Learning', 'NLP', 'Computer Vision'],
  },
  {
    icon: '🔌',
    title: 'IoT (Internet of Things)',
    color: '#c084fc',
    desc: 'Develop innovative connected device ecosystems to bridge the digital and physical worlds. Build smart solutions that connect hardware and software in meaningful ways.',
    tags: ['Sensors', 'Edge Computing', 'Smart Systems'],
  },
  {
    icon: '🎮',
    title: 'Gamify',
    color: '#4ade80',
    desc: 'Design interactive and engaging solutions that make technology more fun by incorporating gamification principles into software and user experiences.',
    tags: ['Game Design', 'UX', 'Engagement'],
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    color: '#fbbf24',
    desc: 'Build secure and resilient digital solutions that protect systems, data, and users across modern applications.',
    tags: ['Security', 'Privacy', 'Risk', 'Defense'],
  },
] as const;

// Sponsorship Tiers
export const SPONSORSHIP_TIERS = [
  {
    tier: 'Bronze',
    color: '#92400e',
    glow: 'rgba(146,64,14,0.3)',
    amount: '₹20,000',
    perks: 'Workshops, Recognition, Materials, Resume Book',
  },
  {
    tier: 'Silver',
    color: '#9ca3af',
    glow: 'rgba(156,163,175,0.3)',
    amount: '₹50,000',
    perks: 'All Bronze + Trophy, Social Media, Finals Access',
  },
  {
    tier: 'Gold',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.3)',
    amount: '₹75,000',
    perks: 'All Silver + Branded Booth, Swag, Feast Sponsor',
  },
  {
    tier: 'Platinum',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.3)',
    amount: '₹1,50,000',
    perks: 'Crown Patron, Custom Stronghold, Premier Branding',
  },
] as const;

// Game Controls
export const GAME_CONTROLS = [
  { key: 'A / ←', action: 'MOVE LEFT' },
  { key: 'D / →', action: 'MOVE RIGHT' },
  { key: 'SPACE', action: 'JUMP' },
  { key: 'SHIFT', action: 'DASH' },
  { key: 'F', action: 'FIREBALL' },
  { key: 'F×2 JUMP', action: 'DOUBLE JUMP' },
] as const;

// Detail Cards
export const DETAIL_CARDS = [
  { icon: '🏆', label: 'PRIZE POOL', value: '₹60,000', color: '#fbbf24' },
  { icon: '👥', label: 'PARTICIPANTS', value: '280+', color: '#c084fc' },
  { icon: '⏱️', label: 'DURATION', value: '30 HOURS', color: '#60a5fa' },
  { icon: '💰', label: 'FEE', value: '₹350/HEAD', color: '#4ade80' },
] as const;

// Color Palette
export const COLORS = {
  primary: '#4ade80',
  secondary: '#60a5fa',
  accent: '#c084fc',
  gold: '#fbbf24',
  bg: '#050510',
  surface: '#0d0d24',
  card: '#111133',
} as const;
