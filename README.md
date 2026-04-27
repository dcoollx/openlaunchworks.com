# OpenLaunchWorks

A comprehensive SAAS platform that bundles essential business tools for small businesses. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

OpenLaunchWorks provides an opinionated tech stack that includes:

- **CRM System** - Manage customers, leads, and sales pipeline
- **Payment Processing** - Integrated payment gateway with multiple methods
- **Domain Management** - Register and manage domain names
- **Web Hosting** - Reliable, scalable hosting infrastructure
- **Website Builder** - Drag-and-drop website creation
- **Security** - Enterprise-grade security and compliance

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd openlaunchworks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Responsive navigation
│   ├── Footer.tsx        # Site footer
│   └── ContactForm.tsx   # Contact form component
├── pages/
│   ├── HomePage.tsx      # Landing page
│   ├── FAQPage.tsx       # FAQ page
│   └── PricingPage.tsx   # Pricing page
├── App.tsx               # Main app component
├── index.css             # Global styles
└── main.tsx              # App entry point
```

## 🎨 Design System

The project uses Tailwind CSS with custom component classes:

- `.btn-primary` - Purple primary buttons
- `.btn-secondary` - Gray secondary buttons
- `.btn-outline` - Outlined buttons

## 🌐 Pages


## 🚀 Deployment

Build the project for production:

```bash
npm run deploy
```

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact us at hello@openlaunchworks.com
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
