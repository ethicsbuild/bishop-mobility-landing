# Content Update Guide

This guide shows you how to update text, images, and other content on your Bishop Mobility Solutions landing page without needing to understand code.

## 📝 Updating Text Content

### Hero Section (Top of Page)

**File**: `components/Hero.tsx`

**What to update**:
- Main headline (currently "Freedom at Your Side")
- Subheadline text
- Bullet points
- Button text

**How to update**:
1. Open `components/Hero.tsx`
2. Find the text between `>` and `<` tags
3. Replace with your new text
4. Save the file

Example:
```tsx
// Change this:
<h1 className="text-gray-900">
  Freedom at Your Side
</h1>

// To this:
<h1 className="text-gray-900">
  Your New Headline Here
</h1>
```

### Problem Section

**File**: `components/Problem.tsx`

Update the three problem cards:
- Leaning It Against Walls
- Awkward Clips & Hooks
- Loss of Independence

### Solution Section

**File**: `components/Solution.tsx`

Update the three benefit descriptions:
- Effortless Insertion
- Rock-Solid Security
- Instant Retrieval

### Founder Story

**File**: `components/FounderStory.tsx`

Update Jim's story, the quote, and statistics.

### Product Details

**File**: `components/ProductDetails.tsx`

Update technical features and specifications.

### Contact Form

**File**: `components/LeadForm.tsx`

Update form labels, placeholder text, and success messages.

### Footer

**File**: `components/Footer.tsx`

Update:
- Company description
- Contact email: Change `info@bishopmobility.com`
- Phone number: Change `(512) 555-0100`
- Location: Change `Buda, Texas`

## 🖼️ Replacing Images

### Step 1: Add Your Images

1. Place your images in the `/public` folder
2. Use descriptive names like:
   - `hero-product.jpg` - Main product photo
   - `product-detail.jpg` - Close-up of dual S-curve
   - `founder-jim-bishop.jpg` - Jim's portrait
   - `logo.png` - Company logo

### Step 2: Update Image References

**Hero Section** (`components/Hero.tsx`):

Replace the placeholder div with:
```tsx
<img 
  src="/hero-product.jpg" 
  alt="Bishop Mobility Cane Holster"
  className="w-full h-full object-cover rounded-2xl shadow-2xl"
/>
```

**Solution Section** (`components/Solution.tsx`):

Replace the placeholder div with:
```tsx
<img 
  src="/product-detail.jpg" 
  alt="Dual S-curve design detail"
  className="w-full h-full object-cover rounded-2xl shadow-xl"
/>
```

**Founder Story** (`components/FounderStory.tsx`):

Replace the placeholder div with:
```tsx
<img 
  src="/founder-jim-bishop.jpg" 
  alt="Jim Bishop, Founder"
  className="w-full h-full object-cover rounded-2xl shadow-lg"
/>
```

### Image Best Practices

- **Format**: Use JPG for photos, PNG for logos
- **Size**: Resize images before uploading
  - Hero: 1200x1200px
  - Product details: 1000x750px
  - Founder photo: 600x800px
- **Compression**: Use tools like TinyPNG to reduce file size
- **Alt text**: Always describe the image for accessibility

## 🎨 Changing Colors

### Primary Color (Currently Blue)

**File**: `tailwind.config.ts`

To change from blue to another color:

1. Find all instances of `blue-` in component files
2. Replace with your color choice:
   - `red-` for red
   - `green-` for green
   - `purple-` for purple
   - `gray-` for gray
   - etc.

Example:
```tsx
// Change this:
className="bg-blue-600 text-white"

// To this:
className="bg-green-600 text-white"
```

### Custom Brand Colors

If you have specific brand colors, update `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#your-hex-color',
        secondary: '#your-hex-color',
      }
    }
  }
}
```

Then use in components:
```tsx
className="bg-brand-primary text-white"
```

## 📧 Setting Up Form Submissions

### Option 1: Email Notifications (Easiest)

Use a service like **Formspree** or **EmailJS**:

1. Sign up at https://formspree.io
2. Get your form endpoint URL
3. Update `components/LeadForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('submitting')
  
  try {
    const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setStatus('success')
      setMessage('Thank you! We\'ll be in touch soon.')
      setFormData({ name: '', email: '', phone: '', mobilityNeeds: '' })
    }
  } catch (error) {
    setStatus('error')
    setMessage('Something went wrong. Please try again.')
  }
}
```

### Option 2: Google Sheets Integration

Use **SheetDB** to save leads to a spreadsheet:

1. Create a Google Sheet
2. Sign up at https://sheetdb.io
3. Connect your sheet and get API URL
4. Update the form submission code with SheetDB endpoint

### Option 3: Direct Email via API

Create an API route in Next.js:

**File**: `app/api/submit-lead/route.ts`

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Send email using your preferred service
  // (Resend, SendGrid, Mailgun, etc.)
  
  return NextResponse.json({ success: true })
}
```

## 🔍 SEO Updates

### Page Title & Description

**File**: `app/layout.tsx`

Update the metadata:
```typescript
export const metadata: Metadata = {
  title: "Your New Title | Bishop Mobility Solutions",
  description: "Your new description here - keep it under 160 characters",
  keywords: "your, keywords, here",
}
```

### Open Graph (Social Media Sharing)

Add an image for social media previews:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    title: "Bishop Mobility Solutions",
    description: "Freedom at Your Side",
    images: ['/og-image.jpg'], // Add this image to /public folder
  },
}
```

## 📱 Testing Your Changes

After making updates:

1. **Save all files**
2. **Check the preview** in your browser
3. **Test on mobile** (use browser dev tools or actual device)
4. **Verify forms work** by submitting a test
5. **Check all links** click through every button and link

## 🚀 Publishing Changes

### If using Vercel (Recommended):

1. Commit your changes:
```bash
git add .
git commit -m "Update content and images"
git push
```

2. Vercel automatically deploys your changes
3. Check your live site in 2-3 minutes

### If using another host:

1. Build the project: `npm run build`
2. Upload the `.next` folder to your server
3. Restart your application

## 🆘 Common Issues

### Text looks weird after updating
- Make sure you didn't accidentally delete any `>` or `<` characters
- Check that quotes are properly closed

### Images not showing
- Verify image is in `/public` folder
- Check file name matches exactly (case-sensitive)
- Ensure path starts with `/` like `/image.jpg`

### Form not working
- Check browser console for errors (F12 key)
- Verify your form endpoint URL is correct
- Test with a simple email first

### Colors not changing
- Make sure you changed all instances of the color
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Rebuild the project: `npm run build`

## 📞 Need Help?

If you get stuck:
1. Check the error message in the browser console (F12)
2. Review the original file to see what changed
3. Use Git to revert changes: `git checkout -- filename.tsx`
4. Reach out for technical support

---

**Remember**: Always test changes locally before deploying to production!