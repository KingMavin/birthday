# Design Guidelines: Interactive Romantic Birthday Card for Marshy

## Design Approach
**Reference-Based Approach**: Drawing inspiration from romantic, playful web experiences with interactive storytelling elements. The design prioritizes emotional engagement, smooth animations, and delightful micro-interactions.

## Core Design Elements

### A. Color Palette
**Primary Colors (Light Mode Only)**
- Background: Soft pink/pastel gradient (330 100% 95%)
- Accent Pink: (340 90% 85%)
- Text: Dark romantic pink (340 60% 30%)
- Button Primary: (350 80% 70%)
- Hearts/Sparkles: (355 85% 75%)

### B. Typography
- **Primary Font**: Handwriting/script style (e.g., "Dancing Script", "Pacifico", "Cookie") via Google Fonts
- **Headings**: 2.5rem to 4rem, playful weight
- **Body Text**: 1.125rem to 1.5rem, medium weight
- **Button Text**: 1.25rem, medium to semibold

### C. Layout System
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16 (p-4, h-8, m-6, etc.)
- **Content Width**: max-w-2xl for centered content
- **Vertical Rhythm**: py-12 to py-20 for page sections

### D. Component Library

**Navigation/Flow**
- Full-screen page transitions with soft fade-in effects (300-500ms)
- No traditional navigation - story-driven linear flow
- Back button only appears where contextually appropriate

**Buttons**
- Large, rounded buttons (px-8 py-4, rounded-full)
- Playful hover states with scale transforms (scale-105)
- Primary: Filled pink with white text
- Secondary: Outline with pink border
- Interactive buttons with special behaviors (shrinking, dodging)

**Interactive Elements**
- Yes/No button pairs with playful rejection flows
- Shrinking button animation (gradually reduces scale to 0)
- Dodging button that moves on hover/click attempt (random position changes)
- All interactions feel smooth and responsive

**Media Display**
- GIF containers: Centered, max-w-sm to max-w-md
- Image placeholders: Rounded corners (rounded-2xl), soft shadows
- Photos with poems: Two-column layout on desktop, stacked on mobile

**Text Blocks**
- Poems: Centered, generous line-height (1.8 to 2)
- Questions: Large, bold, centered
- Supporting text: Smaller, playful tone

### E. Animations

**Background Effects**
- Continuous floating hearts animation (multiple sizes, slow upward drift)
- Soft sparkle/bubble animations appearing randomly
- Gradient animations for romantic glow effects

**Page Transitions**
- Fade-in with scale (0.95 to 1) for new pages
- Smooth opacity transitions (300-500ms)
- Staggered element appearances within pages

**Interactive Animations**
- Button hover: Subtle scale and shadow changes
- Shrinking button: Gradual scale reduction over 2-3 seconds
- Dodging button: Quick position changes with ease-out timing
- Heart pulsing on hover over romantic elements

**Special Effects**
- Heart burst on "Yes" selection
- Confetti or sparkles on final acceptance
- Gentle bounce on GIF containers

## Page-Specific Guidelines

### Page 1 - Welcome
- Dancing cat GIF at top (max-w-xs)
- "Hello Marshy" - Large playful heading (4rem)
- Question text below (1.5rem)
- Button pair centered with 4 spacing between
- Sad cat rejection flow: GIF + text + retry button (all centered)

### Page 2 - Memories
- Grid layout for photos (2 columns on desktop)
- Each photo with adjacent poem text
- Floating hearts in background
- Next button at bottom center

### Page 3 - Birthday Poem
- Heart bear GIF centered at top
- Poem in elegant script font, centered
- Background with heart sparkles
- Thank you button below poem

### Page 4 - Reaction
- Cute cat GIF at top
- Question text centered
- Button pair with shrinking mechanic for "No"
- Smooth transition as "Yes" button grows

### Page 5 - Sweet Surprise
- Blushing bear GIF prominent
- Teasing text with emoji
- Single Next button
- Anticipation-building spacing

### Page 6 - The Question
- Romantic background glow
- Large question text
- Button pair with dodging "No" button
- "No" button repositions on hover attempt

### Final Scene
- Kissing bear GIF as hero element
- Large "Thank you 💖" text
- Optional: Ambient heart animations filling screen
- Soft pink glow background

## Images

**Required GIF Placements**:
1. **Dancing cat GIF** - Welcome page top (playful, energetic)
2. **Sobbing cat GIF** - Rejection flow (sad, teary)
3. **Heart bear GIF** - Birthday poem page (romantic, cute)
4. **Cute cat GIF** - Reaction page (adorable, questioning)
5. **Blushing bear GIF** - Sweet surprise page (shy, loving)
6. **Kissing bear GIF** - Final scene (romantic, celebratory)

**Photo Placeholders** - Memories page (3-4 images of Marshy with poems)

No large hero images - GIFs serve as focal points throughout the experience.

## Technical Specifications

**Responsiveness**
- Mobile-first approach
- Stack all multi-column layouts on mobile
- Scale font sizes appropriately (base: 16px mobile, 18px desktop)
- Touch-friendly button sizes (min 48px height)

**Performance**
- Lightweight GIF optimization
- CSS animations preferred over JavaScript where possible
- Lazy load images on multi-page flow
- Smooth 60fps animations

**Accessibility**
- High contrast text on pink backgrounds
- Focus states for all interactive elements
- Alternative text for all GIFs
- Keyboard navigation support for button interactions