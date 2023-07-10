// https://leetcode.com/problems/permutations-ii/

"use strict";

function printArray(nums: Array<number>) {
    console.log(nums.join(" "));    
}

function permutationStarter(nums: Array<number>) {
    // first, convert nums to num : count json
    let source = new Map<number, number>();
    nums.forEach(n => {
        if (source.has(n))
            source.set(n, source.get(n)!+1);
        else
            source.set(n, 1);
    })

    console.log(source);
    let result = new Array<number>(nums.length);
    permutations([...source.keys()], [...source.values()], result, 0);
}

let total = 0;
function permutations(source: Array<number>, counts: Array<number>, result: Array<number>, resultPos: number) {
    if (resultPos == result.length) {
        printArray(result);
        total++;
        return;
    }
    for(let i = 0; i < source.length; i++) {
        if (counts[i] == 0)  continue;
        result[resultPos] = source[i];
        counts[i]--;
        permutations(source, counts, result, resultPos + 1);
        counts[i]++;
    }
}

var input = [-6, -1, 0, 2, 1, 8, 11 ];
permutationStarter(input);
console.log("Expected = ", 7*6*5*4*3*2*1, ",  Actual = ", total);