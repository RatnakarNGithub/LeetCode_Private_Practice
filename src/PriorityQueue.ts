
export class PriorityQueue {
    dataStore : Array<number> = [];

    enqueue(value: number) {
        this.dataStore.push(value);
        let idx = this.dataStore.length - 1;

        this.sift_up(idx);
        this.print();
    }

    protected elementCompare = (idx, compareIdx) : boolean => {
        return (this.dataStore[idx] < this.dataStore[compareIdx]);
    }

    private sift_up(idx: number) {
        let parentIdx = Math.floor((idx - 1) /2);

        while (this.elementCompare(idx, parentIdx)) {
            let temp = this.dataStore[parentIdx];
            this.dataStore[parentIdx] = this.dataStore[idx];
            this.dataStore[idx] = temp;

            if (parentIdx === 0) break;
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) /2);
        }
    }

    dequeue() {
        let returnValue = this.dataStore[0];
        this.dataStore[0] = this.dataStore[this.dataStore.length - 1];
        this.dataStore.pop();

        this.sift_down(0);

        return returnValue;
    }

    private sift_down(idx: number) {
        let left = 2*idx + 1;
        let right = 2*idx + 2;

        if (left >= this.dataStore.length) return;
        let childIdx = left;
        if (right < this.dataStore.length && this.elementCompare(right, childIdx))
            childIdx = right;

        if (this.elementCompare(childIdx, idx)) {
            let temp = this.dataStore[childIdx];
            this.dataStore[childIdx] = this.dataStore[idx];
            this.dataStore[idx] = temp;

            this.sift_down(childIdx);
        }
    }

    peek() {
        return this.dataStore[0];
    }

    size() {
        return this.dataStore.length;
    }

    print() {
        console.log(this.dataStore.join(' '));
    }
};

export class MaxPriorityQueue extends PriorityQueue {
    protected elementCompare = (idx, compareIdx) : boolean => {
        return (this.dataStore[idx] > this.dataStore[compareIdx]);        
    }
}
