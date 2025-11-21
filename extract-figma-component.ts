import "dotenv/config";

// Извлечение компонента из Figma
// URL: https://www.figma.com/design/MQBuXNwl2txY0sG82L0PRQ/-ReFamily--Web-Platofrm--Code-Connect-?node-id=3953-18119

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN ?? "";
const FILE_KEY = 'MQBuXNwl2txY0sG82L0PRQ';
const NODE_ID = '3953:18119'; // Из URL (заменили - на :)

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_ACCESS_TOKEN env var is required to run extract-figma-component.ts');
}

async function extractComponent() {
  try {
    console.log('🔍 Извлекаем компонент из Figma...\n');
    
    // 1. Получаем информацию о ноде
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

    console.log('✅ Компонент найден!');
    console.log('📝 Название:', node.name);
    console.log('📐 Тип:', node.type);
    console.log('📏 Размеры:', `${Math.round(node.absoluteBoundingBox?.width || 0)}×${Math.round(node.absoluteBoundingBox?.height || 0)}`);

    // 2. Анализируем структуру
    console.log('\n🏗️  Структура компонента:');
    analyzeNode(node, 0);

    // 3. Извлекаем стили
    console.log('\n🎨 Стили:');
    extractStyles(node);

    // 4. Получаем изображение для референса
    console.log('\n📸 Генерируем превью...');
    const imageResponse = await fetch(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${NODE_ID}&format=png&scale=2`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (imageResponse.ok) {
      const imageData = await imageResponse.json();
      const imageUrl = imageData.images[NODE_ID];
      if (imageUrl) {
        console.log('🖼️  Превью:', imageUrl);
        console.log('💡 Открой эту ссылку в браузере чтобы увидеть как должен выглядеть компонент');
      }
    }

    // 5. Генерируем рекомендации
    console.log('\n💡 Рекомендации для реализации:');
    generateRecommendations(node);

  } catch (error) {
    console.error('❌ Ошибка:', error);
  }
}

function analyzeNode(node: any, depth: number) {
  const indent = '  '.repeat(depth);
  const icon = node.type === 'FRAME' ? '📦' : 
               node.type === 'TEXT' ? '📝' : 
               node.type === 'RECTANGLE' ? '▭' :
               node.type === 'INSTANCE' ? '🔗' : '•';
  
  console.log(`${indent}${icon} ${node.name} (${node.type})`);
  
  if (node.children && depth < 3) { // Ограничиваем глубину
    node.children.forEach((child: any) => analyzeNode(child, depth + 1));
  } else if (node.children && node.children.length > 0) {
    console.log(`${indent}  ... ${node.children.length} дочерних элементов`);
  }
}

function extractStyles(node: any) {
  // Background
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID') {
      const color = rgbaToHex(fill.color, fill.opacity);
      console.log(`  Background: ${color}`);
    }
  }

  // Border
  if (node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID') {
      const color = rgbaToHex(stroke.color, stroke.opacity);
      console.log(`  Border: ${color} (${node.strokeWeight}px)`);
    }
  }

  // Border radius
  if (node.cornerRadius !== undefined) {
    console.log(`  Border Radius: ${node.cornerRadius}px`);
  }

  // Padding (from auto layout)
  if (node.paddingLeft !== undefined) {
    console.log(`  Padding: ${node.paddingTop}px ${node.paddingRight}px ${node.paddingBottom}px ${node.paddingLeft}px`);
  }

  // Gap (from auto layout)
  if (node.itemSpacing !== undefined) {
    console.log(`  Gap: ${node.itemSpacing}px`);
  }

  // Layout
  if (node.layoutMode) {
    console.log(`  Layout: ${node.layoutMode === 'HORIZONTAL' ? 'flex-row' : 'flex-col'}`);
  }

  // Анализируем текстовые стили
  if (node.type === 'TEXT' && node.style) {
    console.log(`  Font: ${node.style.fontFamily} ${node.style.fontWeight}`);
    console.log(`  Size: ${node.style.fontSize}px`);
    console.log(`  Line Height: ${node.style.lineHeightPx}px`);
  }
}

function rgbaToHex(color: any, opacity = 1): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  const a = Math.round(opacity * 255);
  
  if (a === 255) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(2)})`;
}

function generateRecommendations(node: any) {
  console.log('  1. Используй RelunaCard для основного контейнера');
  console.log('  2. Примени border-radius и padding из Figma');
  console.log('  3. Используй цвета из config/themes.ts');
  console.log('  4. Сохрани структуру вложенности из Figma');
  console.log('  5. Используй Lucide icons для иконок');
}

extractComponent();
