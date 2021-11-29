function calcularPerimetro(){
    const input = document.getElementById("inputcuad");
    const lado = input.value;
    let perimetro = lado * 4;

    //alert(perimetro);
    const res = document.getElementById("resultado");
    //res.innerText = ("El perimetro del cuadrado es: " +perimetro);
    res.innerHTML = ("El perimetro del cuadrado es: " + perimetro);
}