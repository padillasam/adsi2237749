//console.log('amo programar');
//DESTRUCTURACION
const literal={
    nombre:'juan',
    apellido:'rodriguez',
}
console.log(literal)

// const {nombre,apellido}=literal;
// console.log(`solo el nombre es: ${nombre}`)
let {apellido}=literal;
console.log(`solo el nombre es: ${apellido}`)