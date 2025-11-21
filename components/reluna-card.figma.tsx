/**
 * Figma Code Connect для RelunaCard
 */

import { figma } from '@figma/code-connect';
import { RelunaCard } from './reluna-card';

figma.connect(
  RelunaCard,
  'https://www.figma.com/file/YOUR_FILE_KEY?node-id=CARD_NODE_ID',
  {
    props: {
      variant: figma.enum('Variant', {
        Flat: 'flat',
        Bordered: 'bordered',
        Shadow: 'shadow',
      }),
      // Nested components
      header: figma.nestedProps('Header', {
        title: figma.string('Title'),
        subtitle: figma.string('Subtitle'),
      }),
      content: figma.children('Content'),
      footer: figma.children('Footer'),
    },
    example: (props) => (
      <RelunaCard variant={props.variant}>
        {props.header && (
          <RelunaCard.Header>
            <div>
              <h3 className="text-xl font-semibold">{props.header.title}</h3>
              {props.header.subtitle && (
                <p className="text-sm text-foreground-500">
                  {props.header.subtitle}
                </p>
              )}
            </div>
          </RelunaCard.Header>
        )}
        <RelunaCard.Body>{props.content}</RelunaCard.Body>
        {props.footer && <RelunaCard.Footer>{props.footer}</RelunaCard.Footer>}
      </RelunaCard>
    ),
  }
);
