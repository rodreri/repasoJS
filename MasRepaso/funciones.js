// declarativas, las que tienen nombre
function miFuncion(){
    return 5 - 10;
}
miFuncion();

// expresion
// las variables pueden guardad funciones como datos
var miFuncionAnon = function(a,b){
    return a + b;
}
console.log(miFuncionAnon(30,20));

// funcion tipo fleacha
a => a + 100;

// equivalente en funcion anonima
function(a){
    return a + 100;
}



var nombreFuncion = (a) => a + 100;