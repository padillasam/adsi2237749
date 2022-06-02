
let obj={
    crack:"Bryan",
    suma:function(){
        let n1=10,n2=20
        return n1+n2//console.log(`...suma= ...${n1+n2}...`)
    },
    ciudad:'Soacha',
}

function prueba(objeto) {
    return new Promise(
        function (resolve, reject) {
            if (obj.length==0) {
            //if (true) { //probar reject
                reject(new Error(`No existen datos`));
           }
        //resolve(objeto);
        setTimeout(() => {
                resolve(objeto);
         }, 500);
        }
    );
}

let x = {n:'uno'}

function externa(obj){
    console.log(`${obj.crack} ${obj.suma()}`);
    return obj;
}
prueba(obj)
.then(externa)
.then((obj)=>{
    console.log(typeof(obj));
    return prueba(obj);    
})

    

    