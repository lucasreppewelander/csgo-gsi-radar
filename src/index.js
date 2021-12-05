import React from 'react';
import ReactDOM from 'react-dom';
import Radar from './Radar';

import GSI_TEST_DATA from '../testdata/gsi';

ReactDOM.render(
  <React.StrictMode>
    <Radar game={GSI_TEST_DATA} />
  </React.StrictMode>,
  document.getElementById('root'),
);
