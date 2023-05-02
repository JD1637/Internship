function functionExample(n) {
    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}   //O(n^2)

function functionExample(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                for (var l = 0; l < 10; l++) {
                    console.log(i + j + k + l);
                }
            }
        }
    }
} //O(n^3)

function functionExample(n) {  
    for (var i = 0; i < n * 10; i++) {
        console.log(n);
    }
} //O(n)

function functionExample(n) {  
    for (var i = 0; i < n; i * 2) {
        console.log(n);
    }
} //if take i=0 then O(infinite) //if take i=1 then O(log2(n))

function functionExample(n) {
    while (true) {
        console.log(n);
    }
} //O(infinite)