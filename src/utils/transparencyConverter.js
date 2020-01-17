export const transparencyConverter = percent => {
  const intValue = Math.round((percent / 100) * 255);
  const hexValue = intValue.toString(16);

  return hexValue.padStart(2, '0').toUpperCase();
};
