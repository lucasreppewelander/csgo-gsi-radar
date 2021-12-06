import React from 'react';
import { currentMap } from './utils/map';
import { plotPlayers } from './utils/player';
import { plotBomb } from './utils/bomb';
import { plotGrenades } from './utils/grenades';

import './style.scss';

export default function Radar({ game }) {
  if (!game.hasOwnProperty('provider')) {
    return null;
  }

  const { config, name } = currentMap(game);
  console.log(config);

  const radarProps = {
    style: {
      backgroundImage: `url("${config.map}")`,
    },
  };

  return (
    <div className="RadarWrapper">
      <div className="Radar" {...radarProps}>
        {plotPlayers(game, config)}
        {plotBomb(game, config)}
      </div>
    </div>
  );
}
