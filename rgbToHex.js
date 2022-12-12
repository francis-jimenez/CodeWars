function rgb(r, g, b){
  return `${toHex(r)}${toHex(g)}${toHex(b)}`; 
}

function toHex(color) {
  if (color > 255) color = 255;
  if (color < 0) color = 0;
  let hex = color.toString(16).toUpperCase();
  return hex.length == 1 ? "0" + hex : hex;
}