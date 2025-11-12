# @jan_hoeck/ui

A React component library built with Tailwind CSS v4, providing reusable UI components with a consistent design system.

## Features

- 🎨 **Tailwind CSS v4** - Built with the latest Tailwind CSS
- 🎭 **Theming Support** - Customizable design tokens via CSS custom properties
- 📦 **Tree-shakeable** - Only import what you need
- 🔧 **TypeScript** - Full type safety
- ⚡ **Fast** - Optimized build with Vite

## Installation

```bash
pnpm add @jan_hoeck/ui
```

## Quick Start

### 1. Import Components

```tsx
import { Button, Card } from '@jan_hoeck/ui';

function App() {
  return (
    <div>
      <Card>
        <h1>Hello World</h1>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
```

### 2. Setup CSS in Your Project

Create or update your main CSS file (e.g., `src/styles.css` or `src/app.css`):

```css
@import '@jan_hoeck/ui/theme.css';
@import '@jan_hoeck/ui/styles.css';
@import 'tailwindcss';

@source '../../../node_modules/@jan_hoeck/ui';

/* Override specific UI library colors if needed */
:root {
    --color-primary: #13110a;
}

/* Add your custom theme variables */
@theme {
    --color-ocean-deep: hsl(196 89% 35%);
    --color-ocean-light: hsl(192 81% 50%);
}
```

**Important:** The order of imports matters:
1. First import `theme.css` (contains theme definitions in `:root`)
2. Then import `styles.css` (contains compiled Tailwind utilities)
3. Finally import `tailwindcss` (for generating your own utilities)
4. Use `:root` to override specific library colors
5. Use `@theme` to add your own custom colors

### 3. Import CSS in Your Entry File

```tsx
// main.tsx or index.tsx
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Theme System

### Available Theme Colors

The UI library provides the following color tokens:

| Token | Default Value | Usage |
|-------|--------------|--------|
| `--color-border` | `#e2e8f0` | Border colors |
| `--color-background` | `hsl(0 0% 100%)` | Background color |
| `--color-foreground` | `hsl(210 24% 16%)` | Text color |
| `--color-primary` | `hsl(196 89% 35%)` | Primary brand color |
| `--color-primary-foreground` | `hsl(0 0% 100%)` | Text on primary |
| `--color-secondary` | `hsl(28 80% 52%)` | Secondary brand color |
| `--color-secondary-foreground` | `hsl(0 0% 100%)` | Text on secondary |
| `--color-muted` | `hsl(210 40% 96.1%)` | Muted backgrounds |
| `--color-muted-foreground` | `hsl(215.4 16.3% 46.9%)` | Muted text |
| `--color-accent` | `hsl(35 84% 62%)` | Accent color |
| `--color-accent-foreground` | `hsl(210 24% 16%)` | Text on accent |
| `--color-destructive` | `hsl(0 84.2% 60.2%)` | Destructive actions |
| `--color-destructive-foreground` | `hsl(0 0% 100%)` | Text on destructive |
| `--color-card` | `hsl(0 0% 100%)` | Card backgrounds |
| `--color-card-foreground` | `hsl(210 24% 16%)` | Text on cards |

### Using Theme Colors in Your Project

Once you've imported the theme, you can use these colors with Tailwind utilities:

```tsx
<div className="bg-background text-foreground">
  <h1 className="text-primary">Title</h1>
  <p className="text-muted-foreground">Subtitle</p>
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

### Customizing the Theme

You can override specific theme colors from the UI library using a `:root` selector. The UI library's `theme.css` defines colors in `:root`, and you can override them using CSS cascade.

```css
@import '@jan_hoeck/ui/theme.css';
@import '@jan_hoeck/ui/styles.css';
@import 'tailwindcss';

@source '../../../node_modules/@jan_hoeck/ui';

/* Override specific UI library colors */
:root {
  --color-primary: #13110a;
  --color-secondary: hsl(220 70% 50%);
  --color-accent: hsl(45 90% 60%);
}

@theme {
  /* Add your own custom colors */
  --color-brand: hsl(280 85% 55%);
  --color-ocean-deep: hsl(196 89% 35%);
  --color-ocean-light: hsl(192 81% 50%);
  
  /* Your custom animations */
  @keyframes slide-in {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
}
```

**How it works:**
1. `theme.css` is imported and defines colors in `:root`
2. Your `:root` block overrides specific colors (CSS cascade)
3. `@theme` block adds your own custom colors for Tailwind utilities
4. All colors (original, overridden, and custom) are available as utility classes

**Example usage:**
```tsx
<div className="bg-primary text-primary-foreground">
  {/* Uses your overridden --color-primary */}
</div>

<div className="bg-ocean-deep text-white">
  {/* Uses your custom --color-ocean-deep */}
</div>
```

## Architecture

### Build Process

The library uses a dual-build approach:

1. **JavaScript/TypeScript**: Built with Vite and TypeScript
2. **CSS**:
    - `styles.css` - Compiled with PostCSS (includes Tailwind utilities)
    - `theme.css` - Copied directly (uncompiled, contains `@theme` definitions)

This approach ensures that:
- The theme definitions remain uncompiled and can be processed by the consuming project's Tailwind setup
- The compiled utilities from the library are available immediately
- Consumer projects can generate their own utilities based on the library's theme

### File Structure

```
@jan_hoeck/ui/
├── dist/
│   ├── index.js          # Main entry point
│   ├── index.d.ts        # TypeScript definitions
│   ├── styles.css        # Compiled Tailwind utilities
│   ├── theme.css         # Uncompiled theme definitions
│   └── components/       # Individual component files
├── src/
│   ├── index.ts          # Exports all components
│   ├── theme.css         # Theme definitions
│   ├── styles.css        # Main styles with Tailwind
│   └── components/       # Component source files
└── package.json
```

## Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run linting
npm run lint
```

### Build Scripts

- `npm run build` - Full build (JavaScript + CSS)
- `npm run build:js` - Build JavaScript/TypeScript only
- `npm run build:css` - Build compiled CSS only
- `npm run copy:theme` - Copy uncompiled theme.css

## Common Issues

### Theme colors not working in consumer project

**Problem:** Utility classes like `text-foreground` or `bg-primary` are not generated.

**Solution:** Make sure you:
1. Import `theme.css` BEFORE `tailwindcss` in your CSS
2. Add `@source` directive pointing to the UI library's node_modules path
3. Have `@import 'tailwindcss'` in your CSS file

```css
@import '@jan_hoeck/ui/theme.css';
@import '@jan_hoeck/ui/styles.css';
@import 'tailwindcss';

@source '../../../node_modules/@jan_hoeck/ui';
```

### Overriding theme colors doesn't work

**Problem:** When you override colors in `:root`, the changes aren't reflected in your components.

**Solution:** Make sure your `:root` block comes AFTER the `@import '@jan_hoeck/ui/theme.css'` statement:

```css
@import '@jan_hoeck/ui/theme.css';
@import '@jan_hoeck/ui/styles.css';
@import 'tailwindcss';

@source '../../../node_modules/@jan_hoeck/ui';

/* This override works because it comes after theme.css import */
:root {
  --color-primary: #13110a;
}
```

### CSS not loading

**Problem:** Styles are not applied to components.

**Solution:** Make sure you import the CSS file in your entry point:

```tsx
// main.tsx
import './styles.css'; // This should contain the @import statements
```

### TypeScript errors

**Problem:** TypeScript can't find component types.

**Solution:** Make sure your `tsconfig.json` includes the library:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["@jan_hoeck/ui"]
  }
}
```

## Peer Dependencies

This library requires the following peer dependencies:

- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: jan.hoeck@gmx.net

---

Built with ❤️ using React, TypeScript, and Tailwind CSS