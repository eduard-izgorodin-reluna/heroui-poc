
import fs from 'fs';

const raw = fs.readFileSync('figma-node.json', 'utf-8');
const node = JSON.parse(raw);

function simplify(n: any) {
  const simple: any = {
    name: n.name,
    type: n.type,
  };

  if (n.absoluteBoundingBox) {
    simple.width = n.absoluteBoundingBox.width;
    simple.height = n.absoluteBoundingBox.height;
  }

  if (n.fills && n.fills.length) simple.fills = n.fills;
  if (n.strokes && n.strokes.length) simple.strokes = n.strokes;
  if (n.strokeWeight) simple.strokeWeight = n.strokeWeight;
  if (n.cornerRadius) simple.cornerRadius = n.cornerRadius;
  if (n.paddingLeft) {
    simple.padding = {
      top: n.paddingTop,
      right: n.paddingRight,
      bottom: n.paddingBottom,
      left: n.paddingLeft,
    };
  }
  if (n.itemSpacing) simple.gap = n.itemSpacing;
  if (n.layoutMode) simple.layoutMode = n.layoutMode;
  
  if (n.style) {
    simple.style = {
      fontFamily: n.style.fontFamily,
      fontWeight: n.style.fontWeight,
      fontSize: n.style.fontSize,
      textAlignHorizontal: n.style.textAlignHorizontal,
      textAlignVertical: n.style.textAlignVertical,
    };
  }

  if (n.characters) simple.text = n.characters;

  if (n.children) {
    simple.children = n.children.map(simplify);
  }

  return simple;
}

const simplified = simplify(node);
fs.writeFileSync('figma-node-simple.json', JSON.stringify(simplified, null, 2));
console.log('Simplified JSON saved.');
