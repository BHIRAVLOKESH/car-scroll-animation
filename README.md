# Premium Scroll-Driven Hero Animation

**Candidate Name:** Kallakuri Bhirav Lokesh
**Submission Date:** 28 February, 2026

---

### 🚀 Links
- **GitHub Repository:** [https://github.com/BHIRAVLOKESH/car-scroll-animation](https://github.com/BHIRAVLOKESH/car-scroll-animation)
- **Live Demo:** [https://lucent-maamoul-182ba7.netlify.app](https://lucent-maamoul-182ba7.netlify.app)

---

### 📋 Project Overview & Requirements

This project implements a high-end, scroll-driven hero section that meets all the functional and performance requirements specified.

#### 1. Hero Section Layout
- **Above the Fold:** The hero section occupies the full initial screen (`100vh`).
- **Headline:** Displays the letter-spaced headline **"W E L C O M E  I T Z F I Z Z"** with precision tracking.
- **Impact Metrics:** Below the headline, four distinct percentage-based statistics with descriptions are displayed using a modern glassmorphic design.

#### 2. Initial Load Animation
- **Smooth Reveal:** The headline uses a staggered character-reveal animation (fade + upward glide) on page load.
- **Staggered Stats:** The impact metrics animate in one by one with a subtle delay and back-easing for a premium feel.

#### 3. Scroll-Based Animation (Core Feature)
- **Fluid Motion:** The main visual element (top-view car) moves smoothly across the screen based on the user's scroll position.
- **Scroll-Tied Progress:** Animation is strictly tied to scroll progress (not autoplay) using GSAP ScrollTrigger.
- **Easing:** Built-in interpolation and easing ensure the motion feels natural, fluid, and responsive to user input.

#### 4. Motion & Performance Guidelines
- **Performance Optimized:** Animations prioritize `transform` (translate, scale, rotate) and `opacity` to ensure hardware acceleration and 60fps performance.
- **Efficient Scaling:** Avoided heavy calculations and layout reflows by utilizing GSAP's optimized scroll handling.

---

### 💻 Tech Stack
- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 4
- **Animation:** GSAP (GreenSock Animation Platform) + ScrollTrigger
- **Typography:** Outfit & Space Grotesk (Google Fonts)

---

### 🛠️ Setup Instructions
1. Clone the repository: `git clone https://github.com/BHIRAVLOKESH/car-scroll-animation.git`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

---

### 📂 Clean Code & Structure
- Logic separated into clean React components.
- GSAP hooks used for lifecycle management.
- Excluded all system-specific and AI-generated metadata.

---

Thank you for reviewing my submission.

— Kallakuri Bhirav Lokesh
