# SeolCoding.com - Project Guide

## Quick Start
```bash
npm install          # Install dependencies (Tailwind CSS)
npm run build:css    # Build CSS
hugo server -D       # Start dev server at localhost:1313
npm run dev          # Alias for hugo server -D
npm run build        # Build for production
```

## Architecture
- **Framework**: Hugo v0.147+ (Extended)
- **Theme**: CareerCanvas (Git submodule from felipecordero/careercanvas)
- **Styling**: Tailwind CSS 3.4+
- **Languages**: EN, ES, FR (multi-language support)
- **Deploy**: GitHub Actions → GitHub Pages
- **Domain**: https://seolcoding.com

## Theme Customization Strategy
**⚠️ CRITICAL**: Theme is a Git submodule. NEVER modify files in `themes/careercanvas/` directly.

### Override Method (RECOMMENDED)
Copy theme files to project root to customize:
```bash
# Example: Customize contact form
cp themes/careercanvas/layouts/partials/contact.html layouts/partials/contact.html
# Edit layouts/partials/contact.html (this overrides theme)
```

Hugo priority: `layouts/` > `themes/careercanvas/layouts/`

## Project Structure
```
/
├── config.toml              # Main config (baseURL: https://seolcoding.com)
├── content/
│   ├── en/                 # English content
│   ├── es/                 # Spanish content
│   └── fr/                 # French content
├── layouts/                # Theme overrides (CREATE AS NEEDED)
│   └── partials/          # Override specific components
├── themes/careercanvas/    # DO NOT MODIFY (submodule)
├── i18n/                  # Translation files (en.toml, es.toml, fr.toml)
├── static/                # Static assets
├── package.json           # Node dependencies & build scripts
└── .github/workflows/hugo.yml # Auto deploy
```

## Multi-language Setup
Fixed "page reference ambiguous" error in theme partials by updating GetPage calls:
```go
// Original (causes error in multilingual setup)
{{ with .Site.GetPage "about" }}

// Fixed
{{ with site.GetPage (printf "%s/%s" .Language.Lang "about") }}
```

## Common Issues

### 1. macOS Resource Fork Files
```bash
# Remove ._* files created by macOS (appear after downloads/extracts)
find content -name "._*" -type f -delete
```

### 2. PostCSS/Tailwind Build Errors
Ensure all config files exist:
- `postcss.config.js`
- `tailwind.config.js`
- `package.json`

### 3. Hugo Theme Build Errors
If encountering layout errors, check:
```bash
# Verify submodule is properly initialized
git submodule update --init --recursive

# Check Hugo version (needs Extended)
hugo version

# Verify Node dependencies
npm list tailwindcss
```

### 4. Raw HTML Warnings (Optional)
Add to `config.toml` if needed:
```toml
[markup.goldmark.renderer]
  unsafe = true
```

## Deployment
GitHub Actions automatically builds and deploys on push to main:
- Workflow: `.github/workflows/hugo.yml`
- Installs Node.js dependencies
- Builds CSS with Tailwind
- Builds Hugo site with --minify
- Deploys to GitHub Pages
- Custom domain: seolcoding.com

## Essential Commands
```bash
# Development
hugo server -D          # Dev server with drafts
hugo server            # Dev server without drafts

# Building
npm run build:css      # Tailwind CSS only
hugo --minify         # Hugo build only
npm run build         # Full production build

# Git Submodule Management
git submodule update --init --recursive  # Initialize theme
git submodule update --remote           # Update theme to latest
```

## Contact Form Configuration
Currently uses Formspree service (see `config.toml: formspree_endpoint`).
To modify form behavior: Override `layouts/partials/contact.html`

## Key Configuration Files
- `config.toml` - Site configuration, multilingual setup, theme params
- `package.json` - Build scripts and dependencies
- `i18n/*.toml` - UI text translations
- `.github/workflows/hugo.yml` - CI/CD pipeline

## Important Notes
- Always test locally before pushing to main
- Theme updates may require manual merge of customizations
- CSS changes require `npm run build:css` to take effect
- Multilingual content must follow `/content/{lang}/` structure
