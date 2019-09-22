const array = [    [1, 2, 3, 4],
                   [5, 6, 7, 8],
                   [9, 10, 11, 12]
                                   ]


for (let index = 0;  index < array.length;  index++){
    let element = array[index];
    let sum = 0
    for(let index2 = 0; index2 < element.length; index2++){
        //console.log(element[index2])
        sum += element[index2]
        }
        console.log(sum)
   }
   