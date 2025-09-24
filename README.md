# Raze Landing Page

Jorge Raze's personal landing page built with React, TypeScript, and Vite.

## 🚀 Live Site

Visit the live site at: **<https://raze.mx>**

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite 7** - Build Tool & Dev Server
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow:

1. Builds the React app with Vite
2. Configures for GitHub Pages root domain (`/`)
3. Deploys to GitHub Pages using GitHub Actions

## 🔧 Configuration

- **Base Path**: `/` (configured in `vite.config.ts`)
- **Node.js Version**: 20.19.0 (specified in `.nvmrc`)
- **Build Output**: `dist/` directory

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
