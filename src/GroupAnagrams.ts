
function getHashFor(str: string) {
    const primes = {
        a: 2,  b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, 
        h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, 
        o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, 
        v: 79, w: 83, x: 89, y: 97, z: 101, '-': 103, '_': 107, 
        A: 109, B: 113, C: 127, D: 131, E: 137, F: 139, G: 149, 
        H: 151, I: 157, J: 163, K: 167, L: 173, M: 179, N: 181, 
        O: 191, P: 193, Q: 197, R: 199, S: 211, T: 223, U: 227, 
        V: 229, W: 233, X: 239, Y: 241, Z: 251
    };

    let hash = 0;
    str.split('').forEach(c => hash += (primes[c] || 1));

    return hash;
}


export function GroupAnagrams(anagrams: string[]) {

    const anagramGroups = {};

    anagrams.forEach(a => {
        const hash = getHashFor(a);
        if (!anagramGroups[hash])
            anagramGroups[hash] = [a];
        else
            anagramGroups[hash].push(a);
    })

    return Object.values(anagramGroups);
}

function main() {
    const strs = ["eat","tea","tan","ate","nat","bat"];
    const groups = GroupAnagrams(strs);
    console.log(groups);
}

main();