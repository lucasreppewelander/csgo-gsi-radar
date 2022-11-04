const fs = require('fs');
const package = require('./package.json');
const bumper = require('./bump.js');

function generate() {
  const copied = { ...package };

  delete copied.devDependencies;
  delete copied.scripts;

  copied.version = bumper(2);

  fs.writeFileSync('./dist/package.json', JSON.stringify(copied, null, 2));
  console.log('### Generated new package.json');
}

generate();
