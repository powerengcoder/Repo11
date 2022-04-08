function myMutation(arr){
var first = arr[0].toLowerCase();
var second = arr[1];

for (var i=0; i<second.length; i++){
    
    if(first.includes(second[i])){
        return true;
    } return false;
}

}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["asqhgfasdgfrhdsgtu", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["hello", "neo"]));
module.exports = myMutation;