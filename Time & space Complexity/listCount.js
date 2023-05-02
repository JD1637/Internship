// Method-1
// let list = "Hi there how is all going";
// let list2 = list.split(" ");
// console.log(list2.length);

// Method-2
console.time("time");
let list = "Lorem is going to  studio at thos morning";

function wordCounter(str){
    let i = 0;
    let count = [];
    while(i<str.length){
        let temp = '';
        while(str[i] == " " && i<str.length)
            i++;
        while(str[i] !== " " && i<str.length){
            temp += str[i];
            i++;
        }
        count.push(temp);
    }
    return count;
}
console.log(wordCounter(list).length);
console.timeEnd("time");  // time taken 3.498ms

