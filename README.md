# Burak Furkan Tenekeci — Portfolio

A modern, interactive portfolio website built with React, Three.js, Framer Motion, and Material UI. Features 3D visuals, smooth animations, multilingual support, and a custom music player.

**Live:** [bftportfolio.netlify.app](https://bftportfolio.netlify.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei, Spline |
| Animation | Framer Motion |
| UI Components | Material UI (MUI v5) |
| Styling | Styled Components, Emotion |
| Charts | ApexCharts |
| i18n | i18next, react-i18next |
| Routing/Scroll | react-scroll |

---

## Sections

- **Hero** — Animated intro with 3D phone model (Three.js + Spline)
- **About** — Short bio with profile photo and personal branding
- **Technologies** — Skills visualization with shader animations and charts
- **Projects** — Carousel-based project showcase with media previews
- **Contact** — Social links and contact form

---

## Features

- 3D interactive phone model rendered in WebGL
- Framer Motion page transitions and micro-interactions
- Custom music player with floating UI
- Theme picker (dark/light)
- Language picker (i18n support)
- Skill charts: Doughnut, Bar, Radar, Polar, Line
- FPS counter & Developer Observer panel (dev mode)
- Fully responsive layout

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx
├── index.jsx
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Technologies.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Sidebar.jsx
│   ├── PhoneSection.jsx
│   ├── ChartSection.jsx
│   ├── FloatingMusicPlayer.jsx
│   ├── DevObserver.jsx
│   └── PageComponents/
│       ├── Home/
│       ├── Technologies/
│       ├── Projects/
│       ├── ChartSection/
│       └── Sidebar/
└── PhoneSection/
    ├── Phone.js
    ├── PhoneModel.jsx
    ├── ThreeWrapper.jsx
    └── SplineWrapper.jsx
```

---

## License

MIT
