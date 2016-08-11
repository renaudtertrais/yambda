const glob = require('glob');
const fs = require('fs');

console.log('building index...');

const filesPath = glob.sync('src/*.js', {ignore: ['src/index.js']});
const filesNames = filesPath.map((p) => /^(?:\w*\/)*(\w+)(?:\.js)$/.exec(p)[1]);
const importLines = filesNames.reduce((res, filename) => (
  res + `import ${filename.replace('.js','')} from './${filename}.js';\n`
),'');
const content = `
${importLines}
export default {
  ${filesNames.map((x) => `${x},`).join('\n  ')}
};
`;
fs.writeFileSync('src/index.js', content);

console.log('building index: done.', filesPath.length, 'files found.');
