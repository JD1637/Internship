console.time("time");
let arr1 = [1, 2, 3, 4, 5]; //given array
let num = 10; //given number

function sum(a) {
    return a.map((item, index) => item + a[index + 1])
}
let arr2 = sum(arr1);
console.log(arr2);  // sumation of elements in array

function compare(b) {
    return b.map((item) => { 
        if (item == num) { return 1; } 
        else { return 0; } })
}

let arr3 = compare(arr2);
//for checking the match
if(arr3.includes(1)){
    console.log("Matched");
}
else{
    console.log("Not Matched");
}
console.timeEnd("time")