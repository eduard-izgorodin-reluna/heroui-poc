# Быстрый старт с Figma

## Что сделано ✅

1. **Очищен проект** - удалены старые страницы
2. **MCP Server для Figma** - настроен в `.vscode/mcp.json`
3. **Figma API Client** - готов в `lib/figma.ts`
4. **Figma Extractor** - установлен (как в основном проекте FG)
5. **Автоматическая синхронизация** - `pnpm sync-figma`

## Следующие шаги 🚀

### 1. Получить Figma токен (2 минуты)

1. Открой <https://www.figma.com/settings>
2. Scroll to "Personal access tokens"
3. Нажми "Generate new token"
4. Имя: `HeroUI POC Dev`
5. Скопируй токен (показывается ОДИН раз!)

### 2. Найти Node ID компонентов

1. Открой Figma файл с Reluna Design System
2. Выбери секцию (например, "Buttons")
3. Правый клик → Copy link to selection
4. URL будет: `https://www.figma.com/design/ABC123/File?node-id=123-456`
5. Node ID = `123-456`

### 3. Настроить sync-figma.ts

Обнови `scripts/sync-figma.ts`:

```typescript
const COMPONENT_SECTIONS = {
  Buttons: '123-456',      // Твой Node ID для секции Buttons
  Inputs: '789-012',       // Твой Node ID для секции Inputs
  Cards: '345-678',        // Твой Node ID для секции Cards
  Badges: '901-234',
  Icons: '567-890',
};
```

### 4. Добавить в .env.local

```env
FIGMA_ACCESS_TOKEN=figd_твой_токен_здесь
FIGMA_FILE_KEY=ABC123XYZ
```

**Как найти File Key:**

- URL: `https://www.figma.com/design/ABC123XYZ/Reluna-Design`
- FILE_KEY: `ABC123XYZ`

### 5. Запустить синхронизацию

```bash
# Первый запуск - синхронизирует компоненты из Figma
pnpm sync-figma
```

Результат:

```
🚀 Starting component sync from Figma Design System...
📦 Syncing section: Buttons...
  ✅ Buttons: 5 components synced
  ✓ PrimaryButton.tsx
  ✓ SecondaryButton.tsx
  ✓ OutlineButton.tsx
  ...
✅ Successfully synced 15 components from Figma!
📁 Components saved to: components/figma
```

### 6. Использовать компоненты

```tsx
import { PrimaryButton, CardComponent } from '@/components/figma';

export default function Page() {
  return (
    <div>
      <PrimaryButton size={24} className="text-primary" />
      <CardComponent size={32} />
    </div>
  );
}
```

## Workflow

### Вариант 1: Автоматическая синхронизация (рекомендуется)

```bash
# 1. Обнови дизайн в Figma
# 2. Запусти синхронизацию
pnpm sync-figma

# 3. Новые компоненты появятся в components/figma/
# 4. Используй в коде
```

**Когда использовать:**

- Массовый импорт компонентов (кнопки, иконки, карточки)
- Регулярная синхронизация с дизайн-системой
- Автоматизация pipeline (CI/CD)

### Вариант 2: MCP Server через Copilot

**Просто спроси Copilot:**

- "Get design context for Figma node 123:456"
- "Show me the Button component from Figma"
- "Export icon as SVG from Figma node 789:012"

**Когда использовать:**

- Разовый импорт одного компонента
- Исследование дизайна
- Быстрый прототип

### Вариант 3: API напрямую (для кастомных задач)

```typescript
import { FigmaClient } from '@/lib/figma';

const figma = new FigmaClient();

// Получить компонент
const nodes = await figma.getNodes(['123:456']);

// Экспорт SVG
const images = await figma.getImages(['123:456'], 'svg');

// Все компоненты файла
const components = await figma.getComponents();
```

## Примеры задач

### Задача 1: Получить кнопку из Figma

1. Открой Figma файл с Reluna дизайном
2. Выбери компонент Button
3. Скопируй Node ID из URL: `?node-id=123-456`
4. Попроси Copilot: "Get code for Figma node 123:456"

### Задача 2: Экспорт иконок

```typescript
const iconNodes = [
  '100:200', // home-icon
  '100:201', // user-icon
  '100:202', // settings-icon
];

const figma = new FigmaClient();
const images = await figma.getImages(iconNodes, 'svg', 2); // 2x scale

// images.images = { '100:200': 'https://...svg', ... }
```

### Задача 3: Синхронизация цветов

```typescript
const figma = new FigmaClient();
const styles = await figma.getStyles();

// Фильтруем только цвета
const colorStyles = styles.meta.styles.filter(s => 
  s.style_type === 'FILL'
);

// Обновляем config/themes.ts
```

## Проверка настройки

```bash
curl -H "X-Figma-Token: ВАШ_ТОКЕН" \
  https://api.figma.com/v1/me
```

Должен вернуть твой профиль Figma.

## Troubleshooting

**MCP Server не работает:**
- Перезапусти VS Code после изменения `.vscode/mcp.json`
- Проверь Output → GitHub Copilot для логов

**API возвращает 403:**
- Токен невалиден
- Проверь права доступа к файлу (нужен view access минимум)

**Node ID не найден:**
- Формат: `123:456` (двоеточие, не дефис!)
- Конвертация: `123-456` → `123:456`

---

**Готово!** Теперь можешь использовать Figma через Copilot или API 🎉
