//Write program to check if the following trees are mirror tree or not

class treeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

//checking if mirror or not
function mirror(tree_a, tree_b) {
    if (tree_a == null && tree_b == null)
        return true;

    if (tree_a == null || tree_b == null) {
        return false;
    }
    return (tree_a.data == tree_b.data && mirror(tree_a.left, tree_b.right) && mirror(tree_a.right, tree_b.left));
}

let tree1 = new treeNode(10);
tree1.left = new treeNode(8);
tree1.right = new treeNode(7);
tree1.left.left = new treeNode(4);
tree1.left.right = new treeNode(3);

let tree2 = new treeNode(10);
tree2.right = new treeNode(8);
tree2.left = new treeNode(7);
tree2.right.left = new treeNode(3);
tree2.right.right = new treeNode(4);

if (mirror(tree1, tree2) == true) {
    console.log("mirror image");
}
else {
    console.log("no mirror image");
}

//time complexity : O(n)

