function greet(){
    setTimeout(() => {
        console.log("Hello Angular");
        setTimeout(() => {
            console.log("Welcome to angular's training session");
            setTimeout(() => {
                console.log("Let us proceed");
                setTimeout(() => {
                    console.log("Are you oki?")
                }, 1000);
            },1000);
        }, 1000);
    }, 1000);
}
function talk() {
    return new Promise(function (resolve, reject) {
        var bol = true;
        var opt = "1";
        if (bol) {
            setTimeout(() => {
                console.log("We are fine");
                setTimeout(() => {
                    console.log("Here we go");
                    setTimeout(() => {
                        console.log("End");
                    }, 3000);
                }, 3000)
            }, 3000);
        }
        else {
            setTimeout(() => {
                console.log("We have doubts");
                setTimeout(() => {
                    console.log("Let us discuss");
                    setTimeout(() => {
                        console.log("What's the problem?")
                        if (opt == "1")
                            setTimeout(() => {
                                console.log("What is the current version of Angular?");
                                setTimeout(() => {
                                    console.log("Angular 14");
                                    setTimeout(() => {
                                        console.log("End");
                                    }, 3000);
                                }, 3000)
                            }, 3000);
                        else if (opt == "2") {
                            setTimeout(() => {
                                console.log("We are having trouble in understanding Angular");
                                setTimeout(() => {
                                    console.log("Let me explain");
                                    setTimeout(() => {
                                        console.log("End");
                                    }, 4000);
                                }, 4000)
                            }, 4000)
                        }
                    }, 4000)
                }, 4000)
            }, 5000);
        }
    })
}

greet();
talk();