# Deployment Guide for Bishop Mobility Solutions Landing Page

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers:
- Automatic deployments from GitHub
- Free SSL certificates
- Global CDN
- Automatic preview deployments for pull requests
- Zero configuration needed

### Step-by-Step Deployment

#### 1. Push to GitHub

First, commit and push your code to the GitHub repository:

```bash
cd bishop-mobility-landing

# Configure git
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Create a new branch for the landing page
git checkout -b landing-page-v1

# Add all files
git add .

# Commit with a descriptive message
git commit -m "Add professional landing page with lead capture form"

# Push to GitHub
git push https://x-access-token:$GITHUB_TOKEN@github.com/ethicsbuild/bishop-mobility-landing.git landing-page-v1
```

#### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Select the `ethicsbuild/bishop-mobility-landing` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete
8. Your site will be live at `bishop-mobility-landing.vercel.app`

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? bishop-mobility-landing
# - In which directory is your code located? ./
# - Want to override settings? No

# For production deployment
vercel --prod
```

#### 3. Configure Custom Domain (Optional)

Once deployed, you can add a custom domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `bishopmobility.com` or `www.bishopmobility.com`)
4. Follow DNS configuration instructions:
   - **For root domain**: Add A record pointing to Vercel's IP
   - **For www subdomain**: Add CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## Alternative Deployment Options

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Deploy to Your Own Server

```bash
# Build for production
npm run build

# The output will be in the .next folder
# Copy the following to your server:
# - .next/
# - public/
# - package.json
# - package-lock.json

# On your server, install dependencies and start
npm install --production
npm start
```

### Deploy with Docker

```dockerfile
# Create a Dockerfile in the project root
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t bishop-mobility-landing .
docker run -p 3000:3000 bishop-mobility-landing
```

## Environment Variables

If you need to add environment variables (for form submission, analytics, etc.):

### In Vercel:
1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `NEXT_PUBLIC_FORM_ENDPOINT`
   - `EMAIL_API_KEY`
   - `NEXT_PUBLIC_GA_ID`
3. Redeploy for changes to take effect

### In .env.local (for local development):
```env
NEXT_PUBLIC_FORM_ENDPOINT=your-endpoint
EMAIL_API_KEY=your-key
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Images display properly (or placeholders are visible)
- [ ] Form submission works (check console logs)
- [ ] Mobile responsiveness on actual devices
- [ ] All links work correctly
- [ ] SEO meta tags are present (view page source)
- [ ] Site loads quickly (test with PageSpeed Insights)
- [ ] SSL certificate is active (https://)

## Monitoring & Analytics

### Set up Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Set up Google Analytics

Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

// In the <body> tag:
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Continuous Deployment

Once connected to Vercel:
- Every push to `main` branch automatically deploys to production
- Every pull request gets a unique preview URL
- You can set up branch-specific deployments in Vercel settings

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images Not Loading
- Ensure images are in the `/public` folder
- Use relative paths: `/image.jpg` not `./image.jpg`
- Check image file names match exactly (case-sensitive)

### Form Not Submitting
- Check browser console for errors
- Verify API endpoint is correct
- Ensure CORS is configured if using external API

### Slow Loading
- Optimize images (use WebP format, compress)
- Enable Vercel's automatic image optimization
- Check bundle size: `npm run build` shows size analysis

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository

---

**Ready to launch? Let's get Bishop Mobility Solutions online!**