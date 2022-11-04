import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Radar from './Radar';
import { CSGOGSI } from 'csgogsi';
import './dev.scss';

// import { testData } from '../testdata/fullrun';
import testData from '../testdata/gsi';
import './dev.scss';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function RenderRadar() {
  const GSI = new CSGOGSI();
  const [game, setGame] = useState({});

  useEffect(() => {
    if (false) {
      const parsed = GSI.digest(testData);
      setGame(parsed);

      return;
    }

    async function runner() {
      for (const tick of testData) {
        const parsed = GSI.digest(tick);
        setGame(parsed);
        await sleep(16);
      }
    }

    runner();
  }, []);

  return <Radar game={game} />;
}

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: 512, height: 512 }}>
      <RenderRadar />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
