var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(monitorsListArray) {
  var monitorsList = [];

  for (var i = 0; i < monitorsListArray.length; i++) {
    monitorsList.push(new Array(monitorsListArray[i], i + 1));
  }
  return monitorsList;
}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
