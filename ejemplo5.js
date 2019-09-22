const jugador = [{nombre: 'John Doe', partidas: [true, false, true, true]}]


let ganadas = 0
for (let index = 0; index < jugador.length; index++){
    //console.log(jugador[index].partidas)
    let cantidadPartidas = jugador[index].partidas 
    
    for (let index2 = 0; index2 < cantidadPartidas.length; index2++ ){
        console.log(cantidadPartidas[index2])
        if (cantidadPartidas[index2] === true){
            console.log('Gano')
        } else {
            console.log('Perdio')
        }
    }  

}
