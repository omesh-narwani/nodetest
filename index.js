//console.log("hello world");
//var a= 20;
// for (i = 0; i<10;i++){
//     console.log(i);
// }


// const arr = [5,2,6,9,7,12]
// console.log(arr[2]);

//const app = require('./app');
// console.log(app.x+app.y);

// const arr = [5,2,6,9,7,12]
// var result = arr.filter((item)=>{
//     return(item.length);
// })
// console.log(result);
// global and non global 
//global use without import
//non global need to  import
//const  fs=require('fs');
//const  fs=require('fs').writeFileSync;
//fs.writeFileSync('hello.txt','hello');
//console.log(__filename);
//fs('hello2.txt','hello2');


/* Server http module handle server requirement */
/* BASIC SERVER*/ 
/*var http = require('http');
http.createServer((req,resp)=>{
    resp.write('<h1>Hello create server using http module</h1>');
    resp.end();
}).listen(4000);*/

/* Package.json */
/* color package */ 

//const colors = require('colors');
//console.log('heelowold'.bgBlue);

/* chalk package */
import chalk from "chalk"
//const chalk = require('chalk');
console.log(chalk.red("helloss"));
