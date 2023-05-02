//Write custom logic similar to Array.Slice function programmatically.

let arr = [2, 3, 5, 7, 9];
let result = [];
function ownSlice(start, end) {
    function repeat() {
        for (let i = 0; i < arr.length; i++) {
            if (start >= arr.length || end <= start) {
                return result;  //Empty array return
            }
            else if (i >= start && i < end) {
                result.push(arr[i]);  //push result into a new array
            }
        }
    }
    if (start < 0) {
        start = 0;
        repeat();  //function calling
    }
    else if (end >= arr.length) {
        end = arr.length;
        repeat();  //function calling
    }

}
ownSlice(1, 5);
console.log(result);