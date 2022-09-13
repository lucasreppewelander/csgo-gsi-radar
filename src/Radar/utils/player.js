import React from 'react';

export const parsePosition = (position, config) => {
  let x = position[0],
    y = position[1];

  let gameXPosition = x - config.x;
  let pixelXPosition = gameXPosition / config.scale;
  let xPosition = (pixelXPosition / 1024) * 100;

  let gameYPosition = y - config.y;
  let pixelYPosition = gameYPosition / -config.scale;
  let yPosition = (pixelYPosition / 1024) * 100;

  return {
    y: yPosition,
    x: xPosition,
  };
};

export const parseAngle = (forward) => {
  let angle = 0;

  if (parseFloat(forward[0]) > 0) {
    angle = 90 + parseFloat(forward[1]) * -1 * 90;
  } else {
    angle = 270 + parseFloat(forward[1]) * 90;
  }

  return angle;
};

export const plotPlayers = (game, mapConfig) => {
  return game.players.map((player) => {
    if (!player || !player.name) {
      return null;
    }

    const classnames = ['Player', player.team.side];
    const playerPosition = parsePosition(player.position, mapConfig);
    const playerAngle = parseAngle(player.forward);

    if (player.steamid === game.player.steamid) {
      classnames.push('Player--Observed');
    }

    if (player.state.health === 0) {
      classnames.push('Player--Dead');
    }

    if (game.bomb && game.bomb.state && game.bomb.state === 'carried') {
      if (game.bomb.player && game.bomb.player.steamid === player.steamid) {
        classnames.push('Player--HasBomb');
      }
    }

    return (
      <>
        <div
          key={`${player.name}-player`}
          style={{
            top: playerPosition.y + '%',
            left: playerPosition.x + '%',
            transform: `translate(-50%, -50%)`,
          }}
          className={classnames.join(' ').trim()}
        >
          <span>{player.observer_slot}</span>
        </div>
        <div
          key={`${player.name}-pointer`}
          className="player-indicator"
          style={{
            top: playerPosition.y + '%',
            left: playerPosition.x + '%',
            opacity: player.state.health === 0 ? 0 : 1,
            transform: `rotate(${playerAngle - 45}deg) translate(-50%, -50%)`,
          }}
        />
      </>
    );
  });
};
