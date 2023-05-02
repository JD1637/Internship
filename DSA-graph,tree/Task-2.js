//Write a program to check if a binary tree is a subtree of another tree

class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

//checking if tree is identical or not
function similar(main,sub){
    if(main == null && sub == null){
        return true;
    }
    if(main == null || sub == null){
        return false;
    }
    return (main.data == sub.data && similar(main.left,sub.left) && similar(main.right,sub.right) );
}

//checking is subtree or not
function checkSub(maintree,subtree){
    if(maintree == null){
        return false;
    }
    if(subtree == null){
        return true;
    }
    if(similar(maintree,subtree)){
        return true;
    }
    return (checkSub(maintree.left,subtree) || checkSub(maintree.right,subtree));
}

let root1 = new Node(15);
root1.left = new Node(12);
root1.right = new Node(13);
root1.left.left = new Node(8);
root1.left.right = new Node(7);
root1.right.left = new Node(1);

let root2 = new Node(12);
root2.left = new Node(8);
root2.right = new Node(7);

if(checkSub(root1,root2)==true){
    console.log("Subtree is found");
}
else{
    console.log("Subtree is not found");
}

//time complexity : O(N*M) M=size of subtree && N = each node