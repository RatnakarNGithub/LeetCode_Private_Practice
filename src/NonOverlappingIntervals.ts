
export function NonOverlappingIntervals(intervals: number[][])
{
    let graph = new Map<Number, number>();
    let intervalsToRemove = [];

    intervals.forEach(interval => {
        let previous = graph.get(interval[0]);
        if (!previous) {
            graph.set(interval[0], interval[1]);
        }
        else{
            if (previous > interval[1]) {
                graph.set(interval[0], interval[1]);
                intervalsToRemove.push([interval[0], previous]);                
            }
            else intervalsToRemove.push(interval);
        }
    });

    const nonOverlappingIntervals = [];
    graph.forEach((v, k) => nonOverlappingIntervals.push([k, v]));

    return nonOverlappingIntervals;
}

// IntervalTreeNode represents a node in the interval tree
// class IntervalTreeNode {
//     interval: number[];
//     maxEnd: number;
//     left: IntervalTreeNode;
//     right: IntervalTreeNode;
//     constructor(interval) {
//       this.interval = interval;
//       this.maxEnd = interval[1]; // Maximum end value in the subtree rooted at this node
//       this.left = null; // Left child node
//       this.right = null; // Right child node
//     }
//   }
  
//   // IntervalTree represents the interval tree data structure
// export  class IntervalTree {
//     root = null;
  
//     // Insert an interval into the interval tree
//     insert(interval) {
//       this.root = this._insertHelper(this.root, interval);
//     }
  
//     _insertHelper(node, interval) {
//       // If the current node is null, create a new node for the interval
//       if (node === null) {
//         return new IntervalTreeNode(interval);
//       }
  
//       // Check if the current interval overlaps with the node's interval
//       if (this._doOverlap(interval, node.interval)) {
//         // Discard the current interval as it overlaps with an existing interval
//         return node;
//       }
  
//       // Update the maximum end value in the subtree rooted at this node
//       node.maxEnd = Math.max(node.maxEnd, interval[1]);
  
//       // Recursively insert the interval into the left or right subtree
//       if (interval[0] < node.interval[0]) {
//         node.left = this._insertHelper(node.left, interval);
//       } else {
//         node.right = this._insertHelper(node.right, interval);
//       }
  
//       return node;
//     }
  
//     // Check if two intervals overlap
//     _doOverlap(interval1, interval2) {
//       return interval1[0] <= interval2[1] && interval2[0] <= interval1[1];
//     }
  
//     // Perform an inorder traversal of the interval tree
//     inorderTraversal() {
//       this._inorderTraversalHelper(this.root);
//     }
  
//     _inorderTraversalHelper(node) {
//       if (node !== null) {
//         this._inorderTraversalHelper(node.left);
//         console.log(node.interval);
//         this._inorderTraversalHelper(node.right);
//       }
//     }
//   }
  
//   // Function to find non-overlapping intervals
//   function findNonOverlappingIntervals(intervals) {
//     const intervalTree = new IntervalTree();
//     const nonOverlappingIntervals = [];
  
//     for (const interval of intervals) {
//       if (!isOverlap(intervalTree.root, interval)) {
//         intervalTree.insert(interval);
//         nonOverlappingIntervals.push(interval);
//       }
//     }
  
//     return nonOverlappingIntervals;
//   }
  
//   // Helper function to check overlap with existing intervals in the interval tree
//   function isOverlap(node, interval) {
//     if (node === null) {
//       return false;
//     }
  
//     if (node.maxEnd < interval[0]) {
//       return false;
//     }
  
//     if (interval[1] < node.interval[0]) {
//       return isOverlap(node.left, interval);
//     }
  
//     if (interval[0] > node.interval[1]) {
//       return isOverlap(node.right, interval);
//     }
  
//     return true;
//   }
  
// Example usage:
const intervals = [[1,2],[2,3],[3,4],[1,3]];
const nonOverlapping = NonOverlappingIntervals(intervals);
console.log(nonOverlapping);
