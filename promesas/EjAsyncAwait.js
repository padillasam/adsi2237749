function hervirAgua(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject();
            console.log('El agua esta lista');    
        }, 2000);
        
    })
}
function pelarPapa(){
    console.log('Lista la papa')
}
function picarCarne(){
    console.log('Lista la carne')
}
function aderezar(){
    console.log('Listo el aderezo')
}
async function agregarTodo(){
    console.log('Alistamiento para hacer Sopa');
    try{
    await hervirAgua();
    }
    catch(error){console.log('Fallo la función')}
    console.log('Agregar todos los ingredientes');
    
}

agregarTodo();
pelarPapa();
picarCarne();
aderezar();


