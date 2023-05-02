function weather() {
    return new Promise(function (resolve, reject) {
        console.log("Hello");
        console.log("Welcome to Weather Information App")
        setTimeout(() => {
            console.log("What is your name?");
            setTimeout(() => {
                prompt("Name :");
            }, 1000)
        }, 2000)
        setTimeout(() => {
            console.log("What is your location?");
            setTimeout(() => {
                prompt("Location :");
            }, 2000)
        }, 4000)
        setTimeout(() => {
            console.log("What you want to know?");
            setTimeout(() => {
                prompt("Wish : ");
                setTimeout(() => {
                    console.log("Great! The Current Temperature is Normal.")
                }, 1000);
            }, 2000)
        }, 9000)
    })
}

weather();