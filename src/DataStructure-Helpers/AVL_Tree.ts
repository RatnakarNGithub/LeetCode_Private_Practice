
class AVLBinaryNode<T>{
    value: T;
    left: AVLBinaryNode<T>;
    right: AVLBinaryNode<T>;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    height() : number {
        if (this.left == null && this.right == null)
            return 0;

        const leftHeight = this.left?.height() ?? 0;
        const rightHeight = this.right?.height() ?? 0;

        return (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1;
    };
}

export class AVLBinaryTree<T> {
    root: AVLBinaryNode<T> = null;

    public insert(value: T) {
        const new_node  = new AVLBinaryNode<T>(value);
        if (this.root === null) {
            this.root = new_node;
            return;
        }
        this.root = this.insert_internal(new_node, this.root);
    }

    insert_internal(node: AVLBinaryNode<T>, start_node: AVLBinaryNode<T>) {
        let updated_start_node = start_node;
        if (start_node.value > node.value) {
            if (start_node.left === null) {
                start_node.left = node;
                return updated_start_node;
            }
            start_node.left = this.insert_internal(node, start_node.left);
        }
        else {
            if (start_node.left === null) {
                node.left = start_node;
                updated_start_node = node;
                return updated_start_node;
            }
            if (start_node.right === null) {
                start_node.right = node;
                return updated_start_node;
            }
            start_node.right = this.insert_internal(node, start_node.right);
        }
        const heightDiff = (start_node.left?.height() ?? -1) - (start_node.right?.height() ?? -1);
        if (heightDiff === 2)
            updated_start_node = this.balanceLeft(start_node);
        else if (heightDiff === -2) 
            updated_start_node = this.balanceRight(start_node);

        return updated_start_node;
    }

    balanceLeft(start_node: AVLBinaryNode<T>) {
        const new_start_node = start_node.left;
        start_node.left = new_start_node.right;
        new_start_node.right = start_node;

        return new_start_node;
    }

    balanceRight(start_node: AVLBinaryNode<T>) {
        const new_start_node = start_node.right;
        start_node.right = new_start_node.left;
        new_start_node.left = start_node;

        return new_start_node;
    }

    printTree() {
        let stack = [this.root];
        let printStr = "";
        while (stack.length) {
            let current_node = stack.shift();
            printStr += current_node.value + " ";
            if (current_node.height() == 0) continue;

            if (current_node.left) stack.push(current_node.left);
            else printStr += "null ";

            if (current_node.right) stack.push(current_node.right);
            else printStr += "null ";
        }
        console.log(printStr);
    }
}

function main() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let avlTree = new AVLBinaryTree<number>();
    values.forEach(v => avlTree.insert(v));
    avlTree.printTree();

    avlTree = new AVLBinaryTree<number>();
    values.reverse().forEach(v => avlTree.insert(v));
    avlTree.printTree();
}

main();

