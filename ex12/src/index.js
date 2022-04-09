function splitArrayInGroups(arr, n){
var res =[];
var result =[];

    for (let i = 0; i < arr.length; i += n) {
        var subArr = arr.slice(i, i + n);
        res.push(subArr);
    }
for (var i=0; i<n; i++){
    result.push(res[i]);
}
return result;
}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6 ], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8 ], 3));
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5 ], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;