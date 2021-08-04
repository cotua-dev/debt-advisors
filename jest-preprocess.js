const { createTransformer } = require('babel-jest').default;

const babelOptions = {
    presets: ['next/babel', '@babel/preset-typescript'],
};

module.exports = createTransformer(babelOptions);
