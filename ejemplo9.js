const persona = [{ nombre: 'Julio Garcia' ,bonos: [100, 500, 1300]}]

for (let index = 0; index < persona.length; index++){
     //console.log(persona[index].bonos)
     var listaBonos = persona[index].bonos
     var totalBonos = 0

     for (let indice = 0; indice < listaBonos.length; indice++){
         //console.log(listaBonos[indice])
         var cantidadAbonos = listaBonos[indice]
         totalBonos += cantidadAbonos
     }
     console.log(totalBonos)
}


	
