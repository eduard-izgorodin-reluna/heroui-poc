import "dotenv/config";

// Детальный анализ первого шага Sign in
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN ?? "";
const FILE_KEY = 'MQBuXNwl2txY0sG82L0PRQ';

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_ACCESS_TOKEN env var is required to run analyze-signin.ts');
}

async function analyzeFirstStep() {
  try {
    console.log('🔍 Анализируем "Sign in / 1 step / Personal Info"...\n');
    
    // Получаем весь файл для поиска компонента
    const fileResponse = await fetch(
      `https://api.figma.com/v1/files/${FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    const fileData = await fileResponse.json();
    
    // Ищем компонент рекурсивно
    let signInComponent: any = null;
    
    function findNode(node: any, targetName: string): any {
      if (node.name === targetName) {
        return node;
      }
      if (node.children) {
        for (const child of node.children) {
          const found = findNode(child, targetName);
          if (found) return found;
        }
      }
      return null;
    }

    signInComponent = findNode(fileData.document, 'Sign in / 1 step / Personal Info');
    
    if (!signInComponent) {
      console.log('❌ Не найден компонент "Sign in / 1 step / Personal Info"');
      return;
    }

    console.log('✅ Компонент найден!');
    console.log('📏 Размеры:', `${Math.round(signInComponent.absoluteBoundingBox?.width)}×${Math.round(signInComponent.absoluteBoundingBox?.height)}`);
    
    console.log('\n🏗️  Детальная структура:');
    analyzeNodeDetailed(signInComponent, 0, 5); // Глубина 5 уровней

    // Получаем изображение
    const imageResponse = await fetch(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(signInComponent.id)}&format=png&scale=2`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (imageResponse.ok) {
      const imageData = await imageResponse.json();
      const imageUrl = Object.values(imageData.images)[0];
      if (imageUrl) {
        console.log('\n🖼️  Превью компонента:', imageUrl);
      }
    }

  } catch (error) {
    console.error('❌ Ошибка:', error);
  }
}

function analyzeNodeDetailed(node: any, depth: number, maxDepth: number) {
  if (depth > maxDepth) return;
  
  const indent = '  '.repeat(depth);
  const icon = getNodeIcon(node.type);
  
  let info = `${indent}${icon} ${node.name}`;
  
  // Добавляем размеры для важных элементов
  if (node.absoluteBoundingBox) {
    const w = Math.round(node.absoluteBoundingBox.width);
    const h = Math.round(node.absoluteBoundingBox.height);
    info += ` [${w}×${h}]`;
  }

  // Добавляем стили
  const styles = getNodeStyles(node);
  if (styles) {
    info += ` ${styles}`;
  }

  // Для текста показываем содержимое
  if (node.type === 'TEXT' && node.characters) {
    info += ` "${node.characters.substring(0, 50)}${node.characters.length > 50 ? '...' : ''}"`;
  }

  console.log(info);
  
  if (node.children) {
    node.children.forEach((child: any) => analyzeNodeDetailed(child, depth + 1, maxDepth));
  }
}

function getNodeIcon(type: string): string {
  const icons: Record<string, string> = {
    'FRAME': '📦',
    'TEXT': '📝',
    'RECTANGLE': '▭',
    'INSTANCE': '🔗',
    'COMPONENT': '⚙️',
    'GROUP': '🗂️',
    'VECTOR': '✏️',
  };
  return icons[type] || '•';
}

function getNodeStyles(node: any): string {
  const styles: string[] = [];
  
  // Background color
  if (node.fills && node.fills.length > 0 && node.fills[0].visible !== false) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID') {
      const color = rgbaToHex(fill.color, fill.opacity || 1);
      styles.push(`bg:${color}`);
    }
  }

  // Border radius
  if (node.cornerRadius !== undefined && node.cornerRadius > 0) {
    styles.push(`r:${node.cornerRadius}px`);
  }

  // Padding
  if (node.paddingLeft !== undefined) {
    styles.push(`p:${node.paddingTop}/${node.paddingRight}/${node.paddingBottom}/${node.paddingLeft}`);
  }

  // Gap
  if (node.itemSpacing !== undefined) {
    styles.push(`gap:${node.itemSpacing}px`);
  }

  // Font
  if (node.type === 'TEXT' && node.style) {
    styles.push(`${node.style.fontSize}px`);
    if (node.style.fontWeight) {
      styles.push(`w:${node.style.fontWeight}`);
    }
  }

  return styles.length > 0 ? `(${styles.join(', ')})` : '';
}

function rgbaToHex(color: any, opacity = 1): string {
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  
  if (opacity === 1) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  return `rgba(${r},${g},${b},${opacity.toFixed(2)})`;
}

analyzeFirstStep();
