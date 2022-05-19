const mivariable=new Promise((resolve,reject)=>{/**codigo */})
const mifuncion=(parametros)=>{new Promise((resolve,reject)=>{/**codigo */})}
//-----------------------------------

function otraFuncion(param){
    //let param=100;
    return new Promise((resolve,reject)=>{
        resolve(param);
       // reject(new error('falló'));

    })
}
function prueba1(p){
    console.log(`Probando num1 ${p}`);
    return p;
}
const prueba2=(p)=>{
    console.log(`Probando num 2 ${p}`)    
};

function prueba3(){
    let vec=[1,2,3,4]
    console.log(vec);
    console.log(`Tamaño del vector ${vec.length}`);
}
otraFuncion(100)
    .then(prueba1)
    .then(prueba2)
    .then(prueba3)
   
    //.catch(error)



//JS es permisivo en las funciones
    // function temp(p){
    //     console.log(p);
    // }

    // temp(100);
    // temp('cadena');
    // temp();
    // temp('palabra',100)
    