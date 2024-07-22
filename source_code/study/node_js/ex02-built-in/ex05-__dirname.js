console.log(__dirname);

const path = require('path');
const path1 = path.join(__dirname, 'file.txt');
console.log(path1);
const path2 = path.join(__dirname, 'data', 'file.txt');
console.log(path2);