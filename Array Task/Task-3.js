//Find the common elements in k-sorted arrays.

let qw1 = [10, 20, 90, 40, 50, 60, 70, 80, 100, 110, 120, 130, 140, 150],
    qw2 = [15, 30, 45, 60, 75, 90, 105, 135, , 120, 150, 165]
    qw3 = [30, 87, 90, 120, 87, 4, 2, 20, 150]
    qw4 = [68, 12, 6, 5,120]

function todo(a,b) {
  return a.filter((item) => b.indexOf(item) != -1)
}

let c1 = todo(qw1,qw2); //first two array common element
console.log(c1);
let c2 = todo(c1,qw3);  //common element array and third array common finding
console.log(c2);
let c3 = todo(c2,qw4); //from third array common element forth array with all common array created
console.log(c3);





