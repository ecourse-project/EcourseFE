import { override, addBabelPreset } from 'customize-cra';
module.exports = override(addBabelPreset('@emotion/babel-preset-css-prop'));
