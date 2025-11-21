import { FigmaClient, parseFigmaUrl } from '@/lib/figma';

// Example 1: Get Reluna Button component from Figma
async function getRelunaButton() {
  const figma = new FigmaClient();
  
  // Replace with actual Reluna Design System file URL
  const figmaUrl = 'https://www.figma.com/design/YOUR_FILE_KEY/Reluna-Design?node-id=123-456';
  const parsed = parseFigmaUrl(figmaUrl);
  
  if (parsed?.nodeId) {
    const nodes = await figma.getNodes([parsed.nodeId]);
    console.log('Button component:', nodes);
  }
}

// Example 2: Export button states as SVG
async function exportButtonStates() {
  const figma = new FigmaClient();
  
  const buttonStates = [
    '123:456', // Default
    '123:457', // Hover
    '123:458', // Active
    '123:459', // Disabled
  ];
  
  const images = await figma.getImages(buttonStates, 'svg');
  console.log('Button state images:', images);
}

// Example 3: Get all Reluna components
async function getAllComponents() {
  const figma = new FigmaClient();
  const components = await figma.getComponents();
  
  console.log('All components:', components);
  
  // Filter Reluna components
  const relunaComponents = components.meta.components.filter((c: any) =>
    c.name.startsWith('Reluna/')
  );
  
  return relunaComponents;
}

// Example 4: Extract design tokens
async function syncDesignTokens() {
  const figma = new FigmaClient();
  const styles = await figma.getStyles();
  
  console.log('Design tokens:', styles);
  
  // You can now sync these to config/themes.ts
}

export {
  getRelunaButton,
  exportButtonStates,
  getAllComponents,
  syncDesignTokens,
};
