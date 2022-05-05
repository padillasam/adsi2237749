class Carro{
    constructor(marca,modelo){
        this._marca=marca;
        this._modelo=modelo;
    }
    set marca(marca){
        this._marca=marca
    }
    set modelo(modelo){
        this._modelo=modelo
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    infocarro(){
        return `Automovil ${this._marca} modelo ${this._modelo}`;
    }
}
var a=new Carro();
var b=new Carro("Chevrolet","onix")
a.marca="dodge";
a.modelo="journey";
console.log(a._modelo);
console.log(b._marca);

console.log(a.infocarro());
console.log(b.infocarro());
//console.log(typeof(b));