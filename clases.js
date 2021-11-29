// const Rectangulo = class R{
    // no anonima
// }

//Forma anonima
// const Rectangulo = class{
    
// }

//Declaracion de clase
class Rectangulo {

}
function Cuadraro(){}

const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre
    estado
    static estatico = 42
    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }
    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'Satisfecho!'}`)
    }

    static comer(){
        console.log(this.estatico, 'Estoy comiendo')
    }
}
Chancho.comer()
const feliz = new Chancho('feliz')
// console.log(feliz)
// feliz.hablar()
const trsite =  new Chancho('triste')
// trsite.hablar()
const nose = new Chancho()
// nose.hablar()