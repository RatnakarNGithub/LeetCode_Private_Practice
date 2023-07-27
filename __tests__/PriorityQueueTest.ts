import { PriorityQueue } from "../src/DataStructure-Helpers/PriorityQueue";

function main() {
    const inputValues = [1, 3, -1, 8, 4, -6, 0, 100];

    const pq = new PriorityQueue();
    inputValues.forEach(n => pq.enqueue(n));
    pq.print();

    let v = pq.dequeue();
    while (v !== undefined) {
        console.log(v);
        v = pq.dequeue();
    }
}
main();