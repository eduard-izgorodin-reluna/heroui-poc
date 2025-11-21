# HeroUI POC - 7 Day Plan

## 🎯 Project Goals
1. Evaluate HeroUI as alternative to Radix UI
2. Test AI-friendliness for code generation
3. Create showcase of Reluna Design System with HeroUI

## 📅 Timeline

### Day 1-2: Atoms Showcase ⏳ IN PROGRESS
- [x] Setup project structure
- [x] Configure Reluna theme
- [ ] Create `/app/atoms/page.tsx` - main showcase grid
- [ ] **Button Component**
  - [ ] All variants (primary, secondary, ghost, danger)
  - [ ] All sizes (sm, md, lg)
  - [ ] States (default, hover, active, disabled)
  - [ ] AI Test: Prompt → Generate → Measure correctness
- [ ] **Input Component**
  - [ ] All variants (default, bordered, underlined)
  - [ ] With/without labels, placeholders, help text
  - [ ] Validation states (error, success)
  - [ ] AI Test + metrics
- [ ] **Avatar Component**
  - [ ] Sizes, fallback, image, initials
  - [ ] Group avatars
  - [ ] AI Test + metrics
- [ ] **Badge & Chip**
  - [ ] Colors, sizes, with icons
  - [ ] Removable chips
  - [ ] AI Test + metrics
- [ ] **Card Components**
  - [ ] Card, CardHeader, CardBody, CardFooter
  - [ ] Variants (flat, bordered, shadow)
  - [ ] AI Test + metrics
- [ ] **Progress & Spinner**
  - [ ] Linear, circular progress
  - [ ] Colors, sizes
  - [ ] AI Test + metrics
- [ ] **Form Elements**
  - [ ] Checkbox, Radio, Switch
  - [ ] All states
  - [ ] AI Test + metrics
- [ ] **Other Atoms**
  - [ ] Divider, Link, Separator
  - [ ] AI Test + metrics

**AI Metrics to Track:**
- Correctness Score (0-100%)
- Manual Corrections Needed
- Time Saved vs Manual
- DX Quality Score

### Day 3-4: Molecules Showcase
- [ ] Create `/app/molecules/page.tsx`
- [ ] **User Profile Card** (Avatar + Text + Badge)
- [ ] **Stats Card** (Icon + Number + Label)
- [ ] **Form Field** (Label + Input + Error)
- [ ] **Navigation Item** (Icon + Text + Badge)
- [ ] **Action Card** (Card + Button + Status)
- [ ] **Search Bar** (Input + Icon + Button)
- [ ] **Filter Chip Group** (Multiple Chips)
- [ ] **Progress Card** (Card + Progress + Stats)
- [ ] Test AI composition abilities
- [ ] Document integration patterns

### Day 5-7: Real Pages + Evaluation
- [ ] Build 2-3 pages from Figma
  - [ ] Registration page (atoms + molecules)
  - [ ] Dashboard section
  - [ ] Profile settings
- [ ] Final AI test (full page generation)
- [ ] Write EVALUATION_SUMMARY.md
  - [ ] HeroUI vs Radix comparison
  - [ ] AI generation results analysis
  - [ ] Pros/cons for Reluna Family Portal
  - [ ] Final recommendation
- [ ] Create demo presentation
- [ ] Clean up and document

## 📊 AI Testing Template

For each component:
```
Component: [Name]
Prompt: [Exact prompt used]
Result: [What AI generated]
Correctness: [0-100%]
Manual Corrections: [List]
Time Saved: [Estimate]
DX Quality: [1-5]
Notes: [Observations]
```

## 🎨 Figma Reference
https://www.figma.com/design/MQBuXNwl2txY0sG82L0PRQ/-ReFamily--Web-Platofrm--Code-Connect-?node-id=3953-18119&m=dev

## 🚫 Not Using
- Builder.io (tested, found inconsistent)
- Visual editors

## ✅ Success Criteria
- All atomic components showcase complete
- 8+ molecular components working
- 2-3 real pages from Figma
- Comprehensive AI testing data
- Clear recommendation document
