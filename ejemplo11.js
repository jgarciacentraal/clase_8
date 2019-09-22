const stock = [
            	{ marca: 'Huawei', modelo: 'P30', precio: 13500 },
            	{ marca: 'Apple', modelo: 'iPhone x', precio: 20000 },
            	{ marca: 'Motorola', modelo: 'Moto X', precio: 10000 }
             ]

             
for (let index = 0; index < stock.length; index++){
    //console.log(stock[index])
    if (stock[index].precio == 10000){
        console.log(`El celular mas barato es ${stock[index].marca} del modelo ${stock[index].modelo} con precio de: ${stock[index].precio}`)
    }
}             