let task1 = [];  
//random number array generated
for (let i = 0; i < 5; i++) {
    let output = Math.floor(Math.random() * 100);
    task1.push(output);
}

//adding with given value
function adding(arr, n) {
    return arr.map((value) => {
        return value + n; //add with number passed in argument
    })
}

//dividing with given value
function divide(arr, n) {
    return arr.map((value) => {
        return Number((value / n).toFixed(1));  //toFixed returns string so convert to number
    })
}

//filtering according to condition
function filter(arr, n) {
    return arr.filter((value) => {
        if (value > n) {
            return value;
        }
    })
}

//maping according to condition
function map(arr, n) {
    return arr.map((value) => {
        if (value > n) {
            return value;
        }
        else {
            return n;
        }
    })
}

//curring 
function curry(fun){
    return function(arr){
        return function(n){
            return fun(arr,n);
        }
    }
}
console.log(task1);
console.log(curry(map)(task1)(20));
console.log(curry(filter)(task1)(20));
console.log(curry(divide)(task1)(20));
console.log(curry(adding)(task1)(20));


