const objeto = [{ "nombre completo": 'John Doe'}]

for (let index = 0; index < objeto.length; index++){
    console.log(objeto[index].["nombre completo"])
}



const objeto = [{ 
    nombreCompleto: "John Doe"
}]
for (let index = 0; index < objeto.length; index++){
    console.log(objeto[index].nombreCompleto)
}