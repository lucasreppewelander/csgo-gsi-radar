const fs = require('fs');
const package = require('./package.json');

function generate() {
	const copied = {...package};

	delete copied.devDependencies;
	delete copied.scripts;

	fs.writeFileSync('./dist/package.json', JSON.stringify(copied, null, 2));
	console.log('### Generated new package.json');
}

generate();