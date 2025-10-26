# Kate Hurley - Modern Website

A beautiful, modern React/Next.js website for Kate Hurley, music educator and mindset coach.

## Overview

This is a complete redesign of katehurley.com with a modern tech stack and beautiful UI/UX while maintaining the warm, artistic vibe of the original site.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions

## Design Features

### Color Palette
- **Navy Dark** (#1B3B3E) - Primary background
- **Gold** (#D4A574) - Accent color
- **Peach** (#FFCDB2) - Secondary accent

### Key Features
- Responsive design (mobile-first)
- Smooth scroll animations
- Modern gradient effects
- Hover interactions and transitions
- Elegant typography (Inter + Playfair Display)
- Accessible navigation with mobile menu
- SEO optimized
- **Netlify Forms integration** - Contact form with dropdown for service selection

## Pages

1. **Home** (`/`) - Hero section with service overview and call-to-action
2. **Kate's Story** (`/about`) - Personal journey and background
3. **Music Lessons** (`/lessons`) - Be-Loved Music Lessons details and pricing
4. **Mindset Coaching** (`/coaching`) - Coaching services and IDEA framework
5. **Music** (`/music`) - Musical journey and projects
6. **Contact** (`/contact`) - Contact form, contact information, and social media

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Project Structure

```
kate-hurley/
├── app/                      # Next.js App Router pages
│   ├── about/               # Kate's Story page
│   ├── coaching/            # Mindset Coaching page
│   ├── contact/             # Contact page
│   ├── lessons/             # Music Lessons page
│   ├── music/               # Music page
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Navigation.tsx       # Main navigation component
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Content Highlights

### Music Lessons
- Voice & Singing (Voice Color Method)
- Piano Lessons
- Songwriting
- Beginning Guitar
- Pricing: $33 (30min), $48 (45min), $66 (60min)

### Mindset Coaching
- IDEA Model (Identify, Discover, Explore, Act)
- Free 30-minute consultation
- $75-100 sliding scale for 50-minute sessions
- Available in-person (Asheville, NC) or online

### Contact
- Email: iamkatehurley@gmail.com
- Phone (Lessons): 828-777-4585
- Phone (Coaching): 303-946-9875
- Location: Fairview & Asheville, NC

## Deployment to Netlify

This site is optimized for Netlify deployment with built-in form handling.

### Deploy to Netlify

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your repository
   - Netlify will auto-detect Next.js settings

3. **Configure Build Settings** (auto-detected)
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy!**
   - Click "Deploy site"
   - Your site will be live in minutes

### Netlify Forms

The contact form is configured to work automatically with Netlify Forms:

- **Form name:** `contact`
- **Fields:**
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Interest dropdown (required) - Voice Lessons, Piano Lessons, Songwriting, Guitar, Mindset Coaching, Both, or General Inquiry
  - Message (required)

**After deployment:**
1. Go to your Netlify dashboard
2. Navigate to Forms tab
3. You'll see form submissions there
4. Set up email notifications in Site settings > Forms > Form notifications

### Alternative Deployment

This site can also be deployed to:
- **Vercel** (Note: Forms won't work automatically, you'll need to add a backend)
- **AWS Amplify**
- Any Node.js hosting platform

## Future Enhancements

- Add blog integration for Prodigal Mind content
- Integrate online booking system
- Add student testimonials section
- Include audio/video player for music samples
- Add newsletter signup
- Implement contact form with email integration

## License

All content © Kate Hurley. All rights reserved.
