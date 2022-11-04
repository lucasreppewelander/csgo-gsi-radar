const package = require('./package.json');

// type declares which index of the verison it should be
// 0 = major
// 1 = minor
// 2 = patch
module.exports = function bump(type = 2) {
  const copied = { ...package };

  let versionIndex = copied.version.split('.');
  versionIndex[type]++;

  return versionIndex.join('.');
};
