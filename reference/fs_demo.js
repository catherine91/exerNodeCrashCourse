const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    //if (err) throw err;
    //console.log('Folder created...');
//});

// Create and write to file
//fs.mwriteFile(path.join(__dirname, '/test', 'hello.text'), 'Hello World!', 
//err => {
//    if (err) throw err;
//    console.log('Folder written to...');

//File Append
//fs.appendFile(
//path.join(__dirname, '/test', 'hello.text'), 
//' I love Node.js',
//err => {
//    if (err) throw err;
//    console.log('Folder written to...');
//}
//);
//}
//Read File
//fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//});

//Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.text'), 
    path.join(__dirname, 'test', 'helloworld.txt'),
    err => {
    if (err) throw err;
    console.log('File renamed...');
    }
    );