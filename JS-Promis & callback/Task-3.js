function getinput() {
    var queno = document.querySelector("#queno").value;
    console.log(queno);
    alert("Hello! Alexa.");
    function que_ans() {
        return new Promise(function que_ans(resolve, reject) {
            if (queno == "1") {
                q1();
                resolve("Que one successfully asssigned");
            }
            else if (queno == "2") {
                q2();
                resolve("Que two successfully assigned");
            }
            else if (queno == "3") {
                q3();
                resolve("Que three successfully assigned");
            }
            else {
                reject("Que not assigned");
            }
        });
    }

    que_ans().then(function (msg) {
        console.log(msg);
    }).catch(function (error) {
        console.log(error);
    })
}
function q1() {
    setTimeout(function () {
        alert("How are you?");    //que asked
        setTimeout(function () {
            console.log("I am fine! How can I Help you?");   //ans given
            setTimeout(function () {
                alert("Great! can you please play a song for me?");
                setTimeout(function () {
                    console.log("which one?");
                    setTimeout(function () {
                        alert("Jan Gan Man");
                        setTimeout(function () {
                            console.log("Playing a song");
                            setTimeout(function () {
                                console.log("End");
                            }, 1000);   //1 sec delay
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
function q2() {
    setTimeout(function () {
        alert("How are you?");    //que asked
        setTimeout(function () {
            console.log("I am feeling dull.How can I help you?");   //ans given
            setTimeout(function () {
                alert("Oh What happened?");
                setTimeout(function () {
                    console.log("My sound box is not working.");
                    setTimeout(function () {
                        alert("Let me get it checked");
                        setTimeout(function () {
                            console.log("End");
                        }, 1000);   //1 sec delay
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
function q3() {
    setTimeout(function () {
        alert("How are you?");    //que asked
        setTimeout(function () {
            console.log("I am sick! How can I Help you?");   //ans given
            setTimeout(function () {
                alert("oh! What happened?");
                setTimeout(function () {
                    console.log("My OS is goinig to crash?");
                    setTimeout(function () {
                        alert("let me get it checked.");
                        setTimeout(function () {
                            console.log("End");
                        }, 1000);   //1 sec delay
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}