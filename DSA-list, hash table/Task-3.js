//Create a Sortable Stack

class stack {
    constructor() {
        this.s1 = [];
        this.Index = 0;
    }
    add(item) {
        this.s1[this.Index] = item;
        this.Index++;
        this.sortStack(this.s1);
    }
    delete() {
        if (this.s1.length == 0)
            console.log("Stack is empty");
        else {
            this.s1.splice(this.Index - 1, 1);
            this.Index--;
        }
    }
    sortStack(arr) {
        // this.s1.sort((a,b)=> a- b) //Method-1

        //     arr.sort( function( a , b){ //Method-2 cube-sort
        //         var x = Math.pow(a,3);
        //         var y = Math.pow(b,3);
        //         if(x > y) return 1;
        //         if(x < y) return -1;
        //         return 0;
        //     });
        // }
        // time complexity ==> O(n) / O(nlogn)

        let n = arr.length;  //Method-3 shell sort
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i += 1) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];
                arr[j] = temp;
            }
        }
        return arr;
        // time complexity ==> O(nlogn) / O(n^2)

    }
}

let st1 = new stack();
st1.add(2);
st1.add(89);
st1.add(84);
console.log(st1.s1);
console.log(st1.s1)
st1.delete()
console.log(st1.s1);
st1.add(48);
console.log(st1.s1);
st1.delete()
console.log(st1.s1);
st1.add(15)
st1.add(98)
st1.add(20)
console.log(st1.s1);

// st1.add("harsh")
// st1.add("ayush")
// console.log(st1.s1);

//works for both string and numbers






