<!-- ch-3 personal-project report. Copy this file to ch-3/<your-github-username>/report.md -->
<!-- Before you pass: your project repo needs at least 3 GitHub stars (ask teammates
     to open your repo and click ⭐). This proves it is a real, shared project. -->
# ch-3 Personal Project — Report

github_username: Phyu1788
personal_repo_url: https://github.com/Phyu1788/florist
project_summary: A responsive React florist e-commerce website with product catalog, cart, search, and product detail modal
slides_url: florist/slides/presentation.md

## Methodology
<!-- How you worked: project-based approach + your git workflow (commit as you build). 2-4 sentences. -->
I built this florist website using a project-based approach, starting with the core layout and components (Header, Hero, ProductGrid) and progressively adding features like the shopping cart, product detail modal, search/filter, and contact form. I followed an incremental git workflow — committing after each major feature or component was completed and tested. Claude Code assisted with component implementation, styling, and React best practices throughout development.

## Evidence — Claude Code usage
<!-- List the ACTUAL paths in your personal repo. The validator checks these exist. -->

### MCP
- path: .mcp.json
- what: MCP server configuration for Context7, used during development for React documentation lookups and best practices guidance.

### Skill
- path: .claude/skills/vercel-react-best-practices/SKILL.md
- what: Vercel React Best Practices — a comprehensive performance optimization guide for React and Next.js with 70 rules across 8 categories (eliminating waterfalls, bundle size, re-render optimization, etc.), used to ensure components follow production-grade patterns.

### Agent
- path: .claude/agents/expert-coder.md
- what: Expert Coder agent — a world-class software engineering agent used for writing, implementing, and generating production-ready code with proper error handling, edge case management, and idiomatic conventions.
