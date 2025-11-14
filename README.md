# SERVE Charity Website

A modern, accessible website for SERVE, a 40+ year old registered charity providing care services to older people and adults with disabilities in Northamptonshire.

## 🏆 About SERVE

**SERVE** has won "Best homecare team, East Midlands" at the Great British Care Awards 2024. We are a voluntary organisation and registered charity that has been providing services and assistance to older people and adults with disabilities, and their carers across Northamptonshire for over four decades.

- **Charity Number**: 1043321
- **Company Number**: 2951827
- **Location**: 8 West Street, Rushden, Northants NN10 0RT
- **Contact**: 01933 315555 | info@serve.org.uk

## 🌟 Our Mission & Vision

**Mission**: To help adults who require support services to maintain their independence on a daily basis.

**Vision**: A compassionate community that fully respects the rights of older people and people with disabilities, where age and differing abilities are not barriers to opportunity, fulfilment and dignity.

## 🛠️ Technology Stack

This website is built with the latest modern web technologies:

- **Framework**: Next.js 15.5.6 with App Router
- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.7.2
- **Icons**: Heroicons React 2.2.0
- **Build Tool**: Next.js with SWC
- **Deployment**: Ready for Vercel, Netlify, or static export

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd serve-charity-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

### Core Services
- **Personal & Domestic Care** - Award-winning CQC registered homecare
- **Day Care & Meals on Wheels** - Ron Manning Day and Activity Centre
- **Community Transport** - Medical appointments and family visits
- **Countywide Befriending** - Support for vulnerable adults
- **Carers Support** - Respite services for family carers
- **Community Services** - Day trips, hearing aid servicing, DBS checks

### Website Features
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant
- **Performance** - Optimized for fast loading
- **SEO Ready** - Structured data and meta tags
- **Modern UI** - Clean, trustworthy design

## 🎯 Design Principles

- **Trust & Professionalism**: Clean design reflecting 40+ years of service
- **Accessibility First**: Large text, high contrast, keyboard navigation
- **Local Community Feel**: Warm, welcoming, personal touch
- **Awards & Credentials**: Prominently display CQC rating and awards

## 🆕 Latest Updates

- ✅ **Logo Integration**: Added official SERVE logo to header
- ✅ **Enhanced Forms**: Functional contact and volunteer forms with validation
- ✅ **Project Tracking**: Built-in todo list component for development progress
- ✅ **File Cleanup**: Removed build artifacts, keeping only project files
- ✅ **Theme Update**: Updated color palette to match brand identity
- ✅ **MajorTitle Component**: Unified heading styling across all pages
- ✅ **Policy Pages**: Added Privacy, Terms, and Accessibility pages
- ✅ **Leadership Update**: CEO Tony Gibbs content and photo

## 📐 Component Library

### MajorTitle Component

A reusable component for consistent major page headings with optional accent text:

```tsx
import MajorTitle from '@/components/MajorTitle'

// Basic usage
<MajorTitle primary="About" secondary="SERVE" dark />

// With custom accent color
<MajorTitle 
  primary="Our" 
  secondary="Services" 
  dark 
  size="large" 
  accentClass="text-serve-blue-200" 
/>

// Light background variant
<MajorTitle primary="Privacy" secondary="Policy" />
```

**Props:**
- `primary` (string, required): Main heading text
- `secondary` (string, optional): Accent text displayed on second line
- `dark` (boolean, default: false): White text for dark backgrounds
- `size` ('default' | 'large', default: 'default'): Heading size
- `accentClass` (string, optional): Custom Tailwind class for accent color
- `className` (string, optional): Additional classes for the h1 element

**Default Styling:**
- Default size: `text-4xl md:text-5xl`
- Large size: `text-5xl md:text-6xl lg:text-7xl`
- Light mode: `text-serve-blue-800` with `text-serve-blue-600` accent
- Dark mode: `text-white` with `text-serve-blue-200` accent

## 🌈 Color Palette

The website uses a carefully chosen color palette that conveys trust and care:

```css
/* SERVE Blue */
--serve-blue-50: #eff6ff
--serve-blue-500: #3b82f6
--serve-blue-800: #1e40af
--serve-blue-900: #1e3a8a

/* SERVE Green */
--serve-green-50: #f0fdf4
--serve-green-500: #22c55e
--serve-green-600: #16a34a
--serve-green-800: #166534
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- High contrast color ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Alternative text for images

## 🔗 External Integrations

- **JustGiving**: https://www.justgiving.com/serve-jg
- **Facebook**: SERVE234
- **LinkedIn**: serve-nvca
- **CQC Report**: https://www.cqc.org.uk/location/1-2165219210

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services overview
│   ├── About.tsx        # About section
│   ├── Awards.tsx       # Awards & recognition
│   ├── News.tsx         # News & events
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Site footer
```

## 🚀 Deployment

### Static Export (GitHub Pages, Netlify)
```bash
npm run build
```

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Custom Server
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is created for SERVE charity. All rights reserved.

## 🆘 Support

For technical support or questions about this website:

- **Email**: info@serve.org.uk
- **Phone**: 01933 315555

For website development issues, please open a GitHub issue.

---

**SERVE** - Supporting Independence in Northamptonshire for over 40 years.