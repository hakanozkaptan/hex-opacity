export const rgbaConverter = transparency => {
  let opacity = 100;
  const rgb = transparency.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
  const alpha = ((rgb && rgb[4]) || '').trim();
  let hex = rgb
    ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
      (rgb[2] | (1 << 8)).toString(16).slice(1) +
      (rgb[3] | (1 << 8)).toString(16).slice(1)
    : transparency;

  if (alpha !== '') {
    opacity = alpha;
  }

  opacity = ((opacity * 255) | (1 << 8))
    .toString(16)
    .slice(1)
    .toUpperCase();

  return (hex += opacity);
};
