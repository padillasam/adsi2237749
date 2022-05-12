//bloques de código 
//fragmento de código delimitado por corchetes{}
for (let i = 0; i < 10; i++) {
    if (true) {
        
    } else {
        
    }    
}
console.log(i);

//scopes->bloque y closures->funciones
//ámbito léxico
const externa1=()=>{
    let msj= "mensaje de la función intro";
    return ()=>`función interna + ${msj}`;
    //return interna1;
}
//hoisting
const z=externa1();
console.log(typeof(z));
console.log(z());


function externa(){
    //let y;
    let msj= "mensaje de la función intro";
    function interna(){
        console.log(`función interna + ${msj}`);
    } 
    return interna;
}
//intro()();
 const x=externa();
 x();
 console.log(typeof(x));
 


 const y=externa();
 x();
 
 //ALCANCIA
function alcancia(){
    let ahorro=0;
    function guardar(monedas){
        ahorro=ahorro+monedas;
        console.log(`tiene $ ${ahorro} pesos`)
    }
    return guardar;
}
const pedro=alcancia();
const maria=alcancia();
pedro(100);
maria(1);
pedro(200);
maria(5);



//  const alcancia=(monedas)=>{
//      let ahorro=0;
//      ahorro=ahorro+monedas
//      return ahorro;
//  }


 