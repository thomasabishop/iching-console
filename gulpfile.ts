const { series } = require('gulp');
const del = require('del');
const eraseBuildDirectory = () => del('build/*');
exports.default = series(eraseBuildDirectory);
