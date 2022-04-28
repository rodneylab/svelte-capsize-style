/**
 * @param {HTMLElement} node - action element
 * @param {{fontSize: string; lineHeight?: string; '::before'?: {content?: string; marginBottom?: string; display?: string}; '::after'?: {content?: string; marginTop?: string; display?: string}}} styles - element styles
 */
function setCustomProperties(node, styles) {
  const { fontSize, lineHeight, '::before': before, '::after': after } = styles;

  fontSize && node.style.setProperty('--font-size', fontSize);
  lineHeight && node.style.setProperty('--line-height', lineHeight);

  if (before) {
    const { content, marginBottom, display } = before;
    content && node.style.setProperty('--before-content', content);
    marginBottom && node.style.setProperty('--before-margin-bottom', marginBottom);
    display && node.style.setProperty('--before-display', display);
  }
  if (after) {
    const { content, marginTop, display } = after;
    content && node.style.setProperty('--after-content', content);
    marginTop && node.style.setProperty('--after-margin-top', marginTop);
    display && node.style.setProperty('--after-display', display);
  }
}

/**
 * @param {HTMLElement} node - action element
 * @param {{fontSize: string; lineHeight: string; '::before': {content: string; marginBottom: string; display: string}; '::after': {content: string; marginTop: string; display: string}}} styles - element styles
 * @returns{{update: (styles: {fontSize: string; lineHeight?: string; '::before'?: {content?: string; marginBottom?: string; display?: string}; '::after'?: {content?: string; marginTop?: string; display?: string}}) => void}} -
 */
function styles(node, styles) {
  setCustomProperties(node, styles);
  return {
    update(styles) {
      setCustomProperties(node, styles);
    },
  };
}

export default styles;
