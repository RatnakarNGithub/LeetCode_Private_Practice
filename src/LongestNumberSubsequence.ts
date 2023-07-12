
export function LongestNumberSubsequence(inputNums: number[]) {
    let sequence = [];
    inputNums.forEach(num => {
        let seqLen = sequence.length;
        while (seqLen > 0) {
            seqLen--;
            if (sequence[seqLen] > num)
                sequence.pop();
        }
        sequence.push(num);
    })

    return sequence;
}

const nums =  [10,9,2,5,3,7,101,18];
console.log(LongestNumberSubsequence(nums));
