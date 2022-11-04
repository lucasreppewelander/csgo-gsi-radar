import React from 'react';
import { parsePosition } from './player';

export const plotBomb = (game, mapConfig) => {
  const { bomb } = game;
  if (!bomb) {
    return null;
  }

  if (bomb?.state === 'carried' || bomb?.state === 'exploded') {
    return null;
  }

  const classnames = ['bomb'];

  if (bomb?.state === 'planted' || bomb?.state === 'defusing') {
    classnames.push('planted');
  } else if (bomb?.state === 'defused') {
    classnames.push('defused');
  }

  const bombPosition = parsePosition(bomb?.position.split(', '), mapConfig);

  return (
    <div
      id="bomb"
      key="bomb"
      className={classnames.join(' ').trim()}
      style={{
        top: bombPosition?.y + '%',
        left: bombPosition?.x + '%',
      }}
    ></div>
  );
};
