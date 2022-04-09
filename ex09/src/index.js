function myMutation(arr){
var first = arr[0];
var second = arr[1];
var firstSplitted = first.split();
var secondSplitted = second.split();

for (var i=0; i<second.length; i++){
    var counter =0;
    for(var i=0; i<first.length; i++){
        for(var j=0; j<second.length; j++){
            if(firstSplitted[i] == secondSplitted[j]){
                counter++;
            } else {
                break;
            }
            
        }
    }

    if(counter == second.length){
        return true;
    }else{
        return false;
    }
}

}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["asqhgfasdgfrhdsgtu", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["hello", "neo"]));
module.exports = myMutation;