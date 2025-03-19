function calculateArea(shape) {
  if (shape === 'circle') {
    const radius = prompt('Enter the radius of the circle');
    return Math.PI * radius ** 2;
  } else if (shape === 'rectangle') {
    const width = prompt('Enter the width of the rectangle');
    const height = prompt('Enter the height of the rectangle');
    return width * height;
  } else if (shape === 'triangle') {
    const base = prompt('Enter the base of the triangle');
    const height = prompt('Enter the height of the triangle');
    return (base * height) / 2;
  }
}
