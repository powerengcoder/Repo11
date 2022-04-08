var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};
console.log(bubbleSort(myArr));
module.exports = bubbleSort;