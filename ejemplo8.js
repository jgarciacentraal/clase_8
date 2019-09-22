const alumno = [{nombre: 'Julio Garcia', calificaciones: [70,100,90,60]}]

for (let index = 0; index < alumno.length; index++){
    //console.log(alumno[index].calificaciones)
    var newalumno = alumno[index].calificaciones
    

    for (let indice = 0; indice < newalumno.length; indice++){
         //console.log(newalumno[indice])
         if (newalumno[indice] == 100){
             console.log(`la calificacion mas al es ${newalumno[indice]}`)
         }
    } 
}