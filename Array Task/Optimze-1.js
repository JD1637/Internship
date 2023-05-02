//Limiting object referance

//do not pass whole object just pass the necessary property of an object

//Que
function someLargeArray() {
    return new Array(1000000);
}
var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}
function printProperty(obj) {
    console.log(obj['prop1']);
}
printProperty(exampleObject)


//Ans
function someLargeArray() { return new Array(1000000); }
var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}
function printProperty(prop1) {
    console.log(prop1);
}
printProperty(exampleObject.prop1)