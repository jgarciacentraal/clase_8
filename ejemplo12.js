const stores = [{
    name: 'Amazon',
    stock: [
            { marca: 'Huawei', modelo: 'P30', precio: 11999 },
            { marca: 'Apple', modelo: 'iPhone x', precio: 18000 },
            { marca: 'Motorola', modelo: 'Moto X', precio: 9000 }
    ]
    },
    {
    name: 'Liverpool',
    stock: [
            { marca: 'Huawei', modelo: 'P30', precio: 13500 },
            { marca: 'Apple', modelo: 'iPhone x', precio: 20000 },
            { marca: 'Motorola', modelo: 'Moto X', precio: 10000 }
    ]
    }
    ]

 for (let index = 0; index < stores.length; index++){
     //console.log(stores[index].stock)
    var stockTiendas = stores[index].stock
    
    for (let indice = 0; indice < stockTiendas.length; indice++){
        //console.log(stockTiendas[indice].precio)
        if (stockTiendas[indice].precio === 9000){
            console.log(`La tienda que tiene el telefono mas barato es ${stores[index].name} la marca es ${stockTiendas[indice].marca} modelo ${stockTiendas[indice].modelo} con precio ${stockTiendas[indice].precio}`)
        }
    }
 } 
    