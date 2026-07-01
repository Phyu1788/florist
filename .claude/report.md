<!-- ch-4 personal-project report.
     Copy this file to:  ch-4/<your-github-username>/report.md  in your TEAM repo.
     Fill every section. Delete the <!-- hint --> comments as you go. -->

# ch-4 Personal Project — Report

## Project

- **GitHub username:** @Phyu1788
- **Repo URL:** https://github.com/Phyu1788/phyu-portfolio
- **Live / download URL:** https://phyu-portfolio.vercel.app
- **License:** MIT
- **One-line summary:** A responsive developer portfolio website showcasing projects, skills, and contact information with smooth scroll animations.

## Product-Intro Slides

- **Slides path:** slides/presentation.md

## Demo Screenshots

Desktop Resolution — dark and light themes

![Hero — Dark](screenshots/01-hero-dark.png)
![Projects — Dark](screenshots/02-projects-dark.png)
![Hero — Light](screenshots/03-hero-light.png)
![Skills — Light](screenshots/04-skills-light.png)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Bundler | Vite 8 |
| Styling | Plain CSS3 (custom properties, Grid, Flexbox) |
| Animations | Intersection Observer API via a custom `useScrollReveal` hook |
| Linting | ESLint 10 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` |
| Testing | Playwright (screenshot tests) |

## Architecture

```
src/
├── components/
│   ├── Header.jsx        # Sticky nav with smooth-scroll links
│   ├── Hero.jsx          # Landing section with animated code block
│   ├── About.jsx         # Bio and core values grid
│   ├── Skills.jsx        # Skill bars grouped by category
│   ├── Projects.jsx      # Project grid with filter tabs
│   ├── ProjectCard.jsx   # Individual project card
│   ├── ProjectDetail.jsx # Modal overlay with full project info
│   ├── Contact.jsx       # Contact form
│   └── Footer.jsx        # Footer with social links
├── data/
│   ├── projects.js       # Project data (6 entries)
│   └── skills.js         # Skill data (12 entries)
├── hooks/
│   └── useScrollReveal.js  # IntersectionObserver + MutationObserver hook
├── App.jsx               # Root component, state for project modal
├── App.css               # Global styles
└── index.css             # CSS reset and custom properties
```

## Key Features

- **Scroll reveal animations** — Elements with `data-reveal` attributes fade/slide in as they enter the viewport. A `MutationObserver` handles dynamically added elements.
- **Project showcase** — Grid of project cards with category filter tabs. Clicking a card opens a detail modal with full description, tech stack, and links.
- **Skills display** — Animated skill bars grouped by category (Frontend, Tools, Other).
- **Responsive design** — Mobile-first layout using CSS Grid and Flexbox. Works from 320px to ultrawide.
- **Dark theme** — Dark-first design with CSS custom properties for easy theming.

## How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Phyu1788/phyu-portfolio.git
   cd phyu-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

## Claude Code Integration

**Tools used:**
- **MCP:** Context7 for React documentation lookups
- **Skills:** Vercel React Best Practices (component patterns, performance guidelines)
- **Agents:** Expert Coder for production-ready implementations

**Workflow:**
- Incremental component-by-component development with git commits
- CSS custom properties for consistent theming
- Playwright screenshot tests for visual regression

## Notes (optional)

**Known rough edges:**
- The slides (`slides/presentation.md`) still reference an earlier florist e-commerce concept and need updating
- No form submission backend — the contact form is UI-only
- Project and skill data are hardcoded in JS files; a CMS or JSON file would be more flexible

**What I learned:**
- React 19 features and modern hooks patterns
- Intersection Observer API for performant scroll animations
- CSS custom properties for maintainable theming
- Component composition and state management without external libraries
