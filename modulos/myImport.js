import {hello,hello2} from './myExport.js'
console.log(hello2())

//import hello from './myExport.js';
//^bien en navegador, no en node

//import {hello,hello2} from './myExport.js';
//^funciona si viene con export {} en el navegador
//^el script debe ser type="module"
 //hello(); //no funciona por node

//const hello = require('./myExport.js')//viene con module.exports
//^ funciona bien con node, navegador?


