const http = require('http');
const fs = require('fs');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {'content-Type': 'text/plain'});
//     response.write('Hello world from js!')
//     response.end('');
// }).listen(5150)

//Reading a created 
// const fs = require ('fs');
// const server = http.createServer((request, response) => {
//     fs.readFile ('demofile1.html', (err, data) => {
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         return response.end();
//     });
// }).listen (5150);

//appending file

// const server = http.createServer((request, response) => {
//     fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
// }).listen(5150);

//Delete file
fs.unlink('mynewfile1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});