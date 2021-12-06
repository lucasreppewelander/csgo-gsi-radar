const fs = require('fs');
const fetch = require('node-fetch');

function run() {
  fetch(
    'https://raw.githubusercontent.com/lexogrine/hud-manager/64277f8550ac5c2d87aca7d845c344ae3875ac84/server/api/testing.ts',
  ).then((res) =>
    res.text().then((parsed) => {
      fs.writeFileSync('./testdata/fullrun.js', parsed);
    }),
  );
}

run();
