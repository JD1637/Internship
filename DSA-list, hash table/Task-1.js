//Create a Javascript Sort Comparator Function which would sort string by length

let list = "lorem is going to  studio at this morning";

function wordCounter(str) {
    let i = 0;
    let count = [];
    while (i < str.length) {
        let temp = '';
        while (str[i] == " " && i < str.length)
            i++;
        while (str[i] !== " " && i < str.length) {
            temp += str[i];
            i++;
        }
        count.push(temp);
    }
    return count;
}

let newArray = wordCounter(list);
console.log(newArray);

let itemByLength = [];
for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
        if (newArray[i].length > newArray[j].length) {
            let temp = newArray[j];
            newArray[j] = newArray[i];
            newArray[i] = temp;
        }
    }
    itemByLength.push(newArray[i]);
}
console.log(itemByLength);

//time complexity : O(n^2)





