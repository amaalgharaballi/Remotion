# Hobi Instagram Ad - Remotion Project

A minimal, fun 12-second Instagram ad (1:1 square format) for **tryhobi.com** - Kuwait's hobby marketplace.

## 📱 Video Specs

- **Format:** 1:1 square (1080×1080)
- **Duration:** 12 seconds (360 frames at 30fps)
- **Style:** Clean, modern, playful flat UI
- **Export:** MP4, Instagram feed ready

## 🎨 Brand Guidelines (Strictly Followed)

### Colors
```
Primary Orange:      #F36A21
Dark Orange/Accent:  #E9540D
Light Orange Tint:   #FFE6D6
Background:          #FFF6EF
Primary Text:        #2B2B2B
Muted Text/Icons:    #8A8A8A
```

### Typography
- **Font:** Poppins (loaded from Google Fonts)
- **Headings:** Poppins SemiBold (600)
- **Body Text:** Poppins Regular (400)

### Design System
- Flat UI design inspired by app screens
- Rounded corners (16-20px border radius)
- Soft spacing and clean layouts
- No gradients, photos, or heavy shadows
- Minimal depth effects only

## 🎬 Scene Breakdown

### Scene 1: Brand Intro (0-2s)
- Center logo text: **"Hobi"**
- Subtext: "The hobby marketplace in Kuwait"
- Soft fade + gentle scale-in animation

### Scene 2: Explore Hobbies (2-6s)
- Title: "Explore hobbies"
- 4 category pills animate in sequentially:
  - 🎬 Film
  - 📷 Digital Cameras
  - 🖨️ 3D Printing
  - ✍️ Autographed Collectables & Trading Cards
- Slide-in animation with stagger effect

### Scene 3: Buy • Sell • Showcase (6-9s)
- Bold centered text with bullet separators
- 3 minimal listing cards float in
- Cards use flat UI design with rounded corners

### Scene 4: Call to Action (9-12s)
- Message: "Built for hobbyists in Kuwait"
- URL: **tryhobi.com** (dark orange)
- Animated underline with micro-bounce

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. **Quick start with Remotion:**
```bash
npm init video
```

2. **Or install dependencies manually:**
```bash
npm install
```

### Running the Project

**Preview the video:**
```bash
npm start
```
Opens Remotion Player in your browser at http://localhost:3000

**Render the final video:**
```bash
npm run build
```
Creates `out/hobi-instagram-ad.mp4`

**High-quality render:**
```bash
npx remotion render HobiInstagramAd out/hobi-instagram-ad.mp4 --codec h264 --crf 18
```

**Instagram-optimized (smaller file):**
```bash
npx remotion render HobiInstagramAd out/hobi-instagram-ad.mp4 --codec h264 --crf 23
```

## 🎯 Motion & Animation Rules

The video follows strict motion guidelines:

✅ **Allowed:**
- Fade transitions
- Slide animations (horizontal/vertical)
- Scale transforms
- Spring-based easing

❌ **Avoided:**
- Fast cuts or jarring transitions
- Flashy effects or motion blur
- Rotations (except minimal accent elements)
- Zoom effects

All animations use:
- Soft easing curves
- Smooth spring physics (damping: 100, stiffness: 200)
- Staggered reveals for visual hierarchy

## 📝 Customization Guide

### Changing Text Content

**Scene 1 - Brand Intro:**
```javascript
// HobiInstagramAd.jsx, Scene1 component
<h1>Hobi</h1>
<p>The hobby marketplace in Kuwait</p>
```

**Scene 2 - Categories:**
```javascript
// HobiInstagramAd.jsx, Scene2 component
const categories = [
  { icon: '🎬', name: 'Film', delay: 20 },
  { icon: '📷', name: 'Digital Cameras', delay: 35 },
  // Add more or modify existing
];
```

**Scene 4 - CTA:**
```javascript
// HobiInstagramAd.jsx, Scene4 component
<p>Built for hobbyists<br />in Kuwait</p>
<p>tryhobi.com</p>
```

### Adjusting Timing

Change scene durations in `HobiInstagramAd.jsx`:
```javascript
const SCENE_1_DURATION = 60;  // 2 seconds
const SCENE_2_DURATION = 120; // 4 seconds
const SCENE_3_DURATION = 90;  // 3 seconds
const SCENE_4_DURATION = 90;  // 3 seconds
```

**Total duration** must match `Root.jsx`:
```javascript
durationInFrames={360} // = sum of all scene durations
```

### Modifying Colors

⚠️ **Warning:** Only modify if you have updated brand guidelines

```javascript
// HobiInstagramAd.jsx, line ~10
const colors = {
  primaryOrange: '#F36A21',
  darkOrange: '#E9540D',
  lightOrangeTint: '#FFE6D6',
  background: '#FFF6EF',
  primaryText: '#2B2B2B',
  mutedText: '#8A8A8A',
};
```

### Animation Speed

Adjust spring configuration for different feel:
```javascript
// Softer, slower animation
config: {
  damping: 150,
  stiffness: 100,
}

// Snappier, faster animation
config: {
  damping: 80,
  stiffness: 300,
}
```

## 🎵 Adding Audio (Optional)

To add background music:

1. Add audio file to `/public` folder
2. Import Audio component in `HobiInstagramAd.jsx`:
```javascript
import { Audio } from 'remotion';

// Inside the main component
<Audio src="/music.mp3" volume={0.5} />
```

3. Adjust volume as needed (0.0 to 1.0)

**Recommended:** Use upbeat, light background music at low volume (0.3-0.5)

## 📤 Export Settings

### For Instagram Feed (Recommended)
```bash
npx remotion render HobiInstagramAd out/hobi-instagram-ad.mp4 \
  --codec h264 \
  --crf 23 \
  --preset medium
```

### For Maximum Quality
```bash
npx remotion render HobiInstagramAd out/hobi-instagram-ad.mp4 \
  --codec h264 \
  --crf 18 \
  --preset slow
```

### File Size Targets
- Instagram accepts up to 100MB
- Aim for 5-15MB for good quality
- CRF 23 typically produces 8-12MB files

## 🎨 Design Principles

This ad follows Hobi's design system:

1. **Flat UI Aesthetic** - No gradients, shadows minimal
2. **Generous Whitespace** - Clean, uncluttered layouts
3. **Rounded Corners** - Friendly, approachable feel
4. **Orange as Primary** - Brand color throughout
5. **Poppins Typography** - Modern, readable, versatile
6. **Playful Icons** - Emoji-based category indicators

## 🔍 Preview Tips

When previewing in Remotion Player:
- Scrub the timeline to see individual animations
- Use left/right arrow keys to step through frames
- Press spacebar to play/pause
- Click the "Render" button for export options

## 📱 Instagram Upload Checklist

Before uploading to Instagram:

- [ ] Video is 1080×1080 (square format)
- [ ] Duration is 10-12 seconds
- [ ] File size under 100MB
- [ ] Video quality is clear on mobile preview
- [ ] Brand colors are accurate
- [ ] Text is readable on mobile
- [ ] CTA (tryhobi.com) is visible

## 🐛 Troubleshooting

**Fonts not loading?**
- Check internet connection (Poppins loads from Google Fonts)
- Try clearing browser cache
- Restart Remotion preview server

**Slow render times?**
- Use `--preset fast` for quick previews
- Reduce CRF value for smaller files
- Close other applications

**Video looks different after render?**
- Preview uses browser rendering
- Final render uses FFmpeg
- Colors should match, but gradients may vary slightly

## 📦 Project Structure

```
hobi-instagram-ad/
├── HobiInstagramAd.jsx    # Main video component
├── Root.jsx               # Remotion composition config
├── index.ts               # Entry point
├── package.json           # Dependencies
├── remotion.config.ts     # Remotion settings
├── public/
│   └── index.html         # HTML with Poppins font
└── out/
    └── hobi-instagram-ad.mp4  # Rendered video
```

## 🎯 Next Steps

1. **Preview the video** - Make sure everything looks good
2. **Adjust if needed** - Tweak timing, text, colors
3. **Render** - Export high-quality MP4
4. **Test on mobile** - Transfer to phone and view
5. **Upload to Instagram** - Use Square (1:1) format
6. **Monitor performance** - Track engagement metrics

## 📚 Resources

- [Remotion Documentation](https://www.remotion.dev/docs/)
- [Instagram Video Specs](https://www.facebook.com/business/help/3990092484492878)
- [Poppins Font on Google Fonts](https://fonts.google.com/specimen/Poppins)

---

**Built with ❤️ for Hobi - Kuwait's hobby marketplace**
