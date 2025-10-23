
export function fill_array(list, n) {

  for (let i = 1; i < n+1; i++) {
    list.push(i);
  }

}

export function generate18BitColors() {
  const colors = [];
  for (let r = 0; r < 64; r++) {
    for (let g = 0; g < 64; g++) {
      for (let b = 0; b < 64; b++) {
        const R = r * 4;
        const G = g * 4;
        const B = b * 4;
        colors.push({ r: R, g: G, b: B });
      }
    }
  }
  return colors;
}

export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h, s, l };
}

export function generate18BitByColor(name) {
  const colors = [];
  const ranges = {
    red: [ [0, 20], [340, 360] ],
    orange: [ [20, 45] ],
    yellow: [ [45, 70] ],
    green: [ [70, 170] ],
    blue: [ [170, 260] ],
    magenta: [ [260, 340] ]
  };

  const rangeList = ranges[name.toLowerCase()];
  if (!rangeList) throw new Error("Unknown color name: " + name);

  for (let r = 0; r < 64; r++) {
    for (let g = 0; g < 64; g++) {
      for (let b = 0; b < 64; b++) {
        const R = r * 4, G = g * 4, B = b * 4;
        const { h } = rgbToHsl(R, G, B);
        if (rangeList.some(([min, max]) => h >= min && h <= max)) {
          colors.push({ r: R, g: G, b: B });
        }
      }
    }
  }
  return colors;
}
