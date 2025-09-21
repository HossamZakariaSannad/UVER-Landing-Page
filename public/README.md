# UVER – College Discovery App
A responsive, modern web application built for the Frontend Internee Technical Assignment. It implements a university discovery app UI based on the provided Dribbble design, using React, Tailwind CSS, and Framer Motion for animations.

## 🚀 Setup Instructions
### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd uver-app
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Run the Development Server
```bash
npm run dev
```

## ✨ Features
- **Responsive Design** — Mobile-first (320px+), tablet (768px+), and desktop (1024px+) compatibility
- **Dark Mode** — Complete dark/light theme toggle with system preference detection
- **Smooth Animations** — Scroll-triggered animations, hover effects, and micro-interactions using Framer Motion
- **Performance Optimized** — Lazy-loaded images, optimized assets, and efficient code bundling
- **Accessibility** — Semantic HTML, ARIA attributes, and keyboard navigation support
- **Cross-Browser Compatible** — Tested on Chrome, Firefox, Safari, and Edge

## 🌐 Deployment
Deployed on Vercel: [Live URL](NULL)

## 🆕 Latest Updates
### ✅ Implemented Features:
- Complete Dark Mode System with theme persistence using localStorage
- Enhanced Mobile Responsiveness across all components (320px+ support)
- Refined Animation System with optimized performance for mobile devices
- Fixed Layout Issues in UserReviews component with consistent arrow positioning
- Simplified Hover Animations across gallery and card components
- Typewriter Text Effects for feature descriptions in TabPanel
- Improved Touch Targets for mobile navigation and buttons

### 🎨 Design Improvements:
- Consistent Spacing and typography across all breakpoints
- Streamlined Color System with dark mode variants
- Professional Testimonial Section with enhanced layout
- Mobile-First Navigation with hamburger menu for small screens
- Optimized Image Loading with proper lazy loading implementation

### 🛠️ Technical Challenges Overcome
- **Performance Optimization**: Balanced rich animations with mobile device performance constraints
- **Cross-Browser Consistency**: Ensured uniform appearance and functionality across all modern browsers
- **Responsive Complexity**: Managed complex layout transformations across 4 breakpoint ranges
- **Theme Synchronization**: Implemented seamless dark/light mode transitions with system preference detection
- **Accessibility Compliance**: Maintained WCAG guidelines while implementing complex interactions

## 📂 Updated Folder Structure
```
├── public/                 # Static assets (WebP optimized images, favicon)
├── src/
│   ├── components/
│   │   └── sections/       # Main page section components
│   ├── contexts/           # React contexts (ThemeContext)
│   ├── hooks/              # Custom hooks (useCountdown, useTheme)
│   ├── ui/                 # UI components (ThemeToggle, CustomButton, etc.)
│   ├── utils/              # Utility functions (formatTime, optimizers)
│   ├── index.css           # Global styles with dark mode support
│   ├── main.jsx            # Entry point
│   ├── App.jsx             # Main app component with theme provider
├── optimizeImages.js       # Image optimization script (WebP conversion)
├── tailwind.config.js      # Tailwind configuration with dark mode
├── index.html              # HTML entry point
```

## 🌎 Browser Compatibility
Fully tested on Chrome, Firefox, Safari, and Edge (latest versions).

## 🔧 Performance Features
- **Image Optimization**: Automatic WebP conversion with lazy loading
- **Code Splitting**: Component-based architecture for efficient loading
- **Animation Optimization**: Hardware-accelerated animations with reduced motion support
- **Theme Efficiency**: CSS custom properties for smooth theme transitions
