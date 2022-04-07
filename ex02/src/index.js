var myStr = "Paragon is the best!";
function useMethods(str){

    var mySplit = str.split("");
    //var myRev = mySplit.reverse();
    //var myReverse = myRev.join('');

    //var countCharacters =0;

    return mySplit;//{mySplit,myRev, myReverse, countCharacters};
}



console.log(useMethods(myStr));

module.exports = useMethods;