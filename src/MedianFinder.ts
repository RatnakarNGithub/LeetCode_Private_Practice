import process from "process";
import { MaxPriorityQueue, PriorityQueue } from "./DataStructure-Helpers/PriorityQueue";

export class MedianFinder {
    maxPQ = new MaxPriorityQueue();
    minPQ = new PriorityQueue();

    addNum(num: number) {
        this.minPQ.enqueue(num);
        if (this.minPQ.size() - this.maxPQ.size() == 2)
        {
            let smallest = this.minPQ.dequeue();
            this.maxPQ.enqueue(smallest);
        }
    }

    findMedian() {
        if (this.minPQ.size() === this.maxPQ.size()) 
            console.log ((this.minPQ.peek() + this.maxPQ.size()) / 2);
        else 
            console.log( this.minPQ.peek() );
    }
}

function main() {
    const medianFinder = new MedianFinder();
    process.argv.splice(0, 2);
    if (process.argv.length > 0) {
        process.argv.forEach(v => {
            medianFinder.addNum(Number.parseInt(v));
        });
        medianFinder.findMedian();
    }
    else {
        medianFinder.addNum(1); // arr = [1]
        medianFinder.addNum(2); // arr = [1, 2]
        medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
        medianFinder.addNum(3); // arr[1, 2, 3]
        medianFinder.findMedian(); // return 2.0
    }
}
main();