//Flatten an object using recursion

var dictionary = { 'Key1': '1', 'Key2': { 'a': '2', 'b': '3', 'c': { 'd': '3', 'e': '1' } } }
console.log(dictionary)

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}
console.log(flattenObject(dictionary));

//time complexity : O(n)