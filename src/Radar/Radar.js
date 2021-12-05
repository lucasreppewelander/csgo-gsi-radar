import React from 'react';
import { currentMap } from './utils/map';
import { plotPlayers } from './utils/player';

import './style.scss';

export default function Radar({ game }) {
  const { config, name } = currentMap(game);
  console.log(config);

  const radarProps = {
    style: {
      backgroundImage: `url("${config.map}")`,
    },
  };

  return (
    <div className="Radar" {...radarProps}>
      {plotPlayers(game, config)}
    </div>
  );
}
