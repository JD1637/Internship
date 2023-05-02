const printLogger1 = function getLogger1(){
    return this.id + " " + this.userName;
}
const printLogger2 = function getLogger2(logDate = "", logBy = "", logSummary = "") {
    return this.id + " " + this.userName + " is logged on " + logDate + ' by ' + logBy + ' with summary ' + logSummary;
}

let log1 = {
    userName: "Win",
    id: 2,
}

function moreInfo(request) {
    console.log("Logging request fired on " + request);
}
const requestLog = moreInfo.bind(printLogger1);     //Bind application

console.log(printLogger1.call(log1));       //call application
console.log(printLogger2.apply(log1, ["12-03-2023", "Win", "Hello"]));      //apply application
requestLog("30-Jun-2019");



