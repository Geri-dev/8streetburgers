# 8 Street Burgers Tirana - Restaurant Website Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Shake Shack**: Premium fast-casual burger brand aesthetic
- **Five Guys**: Bold, energetic street-food vibe
- **Urban Street Food**: Dark, modern, high-contrast design
- **Style**: Dark Mode + Urban Street Food + Premium Fast Casual

### Color Palette
- Primary: #0A0A0A (Deep Black - background)
- Secondary: #1A1A1A (Charcoal - cards/sections)
- Accent: #FF4500 (Vibrant Orange-Red - CTAs and highlights)
- Secondary Accent: #DC2626 (Red - hover states)
- Text: #FFFFFF (White), #A3A3A3 (Light Gray - secondary text)
- Success: #22C55E (Green - for ratings/reviews)

### Typography
- Heading1: Inter font-weight 800 (56px) - Hero headlines
- Heading2: Inter font-weight 700 (40px) - Section titles
- Heading3: Inter font-weight 600 (28px) - Subsection titles
- Body/Normal: Inter font-weight 400 (16px) - Body text
- Body/Emphasis: Inter font-weight 600 (16px) - Emphasized text
- Navigation: Inter font-weight 600 (14px) - Menu items
- CTA Buttons: Inter font-weight 700 (16px) - Call-to-action text

### Key Component Styles
- **Buttons (Primary)**: Orange-red background (#FF4500), white text, 8px rounded, hover: brighten to #FF5722
- **Buttons (Secondary)**: Transparent with white border, white text, hover: white background with black text
- **Cards**: Dark charcoal (#1A1A1A), subtle border (#2A2A2A), 16px rounded, hover: lift 4px with glow
- **Navigation**: Fixed dark header with blur effect, smooth scroll behavior
- **Icons**: Lucide React icons, 24px size, orange-red accent color

### Layout & Spacing
- Hero section: Full viewport height with parallax effect
- Section padding: 80px vertical on desktop, 48px on mobile
- Content max-width: 1200px centered
- Grid spacing: 24px gaps for cards and content blocks
- Card hover: Lift 4px with orange glow, 300ms transition

### Images to Generate
1. **hero-burger-close-up.jpg** - Extreme close-up of a juicy smash burger with melted cheese, caramelized edges, sesame bun, dramatic lighting (Style: photorealistic, dark moody food photography)
2. **smash-burger-action.jpg** - Burger being smashed on griddle with steam rising, action shot (Style: photorealistic, high contrast)
3. **burger-combo-meal.jpg** - Complete meal with burger, crispy fries, and drink on dark background (Style: photorealistic, top-down view)
4. **restaurant-interior.jpg** - Modern urban restaurant interior with neon signs, dark walls, industrial vibe (Style: photorealistic, moody atmosphere)
5. **fresh-ingredients.jpg** - Fresh beef patties, vegetables, buns arranged artistically (Style: photorealistic, clean food styling)
6. **logo-8-street-burgers.png** - Bold minimalist logo with "8" and burger icon, urban street style (Style: vector-style, transparent background)

---

## Development Tasks

### 1. Setup & Image Generation
- Read template structure and understand file organization
- Generate all 6 images using ImageCreator.generate_images
- Verify image paths and update todo.md with actual paths

### 2. Core Layout Components
- **src/components/Navigation.tsx** - Fixed header with logo, smooth scroll navigation, mobile menu
- **src/components/Footer.tsx** - Social media links, copyright, contact info
- **src/components/CTAButton.tsx** - Reusable primary/secondary button component

### 3. Hero Section
- **src/components/HeroSection.tsx**
  - Full-screen hero with background burger image
  - Bold headline: "The Best Smash Burger in Tirana"
  - Subtext about crispy patties and premium beef
  - Two CTA buttons: "Order on Wolt" and "Get Directions"
  - Parallax scroll effect

### 4. About Section
- **src/components/AboutSection.tsx**
  - Owner's story with emphasis on quality
  - Split layout: text + image
  - Key points: smashed patties, fresh buns, quality beef, homemade sauces

### 5. Why Choose Us Section
- **src/components/WhySection.tsx**
  - Icon grid with 5 highlights
  - Icons: Flame (crispy), Leaf (fresh), Zap (bold flavors), Award (quality), DollarSign (value)
  - Animated hover effects

### 6. Menu Preview Section
- **src/components/MenuSection.tsx**
  - Menu cards for burgers, combos, fries, drinks
  - Price range display
  - "View Full Menu" CTA

### 7. Reviews Section
- **src/components/ReviewsSection.tsx**
  - 3 featured Google reviews with 5-star ratings
  - Customer quotes in cards
  - Overall rating display (4.8/5 - 37 reviews)

### 8. Location & Contact Section
- **src/components/LocationSection.tsx**
  - Embedded Google Maps iframe
  - Business info: address, phone, hours
  - Two CTAs: "Call Now" and "Get Directions"

### 9. Main Page Integration
- **src/pages/Index.tsx**
  - Import and arrange all sections
  - Smooth scroll behavior
  - Mobile-responsive layout

### 10. Styling & Animations
- Update **src/index.css** with custom scrollbar, smooth scroll, animations
- Add hover effects and transitions
- Ensure dark theme consistency

### 11. SEO & Meta Tags
- Update **index.html** with proper meta tags
- Title: "8 Street Burgers Tirana | Best Smash Burger in Tirana"
- Description: SEO-optimized for local search
- Open Graph tags for social sharing

### 12. Final Testing
- Run `pnpm run lint` to check for errors
- Run `pnpm run build` to verify production build
- Verify mobile responsiveness
- Check all CTAs and links