const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

common.entry = [];

module.exports = merge(common, {
	mode: 'production',
	entry: ['regenerator-runtime/runtime.js', './src/Radar/index.js']
});