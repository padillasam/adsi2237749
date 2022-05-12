//let inicio=0 puede funcionar en lugar del parámetro
function contador(inicio) {
  let i = inicio;
  function incremento() {
    inicio++;
    console.log(inicio)
  }
  return incremento;
}

const c=contador(0);
c();
c();
console.log(inicio);
const contador1=(inicio)=>{
    let i=inicio;
    return ()=>{
        inicio++;
        console.log(inicio);
    }
}
const c1=contador1(10);
c1();
c1();