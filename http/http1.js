//PRACTICA 1
// const http=require('http');
// http.createServer(function(req,res){
//     console.log('Nueva petición');
//     console.log(req.url);
//     res.end();
// }).listen(3000);
// console.log('escuchando http en pto 3000')

//PRACTICA 1.1
// const http=require('http');
// http.createServer(function(req,res){
//     console.log('Nueva petición');
//     console.log(req.url);
//     res.write('Hola, ya se usar HTTP de NodeJS');
//     res.end();
// }).listen(3000);
// console.log('escuchando http en pto 3000')

const http=require('http');
http.createServer(function(req,res){
    console.log('Nueva petición');
    console.log(req.url);
    res.writeHead(201,{'Content-Type':'text/html'})
    res.write('<h3>Hola estoy usando http de node</h3>')
    res.end();
}).listen(3000);
console.log('escuchando http en pto 3000')
