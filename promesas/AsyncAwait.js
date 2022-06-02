function otraFuncion(){
    //let param=100;
    return new Promise((resolve,reject)=>{
        resolve();
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

async function main(){    
    otraFuncion(100);
    await prueba1(100);
    await prueba2(100);
    await prueba3();        
}
main();

//otraFuncion(100);
// .then(prueba1)
    // .then(prueba2)
    // .then(prueba3)
