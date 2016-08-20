const glob = require('glob');
const fs = require('fs');

console.log('findind missing specs files...');

const filesPath = glob.sync('src/*.js', {ignore: ['src/index.js']});
const files = filesPath.map((p) => ({
  name: /^(?:\w*\/)*(\w+)(?:\.js)$/.exec(p)[1],
  path: p
}));

const filesSpecsPath = glob.sync('specs/*.js');
const filesSpecsName = filesSpecsPath.map((p) => /^(?:\w*\/)*(\w+)(?:Specs\.js)$/.exec(p)[1]);
const missingFilesSpecs = files.filter((f) => filesSpecsName.indexOf(f.name) === -1);

console.log('missing', missingFilesSpecs.length, 'specs files');
console.log('building missing specs files...');

missingFilesSpecs.forEach((f) => {
  const content = `import test from 'ava';\n\nimport ${f.name} from '../${f.path}';\n\ntest.todo('test ${f.name}');`;
  fs.writeFileSync(`specs/${f.name}Specs.js`, content);
})

console.log('building missing specs files: done.', missingFilesSpecs.length, 'missing specs files built.');
