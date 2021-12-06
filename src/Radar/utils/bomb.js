import React from 'react';
import { parsePosition } from './player';

export const plotBomb = (game, mapConfig) => {
  const { bomb } = game;
  console.log(bomb.state);
  if (bomb.state === 'carried' || bomb.state === 'exploded') {
    return null;
  }

  const classnames = ['bomb'];
  const bombPosition = parsePosition(bomb.position, mapConfig);

  if (bomb.state === 'planted' || bomb.state === 'defusing') {
    classnames.push('planted');
  } else if (bomb.state === 'defused') {
    classnames.push('defused');
  }

  return (
    <div
      id="bomb"
      className={classnames.join(' ').trim()}
      style={{
        bottom: bombPosition.y + '%',
        left: bombPosition.x + '%',
      }}
    ></div>
  );
};
