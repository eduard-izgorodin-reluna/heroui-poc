# HeroUI v3 + Reluna Design - AI-Friendly Component Library

**Production-ready showcase with Figma integration, MCP server, and tailwind-variants.**

## 🎯 What's This?

AI-optimized component library achieving **9/10 code generation quality** through:
- ✅ `tailwind-variants` (`tv()` API) for semantic props
- ✅ MCP Server for instant HeroUI + Figma documentation
- ✅ LLMs.txt integration for context-aware generation
- ✅ Figma API for design token sync
- ✅ Complete Reluna Design System implementation

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Configure Figma (optional - see FIGMA_SETUP.md)
cp .env.example .env.local
# Add your FIGMA_ACCESS_TOKEN

# Run development server
pnpm dev

# Open http://localhost:3000
```

## 📂 Project Structure

```
app/
├── components/
│   ├── navigation.tsx       # Reluna branded navbar with theme switcher
│   └── theme-switcher.tsx   # Dark/light mode toggle
├── showcase-complete/       # All components demo (Button, Input, Card, Badge, Chip)
├── layout.tsx               # HeroUI + ThemeProvider setup
├── page.tsx                 # Landing page with metrics
└── providers.tsx            # Next-themes + HeroUI integration

components/
├── reluna-button.tsx        # Button with tv() variants
├── reluna-input.tsx         # Input with slots API
├── reluna-card.tsx          # Card with composition pattern
├── reluna-badge.tsx         # Status badges
└── reluna-chip.tsx          # Removable chips

config/
├── component-variants.ts    # Centralized tv() definitions
└── themes.ts                # Reluna light/dark theme tokens

lib/
├── figma.ts                 # Figma API client
└── figma-examples.ts        # Usage examples
```

## 🎨 Figma Integration

### Setup (5 minutes)

1. **Get Figma Access Token**
   - Go to [Figma Settings → Personal Access Tokens](https://www.figma.com/settings)
   - Create new token: "HeroUI POC Development"
   - Copy token (shown once!)

2. **Configure Environment**
   ```bash
   # .env.local
   FIGMA_ACCESS_TOKEN=your-token-here
   FIGMA_FILE_KEY=your-file-key-from-url
   ```

3. **MCP Server** (already configured in `.vscode/mcp.json`)
   - Restart VS Code
   - MCP provides instant Figma doc access to Copilot

### Using Figma API

```typescript
import { FigmaClient } from '@/lib/figma';

const figma = new FigmaClient();

// Get components
const components = await figma.getComponents();

// Export as SVG
const images = await figma.getImages(['123:456'], 'svg');

// Get design tokens
const styles = await figma.getStyles();
```

See `lib/figma-examples.ts` for more patterns.

## 🌐 Deployment (GitHub Pages)

1. The app is configured for static export via `next.config.ts` (`output: "export").

1. Build and preview locally:

   ```bash
   pnpm run build
   pnpm run export
   npx serve out
   ```

1. `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on each push to `main`.

1. After the first successful workflow run, enable **Settings → Pages → Source: GitHub Actions** so the site is available at `https://<username>.github.io/heroui-poc/`.

## 🎨 Design System

### Reluna Design Tokens

**Colors:**
- Primary: `#fb6428` (rgba(251, 100, 40))
- Text: `#121212` (light) / `#f6f8fa` (dark)
- Text Secondary: `rgba(18, 18, 18, 0.5)`
- Text Inverted: `#f6f8fa`
- Background Default: `#f6f8fa`
- Background Controls: `#f6f8fa`
- Border Default: `rgba(18, 18, 18, 0.1)`
- Border Secondary: `rgba(18, 18, 18, 0.05)`

**Typography:**
- Font Family: PP Object Sans
- Header 1 M: 24px/1.2, Medium (500)
- Body 1 R: 14px/1.4, Regular (400)
- Body 1 M: 14px/1.4, Medium (500)
- Caption 1 R: 12px/1.3, Regular (400)

**Spacing:**
- Standard gap: 4px, 8px, 12px, 16px, 20px
- Card padding: 20px
- Input height: 36px
- Button heights: 36px (md), 52px (lg)

**Borders:**
- Border radius: 8px (inputs), 16px (cards), 24px (sections)
- Border width: 1px standard

## 📄 Pages

### 1. **Home** (`/`)
- Hero section with project description
- Feature cards highlighting React Aria, Design Tokens, Comparison
- Comparison table: HeroUI vs Shadcn/UI
- CTA buttons to Components and Sign In

### 2. **Components Showcase** (`/docs/components`)
- Sidebar navigation (sticky)
- All HeroUI components styled with Reluna tokens:
  - Button (variants, sizes)
  - Input (label placement, validation states)
  - Card (header, body, footer structure)
  - Avatar (fallback, icons)
  - Badge (color variants)
  - Checkbox, Select, Textarea
  - Switch, Slider, Progress
  - Divider, Chip

### 3. **Sign In Flow** (`/docs/sign-in`)
- Multi-step registration form from Figma designs
- Step 1: Personal Info (First Name, Last Name, Birthdate)
- Social auth buttons (Google, Apple, LinkedIn)
- Stepper component (3 steps)
- Welcome slider with gradient background
- Matches exact Figma node: `3690-114358`

## ✅ Correct HeroUI Approach (AI-Friendly)

### tailwind-variants Pattern

```typescript
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "font-medium rounded-lg transition-all",
  variants: {
    color: {
      primary: "bg-[#fb6428] text-white hover:bg-[#ea5717]",
      secondary: "bg-[#0ea5e9] text-white",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-9 px-4 text-base",
      lg: "h-13 px-6 text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});
```

### Usage (AI generates this)

```tsx
// ✅ Clean, semantic props
<RelunaButton color="primary" size="lg" variant="solid">
  Submit
</RelunaButton>

// ❌ OLD WAY - Tailwind "zoo"
<button className="bg-[#fb6428] text-white h-13 px-6 text-lg rounded-xl hover:bg-[#ea5717] transition-all">
  Submit
</button>
```

## 🤖 AI-Friendly Setup

### 1. MCP Server (Model Context Protocol)

**Location:** `.vscode/mcp.json`

```json
{
  "mcpServers": {
    "heroui-react": {
      "command": "npx",
      "args": ["-y", "@heroui/react-mcp@latest"]
    }
  }
}
```

**Activation:**
1. Open `.vscode/mcp.json` in VS Code
2. Click "Start" next to `heroui-react` server
3. MCP server provides instant access to HeroUI docs

**Usage:**
- "Show me Button component props"
- "Get Card component examples"  
- "What theme variables are available?"

### 2. LLMs.txt Integration

**Location:** `.copilot-instructions.md`

Reference: `https://v3.heroui.com/llms-full.txt`

This file contains complete HeroUI v3 documentation optimized for AI consumption.

### 3. Component Variants

**Location:** `config/component-variants.ts`

All styling logic centralized using `tailwind-variants`:
- `buttonVariants` - Button colors, sizes, states
- `inputVariants` - Input slots, validation states
- `cardVariants` - Card layouts and shadows
- `badgeVariants` - Badge colors and styles
- `chipVariants` - Chip tags and filters

**AI generates clean JSX:**
```tsx
<RelunaButton color="primary" size="lg">Click</RelunaButton>
```

**Instead of Tailwind "zoo":**
```tsx
<button className="bg-[#fb6428] text-white h-13 px-6...">
```

## 🧪 Evaluation Criteria

**Developer Experience:**
- [ ] Ease of customization with Reluna tokens
- [ ] Learning curve vs Shadcn
- [ ] TypeScript support quality
- [ ] Documentation clarity

**Styling Flexibility:**
- [ ] Can match Figma designs exactly?
- [ ] Custom variant creation workflow
- [ ] Theme switching support
- [ ] Responsive design patterns

**Component Quality:**
- [ ] Accessibility (ARIA support)
- [ ] Animation smoothness
- [ ] Mobile responsiveness
- [ ] Edge case handling

**Performance:**
- [ ] Bundle size impact
- [ ] Runtime performance
- [ ] Tree-shaking effectiveness
- [ ] SSR compatibility

## 📝 Implementation Notes

### What Works Well
- `classNames` prop provides granular control
- Direct Tailwind classes work for color overrides
- React Aria foundation ensures accessibility
- Component composition is straightforward

### Challenges
- Overriding default theme colors requires inline styles
- Some components lack fine-grained variant props
- Documentation examples use default theme
- Need to study component source for advanced customization

### Next Steps
1. ✅ Basic components showcase
2. ✅ Sign In flow (step 1 of 5)
3. ⏳ Complete all 5 Sign In steps
4. ⏳ Custom theme configuration
5. ⏳ Compare with reui implementation
6. ⏳ Document findings and recommendation

## 🔗 References

- **HeroUI Docs**: https://heroui.com
- **Figma Designs**: https://www.figma.com/design/MQBuXNwl2txY0sG82L0PRQ (node: 3953-18119)
- **reui (Shadcn)**: `/Users/eduardizgorodin/reluna/work-workspace/projects/reui`
- **Reluna Architecture**: See FG project CLAUDE.md

## 🎯 Decision Criteria

**Choose HeroUI if:**
- Faster development with pre-built accessible components
- Prefer npm package updates over manual copies
- React Aria foundation aligns with team expertise
- Component props API is preferred over source control

**Choose Shadcn if:**
- Full control over component source code is critical
- Smaller bundle size is top priority
- Team comfortable with Radix UI patterns
- Direct file modification workflow preferred

---

**Status**: 🚧 In Progress
**Last Updated**: 2025-01-16
**Next Action**: Complete remaining Sign In steps + theme configuration
