# UVER – College Discovery App
A responsive, modern web application built for the Frontend Internee Technical Assignment. It implements a university discovery app UI based on the provided Dribbble design, using React, Tailwind CSS, and Framer Motion for animations.

## 🚀 Setup Instructions
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/HossamZakariaSannad/UVER-Landing-Page
cd UVER-Landing-Page
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


## 🌐 Deployment
Deployed on Vercel: [Live URL](https://uver-landing-page.vercel.app/)


### 🛠️ Technical Challenges Overcome
- **Performance Optimization**: Balanced rich animations with mobile device performance constraints
- **Responsive Complexity**: Managed complex layout transformations across 4 breakpoint ranges

## 📂  Folder Structure
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
Fully tested on Chrome, Firefox and Edge .

