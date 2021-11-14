function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null;
    //搜索树插值操作
    BinarySearchTree.prototype.insert = function (key) {
        let newNode = new Node(key);
        if (this.root === null){
            this.root = newNode;
        }else {
            insertNode(this.root,newNode);
        }
        //辅助完成插入
        function insertNode(node,NewNode) {
            if (NewNode.key < node.key){
                if (node.left === null){
                    node.left = NewNode;
                }else {
                    insertNode(node.left , NewNode)
                }
            }else {
                if (node.right === null){
                    node.right = NewNode;
                }else {
                    insertNode(node.right,NewNode);
                }
            }
        }
    }
    //就是黑盒 不用管他怎么处理  只有 base case 正确
    //类似于 暴力递归
    //前序遍历  中左右
    BinarySearchTree.prototype.preOrderTraverse = function () {
        let result = [];
        function preOrder(root) {
            if (!root){
                return;
            }
            result.push(root.key);
            preOrder(root.left);
            preOrder(root.right);
        }
        preOrder(this.root);
        return result;
    }
    //中序遍历 左中右
    BinarySearchTree.prototype.inOrderTraverse = function () {
        let result = [];
        function preOrder(root) {
            if (!root){
                return;
            }
            preOrder(root.left);
            result.push(root.key);
            preOrder(root.right);
        }
        preOrder(this.root);
        return result;
    }
    //后序遍历 左右中
    BinarySearchTree.prototype.postOrderTraverse = function () {
        let result = [];
        function preOrder(root) {
            if (!root){
                return;
            }
            preOrder(root.left);
            preOrder(root.right);
            result.push(root.key);
        }
        preOrder(this.root);
        return result;
    }
    //查找搜索树的最小值
    BinarySearchTree.prototype.findMin = function () {
        return min(this.root);
        function min(node) {
            if (node){
            while (node && node.left !== null){
                node = node.left;
            }
            return node.key;
            }else {
                return null;
            }
        }
    }
//    查找搜索树的最大值
    BinarySearchTree.prototype.findMax = function () {
        return max(this.root);
        function max(node) {
            if (node){
                while (node && node.right !== null){
                    node = node.right;
                }
                return node.key;
            }else {
                return null;
            }
        }
    }
    BinarySearchTree.prototype.search = function (key) {
        return searchNode (key,this.root);
        function searchNode(key,node) {
            if (node === null){
                return false;
            }if (key<node.key){
                return searchNode(key,node.left);
            }else if(node.key<key){
                return searchNode(key,node.right);
            }else {
                return true;
            }
        }
    }
    BinarySearchTree.prototype.remove = function (key) {
        this.root = removeNode(key,this.root);
        function removeNode(key,node) {
            if (node === null){
                return null;
            }if (key < node.key){
                node.left=removeNode(key,node.left);
                return node;
            }else if (key > node.key){
                node.right=removeNode(key,node.right);
                return node;
            }else{
                if (node.left === null && node.right===null){
                    node = null;
                    return node;
                }if (node.left === null){
                    node = node.right;
                    return node;
                }else if(node.right === null){
                    node= node.left;
                    return node;
                }
                let aux = findMin(node.right);
                node.key = aux.key;
                node.right=removeNode(aux.key,node.right);
                return node;
            }
        }
        function findMin(node) {
            while (node && node.left !== null){
                node = node.left;
            }
            return node;
        }
    }
}

module.exports = BinarySearchTree;
// let a = new BinarySearchTree();
// a.insert(11);
// a.insert(7);
// a.insert(15);
// a.insert(13);
// a.insert(12);
// a.insert(17);
// a.insert(9);
// a.insert(6);
// a.insert(5);
// a.insert(3);
// // a.remove(3);
// a.remove(5);
// console.log(b);
// console.log(a.preOrderTraverse());