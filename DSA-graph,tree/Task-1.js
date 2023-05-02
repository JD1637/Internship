//Print nodes with nth distance from the root using Breadth First Traversal

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root = null;

function k_distance(node,k){
    if(root == null || k<0){
        return;
    }
    if(k==0){
        console.log(node.data + " ");
        return;
    }

    //for finding the kth level elements recursion use
    k_distance(node.left,k-1);
    k_distance(node.right,k-1);
}

root = new Node(2);
root.left = new Node(9);
root.right = new Node(10);
root.left.left = new Node(11);
root.left.right = new Node(1);
root.right.left = new Node(2);
root.right.right = new Node(3);

k_distance(root,1);

//time complexity : O(n)
