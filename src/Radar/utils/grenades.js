import React from 'react';
import { parsePosition } from './player';

export const plotGrenades = (game, mapConfig) => {
  if (game.grenades) {
    return Object.keys(game.grenades).map(id => {
      let grenadeState = 'inair';
      const nade = game.grenades[id];
      const classnames = ['grenade', nade.type];

      if (!!nade.flames) {
        let flamePosition = [];
        let flamesNumber = Object.values(nade.flames).length;
        for (let i = 0; i < flamesNumber; i++) {
          flamePosition.push([
            parseFloat(Object.values(nade.flames)[i].split(", ")[0]),
            parseFloat(Object.values(nade.flames)[i].split(", ")[1]),
            parseFloat(Object.values(nade.flames)[i].split(", ")[2])
          ]);
        }

        return flamePosition.map((position, index) => {
          const flamepos = parsePosition(position, mapConfig);

          return <div
            key={`flame-${index}-${id}-${position.join('-')}`}
            className="grenade flame"
            style={{
              top: flamepos.y + '%',
              left: flamepos.x + '%',
              transform: `translate(-50%, -50%)`
            }}
          />
        });
      }

      if (nade.type === "smoke") {
        if (nade.effecttime !== "0.0") {
          grenadeState = 'landed';
          if (Number(nade.effecttime) >= 16.5) {
            grenadeState = 'exploded';
          }
        }
      } else if (nade.type === 'flashbang' || nade.type === 'frag') {
        if (Number(nade.lifetime) >= 1.25) {
          grenadeState = 'exploded';
        }
      }
      
      classnames.push(grenadeState);
      const nadePosition = parsePosition(nade.position.split(', '), mapConfig);

      return <div
        id={id}
        key={id}
        className={classnames.join(' ').trim()}
        style={{
          top: nadePosition.y + '%',
          left: nadePosition.x + '%',
          transform: `translate(-50%, -50%)`
        }}
      >
        <div className="explode-point" />
        <div className="background" />
      </div>
    });
    // for (let id in game.grenades) {
    //   const nade = game.grenades[id];

    //   if (nade.type === 'flashbang' && parseFloat(nade.lifetime) >= 1.4) {
    //     const position = nade.position.split(', ');
        
    //     flashbangs.push()
    //   }

    //   if (nade.type === 'inferno') {
    //     if (!!nade.flames) {
    //       let flamePosition = [];
    //       let flamesNumber = Object.values(nade.flames).length;
    //       for (let i = 0; i < flamesNumber; i++) {
    //         flamePosition.push([
    //           parseFloat(Object.values(nade.flames)[i].split(", ")[0]),
    //           parseFloat(Object.values(nade.flames)[i].split(", ")[1]),
    //           parseFloat(Object.values(nade.flames)[i].split(", ")[2])
    //         ]);
    //       }
    //     }
    //   }
    // }
  }
};
