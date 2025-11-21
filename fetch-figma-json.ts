import "dotenv/config";
import fs from 'fs';

// URL: https://www.figma.com/design/MQBuXNwl2txY0sG82L0PRQ/-ReFamily--Web-Platofrm--Code-Connect-?node-id=3953-18119

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN ?? "";
const FILE_KEY = 'MQBuXNwl2txY0sG82L0PRQ';
const NODE_ID = '3953:18119'; // Из URL (заменили - на :)

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_ACCESS_TOKEN env var is required to run fetch-figma-json.ts');
}

async function fetchFigmaJson() {
  try {
    console.log('🔍 Fetching component from Figma...');
    
    const nodeResponse = await fetch(
      `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${NODE_ID}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (!nodeResponse.ok) {
      throw new Error(`Figma API error: ${nodeResponse.status}`);
    }

    const nodeData = await nodeResponse.json();
    const node = nodeData.nodes[NODE_ID]?.document;

    if (!node) {
      throw new Error('Node not found');
    }

    console.log('✅ Component found:', node.name);
    
    // Save to file
    fs.writeFileSync('figma-node.json', JSON.stringify(node, null, 2));
    console.log('💾 Saved to figma-node.json');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

fetchFigmaJson();
