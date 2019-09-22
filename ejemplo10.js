const persona = [{
                 nombre: 'Julio Garcia', 
                 tarjetas: [{credito: 19000}, {credito: 50000}]
                }]

for (let index = 0; index < persona.length; index++){
    //console.log(persona[index].tarjetas)
    var cantidadCreditos = persona[index].tarjetas
    var sumaCredito = 0
      
    for(let indice = 0; indice < cantidadCreditos.length; indice++){
        //console.log(cantidadCreditos[indice].credito)
        sumaCredito += cantidadCreditos[indice].credito
    }
    console.log(sumaCredito)
}                


	

