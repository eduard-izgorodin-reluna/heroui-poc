/**
 * Figma Code Connect для RelunaButton
 * Связывает компонент с дизайном в Figma
 */

import { figma } from '@figma/code-connect';
import { RelunaButton } from './reluna-button';

/**
 * Основной компонент кнопки
 * 
 * Figma: https://www.figma.com/file/YOUR_FILE_KEY?node-id=BUTTON_NODE_ID
 * 
 * Варианты:
 * - color: primary, secondary, success, warning, danger
 * - variant: solid, bordered, light, flat, ghost
 * - size: sm, md, lg
 */
figma.connect(
  RelunaButton,
  'https://www.figma.com/file/YOUR_FILE_KEY?node-id=BUTTON_NODE_ID',
  {
    props: {
      // Мапинг Figma properties → React props
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
      }),
      variant: figma.enum('Variant', {
        Solid: 'solid',
        Bordered: 'bordered',
        Light: 'light',
        Flat: 'flat',
        Ghost: 'ghost',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      disabled: figma.boolean('Disabled'),
      isLoading: figma.boolean('Loading'),
      children: figma.string('Label'),
    },
    example: (props) => (
      <RelunaButton
        color={props.color}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        isLoading={props.isLoading}
      >
        {props.children}
      </RelunaButton>
    ),
  }
);
