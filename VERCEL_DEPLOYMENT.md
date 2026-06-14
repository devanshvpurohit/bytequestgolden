# 🚀 Vercel Deployment Guide

This guide will help you deploy **Byte Quest: Dungeon of Binary** to Vercel.

---

## ⚡ Quick Deploy (Recommended)

### Option 1: Deploy via GitHub (Easiest)

1. **Push to GitHub** (Already done!)
   ```bash
   git push origin main
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click **"Add New Project"**
   - Import your GitHub repository: `devanshvpurohit/bytequestgolden`

3. **Configure Project**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy!**
   - Click **"Deploy"**
   - Wait 1-2 minutes for build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

---

## 🔧 Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Or for production:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time) or **Y** (if exists)
   - Project name? Press enter or type custom name
   - Directory? `./` (press enter)

---

## 📋 Configuration Files

The following files have been added for Vercel deployment:

### `vercel.json`
- Configures build settings
- Sets up SPA routing (all routes redirect to index.html)
- Optimizes asset caching

### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size and time

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] ✅ Homepage loads correctly
- [ ] ✅ Start Game button works
- [ ] ✅ Website navigation works
- [ ] ✅ Registration form loads
- [ ] ✅ All assets (images, sprites) load properly
- [ ] ✅ Phaser game runs smoothly
- [ ] ✅ Mobile responsive design works
- [ ] ✅ All animations and effects work

---

## 🌐 Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait for DNS propagation (can take up to 48 hours)

---

## 🔄 Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Auto-deploys to production
- **Pull requests** → Creates preview deployments
- **Branches** → Creates preview deployments

---

## 🐛 Troubleshooting

### Build fails?
```bash
# Test build locally first
npm run build

# Check for errors
npm run preview
```

### Assets not loading?
- Ensure all asset paths use `/assets/...` (absolute paths)
- Check that all files exist in `public/assets/`

### Routing issues?
- `vercel.json` has SPA rewrites configured
- All routes should redirect to `/index.html`

---

## 📊 Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Asset caching
- ✅ Serverless functions (if needed)
- ✅ Edge network distribution

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- Project Repo: https://github.com/devanshvpurohit/bytequestgolden

---

## 🎉 Done!

Your Byte Quest hackathon website is now live on Vercel! 🚀

Share your deployment URL:
- Production: `https://your-project-name.vercel.app`
- GitHub: https://github.com/devanshvpurohit/bytequestgolden

---

**Pro Tip**: Set up environment variables in Vercel dashboard if you add backend features later!
