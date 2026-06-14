# 🚀 Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All TypeScript errors resolved
- [x] Build completes successfully
- [x] No console errors in development
- [x] Linting passes

### ✅ Performance
- [x] Bundle size optimized
- [x] Images compressed
- [x] Code splitting implemented
- [x] Lazy loading ready

### ✅ SEO
- [x] Meta tags complete
- [x] Sitemap created
- [x] Robots.txt added
- [x] Open Graph tags added
- [x] Favicon configured

### ✅ Accessibility
- [x] ARIA labels added
- [x] Keyboard navigation works
- [x] Screen reader compatible
- [x] Color contrast meets WCAG

### ✅ Content
- [ ] Update event registration URL
- [ ] Verify contact information
- [ ] Check all copy for accuracy
- [ ] Test all external links

---

## Deployment Steps

### Option 1: Netlify (Recommended)

#### Via GitHub
1. Push code to GitHub repository
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Click "Deploy site"

#### Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Build and deploy
npm run build
vercel --prod
```

### Option 3: GitHub Pages

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

### Option 4: Custom Server

```bash
# Build the project
npm run build

# Upload dist/ folder to your server
# Configure web server to serve index.html for all routes
```

---

## Environment Configuration

### Development
Create `.env.development`:
```env
VITE_API_URL=http://localhost:3000
VITE_GA_ID=
```

### Production
Create `.env.production`:
```env
VITE_API_URL=https://api.bytequest.iare.ac.in
VITE_GA_ID=G-XXXXXXXXXX
```

---

## Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Game starts and runs smoothly
- [ ] Website navigation works
- [ ] Registration link opens
- [ ] Mobile touch controls work
- [ ] All images load
- [ ] Animations play smoothly

### Performance Tests
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check page load time (target: <3s)
- [ ] Verify mobile performance
- [ ] Test on slow 3G connection

### SEO Tests
- [ ] Verify meta tags with [Meta Tags](https://metatags.io)
- [ ] Check sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test social sharing preview
- [ ] Submit sitemap to Google Search Console

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## Domain Configuration

### Custom Domain Setup (Netlify)

1. Go to Domain settings in Netlify
2. Click "Add custom domain"
3. Enter: `bytequest.iare.ac.in`
4. Add DNS records:
   ```
   Type: CNAME
   Name: bytequest
   Value: [your-site].netlify.app
   ```

### SSL Certificate
- Automatically provided by Netlify/Vercel
- Enable HTTPS redirect in settings

---

## Analytics Setup

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.production`:
   ```env
   VITE_GA_ID=G-XXXXXXXXXX
   ```
4. Update `src/utils/analytics.ts`:
   ```typescript
   if (typeof window !== 'undefined' && window.gtag) {
     window.gtag('config', import.meta.env.VITE_GA_ID);
   }
   ```
5. Add script to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## Monitoring & Maintenance

### Error Tracking
Consider integrating:
- [Sentry](https://sentry.io) for error monitoring
- [LogRocket](https://logrocket.com) for session replay

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://pingdom.com)

### Performance Monitoring
- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals

---

## Rollback Procedure

### Netlify
1. Go to Deploys tab
2. Find previous successful deploy
3. Click "..." → "Publish deploy"

### Vercel
1. Go to Deployments tab
2. Find previous deployment
3. Click "..." → "Promote to Production"

### Manual
```bash
# Revert to previous commit
git revert HEAD

# Rebuild and deploy
npm run build
# Deploy with your method
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routes Not Working (404)
- Ensure SPA redirect is configured
- Check netlify.toml or vercel.json
- Verify server configuration

### Images Not Loading
- Check file paths (case-sensitive)
- Verify files are in public/ folder
- Check build output includes assets

### Performance Issues
- Enable compression (gzip/brotli)
- Implement caching headers
- Use CDN for assets
- Enable HTTP/2

---

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive data in client code
- [ ] Environment variables properly used
- [ ] Dependencies up to date
- [ ] No console.log in production

---

## Maintenance Schedule

### Daily
- Monitor error logs
- Check uptime status

### Weekly
- Review analytics
- Check performance metrics
- Test critical paths

### Monthly
- Update dependencies
- Security audit
- Performance optimization
- Content updates

---

## Support & Contacts

### Technical Issues
- **Developer**: Check GitHub issues
- **Hosting**: Contact Netlify/Vercel support

### Event Questions
- **Devansh**: 8074237354
- **Ashrith**: 93909 39091
- **Email**: ecell@iare.ac.in

---

## Useful Commands

```bash
# Development
npm run dev                  # Start dev server
npm run build               # Build for production
npm run preview             # Preview production build
npm run lint                # Run linter

# Deployment
netlify deploy --prod       # Deploy to Netlify
vercel --prod              # Deploy to Vercel

# Utilities
npm outdated               # Check for updates
npm audit                  # Security audit
npm run type-check         # Type checking (add to package.json)
```

---

## Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Phaser Documentation](https://phaser.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Netlify Documentation](https://docs.netlify.com)

---

**Deployment Status**: Ready for production ✅  
**Last Verified**: June 13, 2026  
**Next Review**: July 1, 2026

© 2026 Byte Quest • Deployment Guide
