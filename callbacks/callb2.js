//Misión: Finalizar este ejercicio para 
//todas las combinaciones posibles
function orden(n1, n2, n3, callback) {
  console.log(`en funcion principal ${n1} ${n2} ${n3}`);
  callback(n1, n2, n3);
}

const call = (n1, n2, n3) => {
  //5 2 8
  if (n1 < n2 && n2 < n3) {
    console.log(`en callback ${n1} ${n2} ${n3}`);
  } else if (n2 < n1 && n1 < n3) {
    console.log(`en callback  ${n2} ${n1} ${n3}`);
  } else if (n3 < n2 && n2 < n1) {
    console.log(`en callback  ${n3} ${n2} ${n1}`);
  }
};

orden(2,3,1,call);