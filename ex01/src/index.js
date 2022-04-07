var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(myItems){

    myArr[2] = myItems[2];
    return myItems;

}


myArrayFunction([2, 4, 6, 8, 10]);
console.log(myArrayFunction([2, 4, 6, 8, 10]));
module.exports = myArrayFunction;