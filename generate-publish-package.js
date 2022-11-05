const fs = require('fs');
const package = require('./package.json');
const bumper = require('./bump.js');

function generate() {
  const copied = { ...package };
  copied.version = bumper(2);

  fs.writeFileSync('./package.json', JSON.stringify(copied, null, 2));

  delete copied.devDependencies;
  delete copied.scripts;

  fs.writeFileSync('./dist/package.json', JSON.stringify(copied, null, 2));
  console.log('### Generated new package.json');
}

generate();
