

//output = [[1,4], [6,8], [9,10]]
/*
i = 0 to  n-1;
j = 1 to n;

i[1] > j[0]
 => [i[0], j[1]]  inset at i
 => delete join

 if merged [1,4], [6,8], [9, 10]

 i = i; j = j;
i[1] < j[0] - don't merge
j++;
*/

export function MergeIntervals(nums: number[][]) {
    let i = 0, j = 1;
    while (j < nums.length) {
        if (nums[i][1] > nums[j][0]) {
            nums.splice(i, 1, [nums[i][0], nums[j][1]]);
            nums.splice(j, 1);
        }
        else {
            i++; j++;
        }
    }

    return nums;
}

let intervals =  [[1,3], [2,4], [6,8], [9,10]];
console.log(MergeIntervals(intervals));