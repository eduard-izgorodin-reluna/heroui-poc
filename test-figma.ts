import "dotenv/config";

// Тестирование подключения к Figma
// Используем credentials через переменные окружения, чтобы не хранить токен в коде

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN ?? "";
const FIGMA_FILE = 'NWeSLJWw6iPinNILwPbsfv';

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_ACCESS_TOKEN env var is required to run test-figma.ts');
}

async function testFigma() {
  try {
    console.log('🔌 Подключаемся к Figma...');
    console.log(`📂 File Key: ${FIGMA_FILE}`);
    
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error(`\n❌ Ошибка ${response.status}:`, error);
      console.log('\n💡 Возможные причины:');
      console.log('  1. Неверный token или file key');
      console.log('  2. Нет доступа к файлу');
      console.log('  3. Файл удален или перемещен');
      console.log('\n📝 Проверьте:');
      console.log('  - Token: https://www.figma.com/settings');
      console.log('  - File URL должен быть: https://www.figma.com/file/NWeSLJWw6iPinNILwPbsfv/...');
      return;
    }

    const data = await response.json();
    console.log('\n✅ Успешно подключились!');
    console.log('📄 Файл:', data.name);
    console.log('📅 Обновлен:', new Date(data.lastModified).toLocaleDateString('ru-RU'));
    
    if (data.document?.children) {
      console.log('\n📚 Страницы:');
      data.document.children.forEach((page: { name: string; children?: unknown[] }, i: number) => {
        console.log(`  ${i + 1}. ${page.name} (${page.children?.length || 0} элементов)`);
      });
    }

    // Получаем компоненты
    const componentsRes = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (componentsRes.ok) {
      const components = await componentsRes.json();
      const items = Object.entries(components.meta?.components || {});
      console.log(`\n🎨 Компонентов: ${items.length}`);
      
      // Фильтруем по категориям
      const buttons = items.filter(([_, comp]: [string, unknown]) => 
        (comp as { name: string }).name.toLowerCase().includes('button')
      );
      const fields = items.filter(([_, comp]: [string, unknown]) => 
        (comp as { name: string }).name.toLowerCase().includes('field') ||
        (comp as { name: string }).name.toLowerCase().includes('input')
      );
      const cards = items.filter(([_, comp]: [string, unknown]) => 
        (comp as { name: string }).name.toLowerCase().includes('card')
      );

      console.log('\n🎯 Reluna компоненты:');
      
      if (buttons.length > 0) {
        console.log(`\n  🔘 Buttons (${buttons.length}):`);
        buttons.slice(0, 5).forEach(([id, comp]) => {
          const c = comp as { name: string; key: string };
          console.log(`    - ${c.name}`);
          console.log(`      ID: ${id}, Key: ${c.key}`);
        });
      }

      if (fields.length > 0) {
        console.log(`\n  📝 Fields/Inputs (${fields.length}):`);
        fields.slice(0, 5).forEach(([id, comp]) => {
          const c = comp as { name: string; key: string };
          console.log(`    - ${c.name}`);
          console.log(`      ID: ${id}, Key: ${c.key}`);
        });
      }

      if (cards.length > 0) {
        console.log(`\n  🃏 Cards (${cards.length}):`);
        cards.slice(0, 5).forEach(([id, comp]) => {
          const c = comp as { name: string; key: string };
          console.log(`    - ${c.name}`);
          console.log(`      ID: ${id}, Key: ${c.key}`);
        });
      }

      // Показываем все из раздела Components
      const componentSection = items.filter(([_, comp]: [string, unknown]) => {
        const name = (comp as { name: string }).name;
        return name.includes('Banner') || 
               name.includes('Progress') || 
               name.includes('Header') ||
               name.includes('Footer') ||
               name.includes('Modal') ||
               name.includes('Dialog');
      });

      if (componentSection.length > 0) {
        console.log(`\n  📦 Другие компоненты (${componentSection.length}):`);
        componentSection.slice(0, 10).forEach(([id, comp]) => {
          const c = comp as { name: string };
          console.log(`    - ${c.name} (ID: ${id})`);
        });
      }
    }

  } catch (error) {
    console.error('\n❌ Ошибка:', error);
  }
}

testFigma();
