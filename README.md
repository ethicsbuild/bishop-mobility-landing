# Bishop Mobility Solutions - Landing Page

A professional, conversion-optimized landing page for Bishop Mobility Solutions' innovative cane holster. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Live Preview

The site is currently running at: http://localhost:3000

## 📋 Features

- **Accessibility-First Design**: Large fonts, high contrast, WCAG 2.1 AA compliant
- **Mobile-Responsive**: Optimized for tablets and smartphones (primary devices for older demographic)
- **SEO-Optimized**: Proper meta tags, semantic HTML, fast loading times
- **Lead Capture Form**: Collects name, email, phone, and mobility needs
- **Compelling Storytelling**: Balances emotional narrative with practical benefits
- **Trust Indicators**: Patent pending, Made in Texas, founder story

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization Guide

### 1. Replace Placeholder Images

The landing page has placeholder sections for:

- **Hero Image** (`components/Hero.tsx`): Product photo of the cane holster
- **Solution Image** (`components/Solution.tsx`): Detail shot showing the dual S-curve design
- **Founder Photo** (`components/FounderStory.tsx`): Professional portrait of Jim Bishop

To replace:
1. Add your images to the `/public` folder
2. Update the placeholder divs with `<img>` tags pointing to your images

Example:
```tsx
// Replace this:
<div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl">
  {/* Placeholder content */}
</div>

// With this:
<img 
  src="/your-image.jpg" 
  alt="Bishop Mobility Cane Holster"
  className="aspect-square rounded-2xl shadow-2xl object-cover"
/>
```

### 2. Add Your Logo

Create a logo component in `/components/Logo.tsx` and add it to the Hero section.

### 3. Update Contact Information

Edit `components/Footer.tsx` to update:
- Email address
- Phone number
- Physical address

### 4. Configure Form Submission

The lead form (`components/LeadForm.tsx`) currently logs to console. To connect it to your backend:

**Option A: Email Service (Recommended for MVP)**
```typescript
// Install a service like Resend, SendGrid, or Mailgun
// Update the handleSubmit function to send emails

const response = await fetch('/api/submit-lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

**Option B: Google Sheets Integration**
Use a service like SheetDB or Google Apps Script to save leads directly to a spreadsheet.

**Option C: CRM Integration**
Connect to HubSpot, Salesforce, or your preferred CRM.

### 5. Customize Colors

The site uses a blue color scheme. To change:

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color',
        // ... add your color palette
      }
    }
  }
}
```

Then update component classes from `bg-blue-600` to `bg-primary-600`, etc.

## 📱 Sections Overview

1. **Hero** - Main headline, value proposition, CTA buttons
2. **Problem** - Addresses daily struggles with existing solutions
3. **Solution** - Showcases the product's unique features
4. **Founder Story** - Jim Bishop's journey and company philosophy
5. **Product Details** - Technical specifications and engineering highlights
6. **Lead Form** - Captures visitor information for early access
7. **Footer** - Contact info, links, trust indicators

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., bishopmobility.com)
4. Follow the DNS configuration instructions

## 📊 Analytics Integration

To track visitor behavior, add analytics:

### Google Analytics
```typescript
// Add to app/layout.tsx
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

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
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

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Form submission endpoint
NEXT_PUBLIC_FORM_ENDPOINT=your-endpoint-here

# Email service API key
EMAIL_API_KEY=your-key-here

# Analytics IDs
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📝 Content Updates

All content is in the component files. To update text:

- **Headlines**: Edit the `<h1>`, `<h2>`, `<h3>` tags in each component
- **Body Copy**: Edit the `<p>` tags
- **CTAs**: Update button text in Hero and LeadForm components
- **Meta Tags**: Edit `app/layout.tsx` for SEO titles and descriptions

## 🎯 Conversion Optimization Tips

1. **A/B Test Headlines**: Try different versions of "Freedom at Your Side"
2. **Add Social Proof**: Include testimonials when available
3. **Video**: Consider adding a product demo video in the Hero section
4. **Trust Badges**: Add security/privacy badges near the form
5. **Exit Intent Popup**: Capture leaving visitors with a special offer

## 📞 Support

For questions or issues:
- Email: info@bishopmobility.com
- Review the Next.js docs: https://nextjs.org/docs

## 📄 License

© 2025 Bishop Mobility Solutions, LLC. All rights reserved.

---

**Built with care for those who deserve dignity in every detail.**