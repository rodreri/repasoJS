function Fn(){
    this.prop = 'propiedad'
    return 'hola que hace'
}

const r = new Fn()
console.log(r) 

const fatFN = () => {//No tienen contexto this
    this.prop = 'lala'
}

const r1 = fatFN()
console.log(this);

//tienen return implicito

const fnR = () => 2
console.log(fnR())