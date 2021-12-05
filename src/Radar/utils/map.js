import mapConfigs from '../maps';

const normalizeMapName = (name) => {
  if (name.indexOf('/') === -1) {
    return name;
  }

  const split = name.split('/');
  return split[split.length - 1];
};

export const currentMap = (game) => {
  return {
    config: mapConfigs[normalizeMapName(game.map.name)],
    name: normalizeMapName(game.map.name),
  };
};
