//hoisting
function saludo(nombre,callback,callback2){
    setTimeout(() => {
        console.log(`Hola ${nombre} como estas`);                
        callback(nombre);
        callback2(nombre);
    }, 2000);
           
}
// function nadaQueVer(algo){
// console.log('No tengo nada que ver pero me ajusto'+algo);
// }

function hablar(nombre){
    setTimeout(() => {
        console.log(`bla bla bla ${nombre}`);        
    }, 1000);
    
}
function despedida(nombre){
    setTimeout(() => {
        console.log(`Chao pues ${nombre}`);        
    }, 3000);
       
}
saludo('Maria',hablar,despedida);
//despedida();
//hablar();


/**Variación anidando un callback */
function saludo1(nombre,callback,callback2){
    setTimeout(() => {
        console.log(`Hola ${nombre} como estas`);                
        callback(nombre,callback2);
        callback(nombre,callback2);
        callback(nombre,callback2);
        //callback2();
    }, 2000);
           
}
function hablar1(nombre,callback){
    setTimeout(() => {
        console.log(`bla bla bla ${nombre}`);
        callback(nombre)        
    }, 1000);
    
}
function despedida1(){
    setTimeout(() => {
        console.log(`Chao pues`);        
    }, 3000);
       
}
saludo1('Maria',hablar1,despedida1);



