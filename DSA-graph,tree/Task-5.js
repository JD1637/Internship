//Write program to create min heap out of the array with values 10,13,12,5, 7, 21, 40, 12, 33
//Apply heap sort mechanism to sort the heap

//building a heap
function buildHeap(arr){
    let n = arr.length;
    for(let i=Math.floor(n/2)-1; i>=0; i--){
        heapify(arr,n,i);
    }
}

//creating a min heap
function heapify(arr,n,i){
    let smallest = i;
    let left = 2*i + 1;
    let right = 2*i + 2;

    if(left<n && arr[left]<arr[smallest]){
        smallest = left;
    }
    if(right<n && arr[right]<arr[smallest]){
        smallest = right;
    }

    if(smallest != i){
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        heapify(arr,n,smallest)
    }
}

function heapSort(arr){
    for(let i=arr.length-1; i>0; i--){
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr,i,0);
    }
}

let arr1 = [10,13,12,5,7,21,40,12,33];
buildHeap(arr1);
console.log("Min-heap generated : " + arr1);

heapSort(arr1);
console.log("Sorting deseding order : " + arr1);
console.log("Sorting asending order : " + arr1.reverse());

//for building a heap-time complexity : O(n) 
//for sorting a heap-time complexity : O(nlogn)