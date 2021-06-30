/*
fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e => console.log(e));
*/

// path.resolve('dir', ...);
// fs.readdir('dirPath');
// fs.stat('Path');
// /RegExp/g.test('path');
// stats.isDirectory();


const path = require('path');
const fs = require('fs').promises;
let counter = 0;

async function lerDiretorio(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk (files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            lerDiretorio(fileFullPath);
            continue;
        }

        if (!/\index.html$/g.test(fileFullPath)) continue;
        
        counter++;
        console.log(`${counter}: ${file}  -  ${fileFullPath}`);
    }
}

lerDiretorio('C:/Users/Cliente/Desktop/MyCourseHTML-CSS/');
