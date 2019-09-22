const alumnos = [{nombre: 'Raul', edad: 25},
                 {nombre: 'Maria', edad: 19},
                 {nombre: 'Martin', edad: 27}]

for (let index = 0; index < alumnos.length; index++){
    //console.log(alumnos[index])
    if(alumnos[index].edad <= 19){
      console.log(`El alumno con menor edad en el salon es ${alumnos[index].nombre} y tiene ${alumnos[index].edad}`)
    } 
}                 