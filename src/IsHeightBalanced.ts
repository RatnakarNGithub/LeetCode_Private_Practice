
export function IsHeightBalanced(tree: Array<number | null>) : boolean {
    let treeHeight = Math.floor(Math.log2(tree.length));
    let leftHeight = 0;
    let rightHeight = 0;

    console.log(tree.length, " - ", treeHeight, " - ", 1 << treeHeight);
    if (tree.length <=1) return true;
    tree.splice(0, 1);

    for(let i = 1; i < treeHeight; i++) {
        let maxCount = 1 << i;
        const itemsAtLevel = tree.splice(0, maxCount);
        for (let j = 0; j < maxCount/2; i++)
            if (itemsAtLevel[j] !== null) {
                leftHeight++;
                break;
            }
        
        for(let j = maxCount/2; j < maxCount; j++)
            if (itemsAtLevel[j] !== null) {
                rightHeight++;
                break;
            }
    }

    if (Math.abs(rightHeight - leftHeight) <= 1) {
        let maxCount = 1 << treeHeight;
        for (let j = 0; j < maxCount / 2 && j < tree.length; j++)
            if (tree[j] !== null) {
                leftHeight++;
                break;
            }

        for (let j = maxCount/2; j < maxCount && j < tree.length; j++) 
            if (tree[j] !== null) {
                rightHeight++;
                break;
            }
    }

    return (Math.abs(rightHeight - leftHeight) <= 1);
}

function main() {
    const input = [1,2,2,3,3,null,null,4,4];
    console.log("IsBalanced = ", IsHeightBalanced(input));
    console.log("IsBalanced = ", IsHeightBalanced([3,9,20,null,null,15,7]));
}

main();