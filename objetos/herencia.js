class Recurso{
    constructor(nombre,categoria){
        this._nombre=nombre;
        this._categoria=categoria;
    }    
}
class Libro extends Recurso{
    constructor(nombre,categoria,paginas,editor){
        super(nombre,categoria);
        this._paginas=paginas;
        this._editor=editor;        
    }
}

var lib1=new Libro("la odisea","epico",250,"oveja negra");
var lib1=new Libro("la iliada","epico",500,"oveja negra");
console.log(lib1);