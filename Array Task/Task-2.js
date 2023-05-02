//Find the Median of Two Sorted Arrays of the same size.

let arr1 = [12, 45, 60, 78, 3, 56, 1, 2]; 
let arr2 = [30, 4, 90, 67, 10, 34, 45, 67];

if (arr1.length == arr2.length) {
    let arr3 = arr1.concat(arr2);

    let arr4 = (arr3.sort((a, b) => { return a - b }));  //Make a number array sorted
    console.log(arr4);

    function median() {
        if ((arr4.length) % 2 !== 0) {
            console.log(arr4[Math.floor(arr4.length / 2)]);   //If length is odd
        }
        else {
            let middle = (arr4.length / 2) - 1;
            let sum = arr4[middle] + arr4[middle + 1];    //If length is even
            console.log(sum / 2);
        }
    }
    median();
}
else {
    console.log("Array size is not same");
}


