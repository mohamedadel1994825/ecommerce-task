export const processColor = (color: string = '#000000'): boolean => {
  const rgb = parseInt(color.substring(1), 16);
  // eslint-disable-next-line no-bitwise
  const r = (rgb / 65536) & 0xff;
  // eslint-disable-next-line no-bitwise
  const g = (rgb / 256) & 0xff;
  // eslint-disable-next-line no-bitwise
  const b = (rgb >> 0) & 0xff;

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luma >= 128;
};
