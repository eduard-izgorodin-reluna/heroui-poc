/**
 * Figma API utilities for fetching design tokens and components
 */

const FIGMA_API_BASE = 'https://api.figma.com/v1';

interface FigmaConfig {
  token: string;
  fileKey: string;
}

export class FigmaClient {
  private config: FigmaConfig;

  constructor(config?: Partial<FigmaConfig>) {
    this.config = {
      token: config?.token || process.env.FIGMA_ACCESS_TOKEN || '',
      fileKey: config?.fileKey || process.env.FIGMA_FILE_KEY || '',
    };

    if (!this.config.token) {
      console.warn('FIGMA_ACCESS_TOKEN not configured');
    }
  }

  private async fetch(endpoint: string) {
    const response = await fetch(`${FIGMA_API_BASE}${endpoint}`, {
      headers: {
        'X-Figma-Token': this.config.token,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get file metadata
   */
  async getFile() {
    return this.fetch(`/files/${this.config.fileKey}`);
  }

  /**
   * Get specific nodes by IDs
   * @param nodeIds - Array of node IDs (format: "123:456")
   */
  async getNodes(nodeIds: string[]) {
    const ids = nodeIds.join(',');
    return this.fetch(`/files/${this.config.fileKey}/nodes?ids=${ids}`);
  }

  /**
   * Get images for nodes
   * @param nodeIds - Array of node IDs
   * @param format - Image format (png, jpg, svg, pdf)
   * @param scale - Scale factor (0.01 to 4)
   */
  async getImages(
    nodeIds: string[],
    format: 'png' | 'jpg' | 'svg' | 'pdf' = 'svg',
    scale: number = 1
  ) {
    const ids = nodeIds.join(',');
    return this.fetch(
      `/images/${this.config.fileKey}?ids=${ids}&format=${format}&scale=${scale}`
    );
  }

  /**
   * Get components from file
   */
  async getComponents() {
    return this.fetch(`/files/${this.config.fileKey}/components`);
  }

  /**
   * Get component by key
   */
  async getComponent(key: string) {
    return this.fetch(`/components/${key}`);
  }

  /**
   * Get styles from file
   */
  async getStyles() {
    return this.fetch(`/files/${this.config.fileKey}/styles`);
  }
}

/**
 * Extract design tokens from Figma styles
 */
export function extractDesignTokens(figmaStyles: any) {
  const tokens = {
    colors: {} as Record<string, string>,
    spacing: {} as Record<string, string>,
    typography: {} as Record<string, any>,
    borderRadius: {} as Record<string, string>,
  };

  // Process color styles
  if (figmaStyles.fills) {
    figmaStyles.fills.forEach((fill: any) => {
      if (fill.type === 'SOLID') {
        const { r, g, b, a } = fill.color;
        const hex = rgbaToHex(r, g, b, a);
        tokens.colors[fill.name] = hex;
      }
    });
  }

  // Process text styles
  if (figmaStyles.textStyles) {
    figmaStyles.textStyles.forEach((style: any) => {
      tokens.typography[style.name] = {
        fontFamily: style.fontFamily,
        fontSize: `${style.fontSize}px`,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: `${style.letterSpacing}px`,
      };
    });
  }

  return tokens;
}

/**
 * Convert RGBA to HEX
 */
function rgbaToHex(r: number, g: number, b: number, a: number = 1): string {
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  if (a < 1) {
    return `${hex}${toHex(a)}`;
  }
  
  return hex;
}

/**
 * Convert Figma node ID format
 * From: "123-456" (URL format)
 * To: "123:456" (API format)
 */
export function normalizeNodeId(nodeId: string): string {
  return nodeId.replace(/-/g, ':');
}

/**
 * Parse Figma URL to extract file key and node ID
 */
export function parseFigmaUrl(url: string): { fileKey: string; nodeId?: string } | null {
  const patterns = [
    /figma\.com\/(?:file|design)\/([a-zA-Z0-9]+)/,
    /figma\.com\/.*node-id=([0-9-:]+)/,
  ];

  const fileMatch = url.match(patterns[0]);
  const nodeMatch = url.match(patterns[1]);

  if (!fileMatch) return null;

  return {
    fileKey: fileMatch[1],
    nodeId: nodeMatch ? normalizeNodeId(nodeMatch[1]) : undefined,
  };
}
