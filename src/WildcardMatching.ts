
export function isMatch(str: string, pattern: string) {
    //Base Condition:
    if (str.length == 0) {
        pattern.replace(/['*']*$/, '');
        return pattern.length === 0;
    }

    while (str.length > 0) {
        switch(pattern[0]) {
            case '*' :
                str = str.slice(1);
                return isMatch(str, pattern.substring(1)) || isMatch(str, pattern);

            default :
                if (pattern[0] !== str[0]) return false;

            case '?': 
                pattern = pattern.slice(1);
                str = str.slice(1);
            break;
        }
    }

    pattern.replace(/['*']*$/, '');
    return str.length == 0 && pattern.length == 0;
}

console.log(isMatch('baa', '*a'));
console.log(isMatch('aa', 'a?'));