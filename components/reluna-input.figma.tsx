/**
 * Figma Code Connect для RelunaInput
 */

import { figma } from '@figma/code-connect';
import { RelunaInput } from './reluna-input';

figma.connect(
  RelunaInput,
  'https://www.figma.com/file/YOUR_FILE_KEY?node-id=INPUT_NODE_ID',
  {
    props: {
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      variant: figma.enum('Variant', {
        Flat: 'flat',
        Bordered: 'bordered',
        Underlined: 'underlined',
      }),
      disabled: figma.boolean('Disabled'),
      isInvalid: figma.boolean('Error State'),
      label: figma.string('Label'),
      placeholder: figma.string('Placeholder'),
      helperText: figma.string('Helper Text'),
      errorMessage: figma.string('Error Message'),
    },
    example: (props) => (
      <RelunaInput
        size={props.size}
        variant={props.variant}
        disabled={props.disabled}
        isInvalid={props.isInvalid}
        label={props.label}
        placeholder={props.placeholder}
        helperText={props.helperText}
        errorMessage={props.errorMessage}
      />
    ),
  }
);
