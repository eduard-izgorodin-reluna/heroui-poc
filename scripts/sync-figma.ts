import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import { Extractor } from '@figma-extractor/core';
import { svgoOptimize, defaultPlugins } from '@figma-extractor/svgo-optimize';
import { parseComponentProperties } from '@figma-extractor/parse-properties';
import {
  transformToJsx,
  svgAttributes,
  type Plugin as JsxPlugin,
} from '@figma-extractor/transform-to-jsx';
import { pascalCase } from 'change-case';

// Load environment variables from .env.local
config({ path: '.env.local' });

const __dirname = new URL('.', import.meta.url).pathname;

// Reluna Design System Figma File
// Get your FILE_ID from Figma URL: https://www.figma.com/design/FILE_ID/...
const FILE_ID = process.env.FIGMA_FILE_KEY || '';
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';

if (!FILE_ID) {
  console.error('❌ FIGMA_FILE_KEY not set in .env.local');
  console.error('   Add: FIGMA_FILE_KEY=your-file-key');
  process.exit(1);
}

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_ACCESS_TOKEN not set in .env.local');
  console.error('   Get your token from: https://www.figma.com/settings');
  process.exit(1);
}

// Component sections to sync from Figma Design System
// Pages from Reluna FG design file
const COMPONENT_SECTIONS = {
  Authorization: '3690:114247',
  Onboarding: '3690:226472',
  Profile: '3690:116245',
  Dashboard: '3690:147538',
};

const COMPONENTS_FOLDER = path.join(__dirname, '../components/figma');

const extractor = new Extractor({
  depth: 2,
  nodeFilter(node) {
    return node.type === 'COMPONENT' || node.type === 'COMPONENT_SET';
  },
});

const svgoPlugins = [...defaultPlugins];

const jsxPlugins: JsxPlugin[] = [
  svgAttributes((_node) => ({
    focusable: false,
    'aria-hidden': true,
  })),
];

const syncComponentsFromSection = async (
  sectionName: string,
  nodeId: string
) => {
  console.log(`\n📦 Syncing section: ${sectionName}...`);

  const nodes = await extractor.extract({
    fileId: FILE_ID,
    nodeId,
    token: FIGMA_TOKEN,
  });

  const components = nodes
    .map(parseComponentProperties)
    .map((node) => svgoOptimize(node, svgoPlugins))
    .map((node) => transformToJsx(node, jsxPlugins))
    .map((node) => ({
      componentName: pascalCase(node.name),
      jsxContent: node.jsxContent,
      properties: node.properties,
    }));

  console.log(`  ✅ ${sectionName}: ${components.length} components synced`);

  return components;
};

const generateComponentFile = (
  componentName: string,
  jsxContent: string,
  properties: Record<string, unknown>
) => {
  const template = `/**
 * ${componentName}
 * Auto-generated from Figma Design System
 * Generated on: ${new Date().toISOString()}
 * 
 * Properties: ${JSON.stringify(properties, null, 2)}
 */

import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  className,
  size,
  ...props
}) => {
  return (
    ${jsxContent}
  );
};

${componentName}.displayName = '${componentName}';
`;

  return template;
};

const syncComponents = async () => {
  console.log('🚀 Starting component sync from Figma Design System...');

  if (!fs.existsSync(COMPONENTS_FOLDER)) {
    fs.mkdirSync(COMPONENTS_FOLDER, { recursive: true });
  }

  const allComponents: string[] = [];

  for (const [sectionName, nodeId] of Object.entries(COMPONENT_SECTIONS)) {
    const components = await syncComponentsFromSection(sectionName, nodeId);

    for (const { componentName, jsxContent, properties } of components) {
      const fileContent = generateComponentFile(
        componentName,
        jsxContent,
        properties
      );
      const filePath = path.join(COMPONENTS_FOLDER, `${componentName}.tsx`);
      fs.writeFileSync(filePath, fileContent);
      console.log(`  ✓ ${componentName}.tsx`);
      allComponents.push(componentName);
    }
  }

  // Generate index file
  const indexContent = `/**
 * Auto-generated from Figma Design System
 * Generated on: ${new Date().toISOString()}
 */

${allComponents.map((name) => `export { ${name}, type ${name}Props } from './${name}';`).join('\n')}
`;

  fs.writeFileSync(path.join(COMPONENTS_FOLDER, 'index.ts'), indexContent);

  console.log(
    `\n✅ Successfully synced ${allComponents.length} components from Figma!`
  );
  console.log(`📁 Components saved to: ${COMPONENTS_FOLDER}`);
};

syncComponents().catch((error) => {
  console.error('❌ Error syncing components:', error);
  process.exit(1);
});
