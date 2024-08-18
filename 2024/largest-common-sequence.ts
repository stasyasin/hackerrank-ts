function lcs(mainStr: string, searchStr: string) {
    mainStr = mainStr.toLowerCase();
    searchStr = searchStr.toLowerCase();
    if (mainStr === searchStr) {
        return true;
    }
    const m = mainStr.length;
    const n = searchStr.length;

    const matrix = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mainStr[i] === searchStr[j]) {
                matrix[i+1][j+1] = matrix[i][j] + 1;
            }

            if (matrix[i+1][j+1] === searchStr.length) {
                return true;
            }
        }
    }

    return false;
}

const s1 = 'MainString';
const s2 = 'Str';
const result = lcs(s1 , s2);
console.log(result);
