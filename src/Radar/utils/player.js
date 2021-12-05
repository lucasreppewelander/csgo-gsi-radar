import React from 'react';

export const parsePosition = (position, config) => {
  let x = position[0],
    y = position[1];

  let gameXPosition = x + Math.abs(config.x);
  let pixelXPosition = Math.abs(gameXPosition) / config.scale;
  let xPosition = (pixelXPosition / 1024) * 100;

  let gameYPosition = y + Math.abs(config.y);
  let pixelYPosition = Math.abs(gameYPosition) / config.scale;
  let yPosition = (pixelYPosition / 1024) * 100;

  console.log(y, gameYPosition, pixelXPosition, yPosition);

  return {
    y: yPosition,
    x: xPosition,
  };
};

export const plotPlayers = (game, mapConfig) => {
  return game.players.map((player) => {
    const classnames = ['Player', player.team.side];
    const playerPosition = parsePosition(player.position, mapConfig);

    if (player.state.health === 0) {
      classnames.push('Player--Dead');
    }

    return (
      <div
        key={player.name}
        style={{
          bottom: playerPosition.y + '%',
          left: playerPosition.x + '%',
        }}
        className={classnames.join(' ').trim()}
      >
        {player.observer_slot}
      </div>
    );
  });
};
