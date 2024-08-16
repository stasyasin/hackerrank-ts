'use strict';

function makeTest(N) {
    let L = 0;
    let R = 1;
    let impossible = 'impossible';
    let result = '';
    let flag = true;
    let i = 0;

    while (flag) {
        if (N === L || N === R) {
            flag = false;
        }

        if (N < L && N < R) {
            result = impossible;
            flag = false;
        }

        L = 2* L - R;
        R = 2 * R - L;
        console.log(L);
        console.log(R);
        result = result + 'L';

        i++;

        // here to write soem condition to quit
        if ( i >5) {
            flag = false;
        }
    }

    return result;
}

function main() {

    const s = 'aaaabbcc';

    const A = [7, 3, 7, 3, 1, 3, 4, 1];

    const N = 21;

    let result = makeTest(N);
    console.log(result);
}


main();
