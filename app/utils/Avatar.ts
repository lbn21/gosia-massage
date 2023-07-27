export type ColorResult = {
  bgColor: string;
  textColor: string;
  initials: string;
};

function generateColor(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

function calculateLuminance(color: string): number {
  const c = color.substring(1);
  const rgb = [
    parseInt(c.substr(0, 2), 16),
    parseInt(c.substr(2, 2), 16),
    parseInt(c.substr(4, 2), 16),
  ];
  const lum = rgb.map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
}

function getContrastColor(color: string): string {
  return calculateLuminance(color) > 0.5 ? '#000000' : '#FFFFFF';
}

export function generateColorsAndInitials(fullName: string): ColorResult {
  const names = fullName.split(' ');
  const initials = names.map((name) => name[0]?.toUpperCase() || '').join('');
  const bgColor = generateColor(fullName);
  const textColor = getContrastColor(bgColor);

  return {
    bgColor,
    textColor,
    initials,
  };
}
