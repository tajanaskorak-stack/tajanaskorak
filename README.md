# Tajana Landing Page

A Next.js landing page project with a clean, organized folder structure.

## 📁 Project Structure

```
tajana-landing-page/
├── src/
│   └── components/          # Reusable React components
├── pages/                   # Next.js pages (routing)
├── public/
│   └── images/             # Images and static assets
├── styles/                 # Global CSS and reset styles
├── package.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server (requires `npm run build` first)
- `npm run lint` - Run ESLint

## 📝 Development

- **Pages**: Add new pages in the `pages/` directory. Next.js will automatically create routes based on file names.
- **Components**: Create reusable components in `src/components/`.
- **Styles**: Global styles are in `styles/globals.css`. Component-specific styles can use CSS Modules (`.module.css`).
- **Images**: Place images in `public/images/` and reference them as `/images/your-image.jpg`.

## 🎨 Styling

- Global styles and CSS reset are imported in `pages/_app.js`
- CSS variables are defined in `styles/globals.css` for easy theming
- Use CSS Modules for component-specific styles (`.module.css`)

## 📦 Dependencies

- **Next.js 14.2** - React framework
- **React 18.3** - UI library

## 🔧 Configuration

- `next.config.js` - Next.js configuration
- `package.json` - Project dependencies and scripts
