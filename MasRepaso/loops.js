let estudiantes = ["cesar","Erick","roberto"]

function saludarEstudiantes(){
    console.log(`Hola ${estudiante}' que ta; tu dia`);
}

for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

while