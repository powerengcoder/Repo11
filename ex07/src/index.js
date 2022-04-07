var myArray = [
[1, 2],
[3, 4, 5, 6],
[7, 8, 9]
];

function multiplyArrayfunction(array){
var arr = [];
var sumAll =0; var productAll =1;
    for( var i=0; i < array.length; i++)
     {   var sum =0; var product =1;
         for(var j=0; j < array[i].length; j++){
             sum += array[i][j];
             product *= array[i][j];
         }
       sumAll += sum;
       productAll *=product;
     }
     arr.push(productAll,sumAll);
    return arr;
    }


console.log(multiplyArrayfunction(myArray));
module.exports = multiplyArrayfunction;