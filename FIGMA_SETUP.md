# Figma Integration Setup

## 1. Получение Figma Access Token

1. Откройте Figma и войдите в аккаунт
2. Перейдите в Settings → Account → Personal Access Tokens
3. Создайте новый токен с именем "HeroUI POC Development"
4. Скопируйте токен (он показывается только один раз!)

## 2. Настройка переменных окружения

Добавьте токен в `.env.local`:

```env
FIGMA_ACCESS_TOKEN=your-token-here
FIGMA_FILE_KEY=your-file-key-here
```

## 3. Получение File Key из Figma URL

Формат URL: `https://www.figma.com/design/FILE_KEY/File-Name`

Пример:
- URL: `https://www.figma.com/design/abc123xyz/Reluna-Design-System`
- FILE_KEY: `abc123xyz`

## 4. Использование MCP Server для Figma

MCP сервер уже настроен в `.vscode/mcp.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"]
    }
  }
}
```

### Доступные команды через MCP:

- **Get Design Context** - получить код и метаданные для конкретного node
- **Get File Metadata** - структура файла в XML формате
- **Get Component** - информация о компоненте

## 5. Установка Figma Code Connect (опционально)

Для связи Figma компонентов с кодом:

```bash
pnpm add -D @figma/code-connect
```

Создайте `.figma/code-connect.config.json`:

```json
{
  "documentUrlSubstitutions": {
    "https://www.figma.com/design/": "https://www.figma.com/file/"
  },
  "include": ["components/**/*.tsx"],
  "exclude": ["node_modules/**"]
}
```

## 6. Использование в коде

### Получение компонентов через API:

```typescript
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

async function getFigmaComponent(nodeId: string) {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${nodeId}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN!,
      },
    }
  );
  
  return response.json();
}
```

### Экспорт изображений:

```typescript
async function exportFigmaImage(nodeId: string, format: 'png' | 'svg' = 'svg') {
  const response = await fetch(
    `https://api.figma.com/v1/images/${FILE_KEY}?ids=${nodeId}&format=${format}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN!,
      },
    }
  );
  
  return response.json();
}
```

## 7. Workflow с MCP Server

1. **Открыть Figma файл** с Reluna Design System
2. **Выбрать компонент** (например, Button)
3. **Скопировать Node ID** из URL: `?node-id=123-456`
4. **Использовать MCP команду**: "Get design context for node 123:456"
5. **AI сгенерирует код** на основе дизайна

## 8. Проверка настройки

Проверьте доступность API:

```bash
curl -H "X-Figma-Token: YOUR_TOKEN" \
  https://api.figma.com/v1/me
```

Должен вернуться ваш профиль Figma.

## Troubleshooting

### MCP Server не запускается
- Убедитесь что VS Code Copilot обновлен до последней версии
- Перезапустите VS Code после изменения `.vscode/mcp.json`
- Проверьте логи: View → Output → GitHub Copilot

### API возвращает 403
- Токен истек или невалиден
- Проверьте права доступа к файлу (нужен хотя бы read access)

### Node ID не найден
- Формат должен быть `123:456` (двоеточие, не дефис)
- Убедитесь что node существует в указанном файле
