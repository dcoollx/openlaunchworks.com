<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# OpenLaunchWorks - SAAS Platform

This is a React + Vite + Tailwind CSS website for OpenLaunchWorks, a SAAS company that provides an opinionated tech stack for small businesses. The platform bundles together CRM, payment gateway, domain name management, hosting, and web app/website building tools.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky navigation with mobile menu
│   ├── Footer.tsx        # Company footer with links
│   └── ContactForm.tsx   # Contact form component
├── pages/
│   ├── HomePage.tsx      # Landing page with hero, features, contact form
│   ├── FAQPage.tsx       # FAQ accordion page
│   └── PricingPage.tsx   # Pricing tiers and comparison
├── App.tsx               # Main app with routing
├── index.css             # Tailwind CSS imports and custom components
└── main.tsx              # App entry point
```

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Package Manager**: npm

## Development

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

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Ready**: Built-in dark mode support
- **SEO Optimized**: Proper semantic HTML and meta tags
- **Performance**: Fast loading with Vite bundler
- **Accessibility**: WCAG compliant components

## Pages

1. **Home** (`/`) - Hero section, features overview, contact form
2. **FAQ** (`/faq`) - Frequently asked questions with accordion
3. **Pricing** (`/pricing`) - Three pricing tiers with feature comparison

## Components

- `Navigation` - Responsive navigation with mobile hamburger menu
- `Footer` - Company information and links
- `ContactForm` - Functional contact form with validation

## Styling

Custom button components defined in `src/index.css`:

```css
.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: rgb(147 51 234);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background-color: rgb(243 244 246);
  color: rgb(17 24 39);
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
}

.btn-outline {
  padding: 0.75rem 1.5rem;
  border: 2px solid rgb(147 51 234);
  color: rgb(147 51 234);
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.15s ease-in-out;
}
```

## Deployment

The project is ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages. Run `npm run build` to create the production build in the `dist/` directory.

## Next Steps

- Connect contact form to backend service
- Add payment integration
- Implement user authentication
- Add admin dashboard
- Set up CI/CD pipeline
- Add analytics and monitoring