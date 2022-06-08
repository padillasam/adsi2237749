//console.log('amo programar');
//DESTRUCTURACION
const literal={
    nombre:'juan',
    apellido:'rodriguez',
    funcion1:()=>{
        console.log('soy la función 1')
    },
    funcion2:function(){console.log('soy la función2 ')}
}
console.log(literal)

// const {nombre,apellido}=literal;
// console.log(`solo el nombre es: ${nombre}`)
let {funcion1}=literal;
let {funcion2}=literal;
//console.log(`solo el nombre es: ${apellido}`)
funcion1();
funcion2();