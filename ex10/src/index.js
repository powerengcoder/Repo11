function myBouncer(arr) {
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    switch (value) {
      case false:
        arr.splice(i, 1, v);
        continue;
      case null:
        arr.splice(i, 1);
        continue;
      case 0:
        arr.splice(i, 1);
        continue;
      case "":
        arr.splice(i, 1);
        continue;
      case undefined:
        arr.splice(i, 1);
        continue;
      case NaN:
        arr.splice(i, 1);
        continue;
    }
  }

  return arr;
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([1, null, NaN, 1, 2, undefined, 1]));
module.exports = myBouncer;
