//Create a Hash Table which uses Quadratic Probing for Hashing.

// print an array
function printArray(arr) {
    // Iterating and printing the array
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}

// implement the quadratic probing
function hashing(table, tsize, arr, N) {
    // Iterating through the array
    for (let i = 0; i < N; i++) {

        // Computing the hash value
        let hv = arr[i] % tsize;

        // Insert in the table if there is no collision
        if (table[hv] == -1)
            table[hv] = arr[i];
        else {
            // collision condition
            for (let j = 0; j < tsize; j++) {

                // Computing the new hash value
                let t = (hv + j * j) % tsize;
                if (table[t] == -1) {
                    table[t] = arr[i];
                    break;
                }
            }
        }
    }
    printArray(table);
}

let arr = [50, 700, 76, 85, 92, 73, 101];
let N = 7;

// Size of the hash table
let L = 7;
let hash_table = [];
// Initializing the hash table
for (let i = 0; i < L; i++) {
    hash_table[i] = -1;
}
// Quadratic probing
hashing(hash_table, L, arr, N);

//time complexity : O(N*L)

