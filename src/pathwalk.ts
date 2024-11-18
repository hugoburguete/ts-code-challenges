export type Coordinate = 'n' | 's' | 'e' | 'w';
type Vector = {
  x: number;
  y: number;
};

const pathwalk = (coordinates: Coordinate[]) => {
  const ticks = 10;

  if (coordinates.length !== ticks) {
    return false;
  }

  let pos: Vector = {
    x: 0,
    y: 0,
  };
  for (let i = 0; i < ticks; i++) {
    const coord = coordinates[i];
    switch (coord) {
      case 'e':
        pos.x += 1;
        break;

      case 'w':
        pos.x -= 1;
        break;

      case 'n':
        pos.y += 1;
        break;

      case 's':
        pos.y -= 1;
        break;
    }
  }

  return pos.x === 0 && pos.y === 0;
};

export default pathwalk;
