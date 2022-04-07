var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(monitorsListArray){
var monitorsList = [];

for(var i=0; i<3; i++){
    monitorsList.push([monitorsListArray[i] + ", " + (i+1)]);
}

return monitorsList;

}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;