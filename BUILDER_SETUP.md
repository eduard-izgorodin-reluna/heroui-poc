# Builder.io Integration

This project is configured to use Builder.io for visual page building.

## Setup Complete ✅

- **Builder.io SDK**: Installed
- **API Key**: Configured in `.env.local`
- **Reluna Components**: Registered and available in Builder.io

## Available Components

All Reluna components are registered and ready to use in Builder.io:

- **RelunaButton** - with all variants (solid, bordered, light, flat, etc.)
- **RelunaInput** - with validation and different types
- **RelunaCard** - with elevation and blur effects
- **RelunaBadge** - with color variants
- **RelunaChip** - with different styles

## How to Use

### 1. Access Builder.io Editor

Visit: [https://builder.io/content](https://builder.io/content)

Login with your account that has access to the API key: `625ad1d3dcc740eebc8e0379338a019a`

### 2. Create a New Page

1. Click "New" → "Page"
2. Name your page (e.g., "Sign In Form")
3. Set the URL path (e.g., `/builder/signin`)
4. Start designing!

### 3. Use Reluna Components

In the Builder.io editor:

1. Look for "Custom Components" section in the left sidebar
2. You'll find all Reluna components:
   - RelunaButton
   - RelunaInput
   - RelunaCard
   - RelunaBadge
   - RelunaChip

3. Drag and drop them onto your canvas
4. Configure properties in the right panel

### 4. Preview Your Page

Once published in Builder.io, your pages will be automatically available at:

- `http://localhost:3000/builder/[your-url-path]`

Example: If you set URL to `/signin`, it will be at `http://localhost:3000/builder/signin`

## Component Properties

### RelunaButton

- **children**: Button text
- **color**: default, primary, secondary, success, warning, danger
- **variant**: solid, bordered, light, flat, faded, shadow, ghost
- **size**: sm, md, lg
- **radius**: none, sm, md, lg, full
- **isDisabled**: true/false
- **isLoading**: true/false

### RelunaInput

- **label**: Input label
- **placeholder**: Placeholder text
- **type**: text, email, password, number, tel, url
- **size**: sm, md, lg
- **variant**: flat, bordered, faded, underlined
- **isRequired**: true/false
- **isDisabled**: true/false

### RelunaCard

- **children**: Card content
- **variant**: elevated, bordered, flat
- **isBlurred**: true/false
- Can have children components

### RelunaBadge

- **children**: Badge text
- **color**: default, primary, secondary, success, warning, danger
- **variant**: solid, flat, faded, shadow
- **size**: sm, md, lg

### RelunaChip

- **children**: Chip text
- **color**: default, primary, secondary, success, warning, danger
- **variant**: solid, bordered, light, flat, faded, shadow, dot
- **size**: sm, md, lg

## Next Steps

1. **Create Sign In Page in Builder.io**:
   - Use the extracted Figma design as reference
   - Build it visually with drag-and-drop
   - No code needed!

2. **Advantages**:
   - Visual editing
   - No code changes needed for content updates
   - A/B testing built-in
   - Version history
   - Preview before publishing

3. **Development Workflow**:
   - Design in Figma
   - Build in Builder.io using Reluna components
   - Publish and test
   - Iterate quickly

## Troubleshooting

If components don't appear in Builder.io:

1. Make sure the dev server is running (`pnpm dev`)
2. Check that `builder-registry.tsx` is loaded
3. Verify API key in `.env.local`
4. Clear browser cache and reload Builder.io editor

## Resources

- [Builder.io Documentation](https://www.builder.io/c/docs/getting-started)
- [Builder.io React Integration](https://www.builder.io/c/docs/developers/frameworks/react)
- [Custom Components Guide](https://www.builder.io/c/docs/custom-components-intro)
