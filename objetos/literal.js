const literal={
nombre:"Ana Bolena",
ficha:2237749,
cursos:[],
    libro:{
        titulo:"viento",
        autor:"Jua Valdez", 
        mostrar:function(){
            return `autor: ${this.autor}, titulo: ${this.titulo}`
        },       
    },
}

literal.cursos.push("java");
literal.cursos.push("php");
literal.cursos.push("laravel");

console.log(literal);
console.log(literal.libro.mostrar());