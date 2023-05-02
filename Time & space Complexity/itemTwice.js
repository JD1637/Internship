console.time("time");
let arr1 = ["john","kenny","tom","john","win","win"];

//Find the duplicates
function twice(a){
    return a.filter((item,index)=>a.indexOf(item)!==index)
}

console.log(twice(arr1)); 
console.timeEnd("time")