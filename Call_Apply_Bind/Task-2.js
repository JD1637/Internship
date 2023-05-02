const callAccepter1 = {
    userName: "Kenny",
    call1: function () {
        console.log(this.userName + " is Calling...");
    }
};
callAccepter1.call1();  //Object method is calling
const callInfo1 = {
    userName: "Win",
}
callAccepter1.call1.call(callInfo1);    //call application

const callInfo = {
    callDate: "2023-03-21",
    callBy: "John Smith",
    callCountry: "USA"
};

const callAccepter2 = function (name) {
    return name + " is called by " + this.callBy + " from " + this.callCountry + " on " + this.callDate;
}

console.log(callAccepter2.apply(callInfo, ["tom"]));    //apply application

function calldivert(location) {
    console.log("Call diverted to " + location);
}
const divertedCall = calldivert.bind(callAccepter1);

divertedCall("voicemail");      //bind application