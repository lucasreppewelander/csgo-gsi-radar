import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Radar from './Radar';
import { CSGOGSI } from 'csgogsi';

// import { testData } from '../testdata/fullrun';
import testData from '../testdata/gsi';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function RenderRadar() {
  const GSI = new CSGOGSI();
  const [game, setGame] = useState('');

  useEffect(() => {
    if (true) {
      const parsed = GSI.digest(testData);
      setGame(parsed);

      return;
    }

    async function runner() {
      for (const tick of testData) {
        const parsed = GSI.digest(tick);
        setGame(parsed);
        await sleep(1);
      }
    }

    runner();
  }, []);

  return <Radar game={game} />;
}

ReactDOM.render(
  <React.StrictMode>
    <RenderRadar />
  </React.StrictMode>,
  document.getElementById('root'),
);
