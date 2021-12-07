const pos_x = -3230;
const pos_y = 1713;
const scale = 5.0;

// position = [x,y,z]
function WorldToMap(position) {
  let offsetX = position[0] - pos_x / (scale * 2);
  let offsetY = position[1] - pos_y / (-scale * 2);
  console.log('(-scale * 2)', -scale * 2);

  return {
    x: offsetX,
    y: offsetY,
  };
}

// position = [x,y,z]
function MapToRadar(position) {
  let originOffset = WorldToMap(position);
  console.log('originOffset', originOffset);
  let offsetX = position[0] - 512;
  let offsetY = position[1] - 512;

  offsetX += originOffset.x;
  offsetY += originOffset.y;

  offsetX = (offsetX / 1024) * 100;
  offsetY = (offsetY / 1024) * 100;

  return {
    x: offsetX,
    y: offsetY,
  };
}

function runner() {
  const playerPosition = [-258.71, -2152.25, -173.31];
  const { x, y } = MapToRadar(playerPosition);
  console.log(x, y);
}

runner();
