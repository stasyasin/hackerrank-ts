'use strict';

function makeTest(A) {
    let flag = true;
    let i = 1;
    let result = -2;

    if (A.lengh < 2) {
        return -2;
    }

    let minDis = Math.abs(A[1] - A[0]);

    while (flag) {
        if (A[i] - A[i-1] === 0) {
            result = 0;
            flag = false;
        }
        if (minDis > 100000000) { // fix here
            result = -1;
            flag = false;
        }

        if (Math.abs(A[i] - A[i-1]) < minDis) {
            minDis = Math.abs(A[i] - A[i-1]);
        }

        i++;
        if ( i >= A.length - 1) {
            flag = false;
        }

    }

    if (minDis !== undefined) {
        result = minDis;
    }


    return result;
}

function main() {

    const s = 'aaaabbcc';

    // const A = [0, 3, 3, 7, 5, 3, 11, 1];
    const A = [0, 5];

    let result = makeTest(A);
    console.log(result);
}


main();
