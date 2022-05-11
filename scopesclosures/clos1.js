//bloques de código 
//fragmento de código delimitado por corchetes{}
for (let i = 0; i < 10; i++) {
    if (true) {
        
    } else {
        
    }    
}
console.log(i);

//scopes->bloque y closures->funciones
function intro(){
    let msj= "mensaje de la función intro";
    function interna(){
        console.log(`función interna + ${msj}`);
    } 
    return interna;
}
//intro()();
 const x=intro();
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


 