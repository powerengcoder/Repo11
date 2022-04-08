function splitArrayInGroups(arr, n){
var result =[];

    for (let i = 0; i < arr.length; i += n) {
        var subArr = arr.slice(i, i + n);
        result.push(subArr);
    }

return result;
}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6 ], 3));
module.exports = splitArrayInGroups;