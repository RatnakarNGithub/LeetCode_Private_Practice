
export function CountingBits(range: number) {
    const bitCountArray = [];
    for (let i = 0; i < range; i++) {
        let bitCount = 0;
        let j = i;
        while (j) {
            if ((j & 1) == 1) bitCount++;
            j = j >> 1; 
        }
        bitCountArray.push(bitCount);
    }

    return bitCountArray;
};

console.log(CountingBits(10));