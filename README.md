# Byte Quest: Dungeon of Binary

> A 30-hour immersive, retro-themed hackathon hosted at **IARE, Hyderabad** featuring an interactive Phaser 3 game and comprehensive event website.

## 🎮 The Experience
This project is more than just a landing page; it's an interactive journey. Participants navigate a pixel-art platformer game, defeat the Glitch Overlord, and stabilize the system before entering the "Dungeon of Binary" (the hackathon).

## 🚀 Event Details
- **Date**: July 17 – 18, 2026
- **Duration**: 30 Hours
- **Venue**: IARE, Hyderabad
- **Prize Pool**: ₹60,000
- **Participants**: 280+ Students (Teams of 1-4)
- **Registration Fee**: ₹350 per head

## 🛠️ Tech Stack
- **Game Engine**: Phaser 3
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Build Tool**: Vite 7
- **Type Safety**: TypeScript 5

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Rahul-14507/qutammesh-hackathon.git
    cd qutammesh-hackathon-golden
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

4.  **Build for Production**:
    ```bash
    npm run build
    ```

5.  **Preview Production Build**:
    ```bash
    npm run preview
    ```

## 🎮 Game Features
- **Golden Knight Player** with smooth physics and animations
- **Advanced Movement**: Walk, jump, double jump, dash, fireball attack
- **Boss Fight**: Glitch Overlord with health bar and projectile attacks
- **Enemy AI**: Patrolling enemies with collision detection
- **Collectibles**: Coins and question blocks
- **Mobile Support**: Touch controls for mobile devices
- **Retro Aesthetic**: CRT effects, scanlines, pixel art

### Game Controls
| Key | Action |
|-----|--------|
| A / ← | Move Left |
| D / → | Move Right |
| Space / W | Jump (press twice for double jump) |
| Shift | Dash ability |
| F | Fireball Attack |

## 🌐 Website Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Multiple Pages**: About, Themes, Schedule, Location, Partners, Register
- **Registration System**: Direct integration with official portal
- **Prize Breakdown**: Clear prize distribution display
- **Sponsorship Tiers**: Bronze, Silver, Gold, Platinum packages
- **SEO Optimized**: Complete meta tags, sitemap, robots.txt
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 📁 Project Structure

```
qutammesh-hackathon-golden/
├── public/
│   ├── assets/              # Images and sprites
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── components/          # React components
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── OverlayModals.tsx
│   │   └── RegistrationForm.tsx
│   ├── game/                # Phaser game logic
│   │   ├── scenes/
│   │   │   └── Game.ts      # Main game scene
│   │   ├── objects/
│   │   │   └── Player.ts    # Player character
│   │   ├── EventBus.ts      # React-Phaser bridge
│   │   ├── PhaserGame.tsx   # Game wrapper
│   │   └── main.ts          # Game config
│   ├── pages/
│   │   └── Website.tsx      # Main website
│   ├── hooks/
│   │   └── useMediaQuery.ts # Responsive hooks
│   ├── utils/
│   │   ├── constants.ts     # Centralized data
│   │   ├── analytics.ts     # Analytics tracking
│   │   └── seo.ts           # SEO utilities
│   ├── App.tsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite config
├── tailwind.config.js       # Tailwind config
├── tsconfig.json            # TypeScript config
└── README.md                # This file
```

## 🎨 Customization

### Update Event Information
Edit `/src/utils/constants.ts`:

```typescript
export const EVENT_DETAILS = {
  name: 'Your Event Name',
  date: 'Event Date',
  venue: 'Your Venue',
  prizePool: '₹XX,XXX',
  // ... more
};
```

### Change Color Scheme
Modify theme variables in `/src/index.css`:

```css
@theme {
  --color-hackathon-primary:   #4ade80;  /* Green */
  --color-hackathon-secondary: #60a5fa;  /* Blue */
  --color-hackathon-accent:    #c084fc;  /* Purple */
  /* ... */
}
```

### Modify Game Physics
Edit `/src/game/objects/Player.ts`:

```typescript
private readonly SPEED = 350;         // Movement speed
private readonly JUMP_FORCE = -620;   // Jump strength
private readonly DASH_SPEED = 700;    // Dash velocity
```

## 📊 Analytics

Analytics hooks are available in `/src/utils/analytics.ts`. Integrate with your provider:

```typescript
// Example: Google Analytics 4
import { analytics } from './utils/analytics';

// Track events
analytics.startGame();
analytics.clickRegister();
analytics.viewPage('about');
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push

Configuration is already set in `netlify.toml`.

### Vercel
```bash
npm run build
vercel --prod
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting
```

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type check
npm run type-check  # Add this script to package.json
```

## 🔧 Environment Variables

Create `.env` file for environment-specific configs:

```env
VITE_API_URL=https://api.yoursite.com
VITE_GA_ID=G-XXXXXXXXXX
```

## ⚡ Performance Tips

1. **Code Splitting**: Components lazy-load automatically
2. **Image Optimization**: Use WebP format for images
3. **Font Loading**: Fonts preload via CDN
4. **Bundle Size**: Check with `npm run build -- --report`

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meet WCAG standards

## 🐛 Known Issues

- [ ] Boss health bar occasionally doesn't sync
- [ ] Mobile touch controls may lag on older devices
- [ ] Firefox may show slight animation jitter

## 🗺️ Roadmap

- [ ] Add multiplayer leaderboard
- [ ] Implement more game levels
- [ ] Add team registration portal
- [ ] Create admin dashboard
- [ ] Email confirmation system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 👥 Contact

- **Devansh**: 8074237354 (Organizing Lead)
- **Ashrith**: 93909 39091 (Technical Lead)
- **Email**: ecell@iare.ac.in

## ⚔ Mission

To fuel innovation, cultivate teamwork, and challenge young developers to push the boundaries of what they can create across AI, IoT, Web3, and Gaming.

---

© 2026 Byte Quest • IARE Hyderabad • All Rights Reserved

