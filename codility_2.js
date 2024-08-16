'use strict';

function makeTest(A) {
    const sorted = A.sort((a, b) => a - b);
    // const uniqueArray = sorted.filter(function(item, pos, self) {
    //     return self.indexOf(item) == pos;
    // });
    let startVac = 0;
    let endVac = startVac + 1;
    let destArr = [];
    let startZero = true;

    for (let i = 0; i < A.length; i++) {
        if (A[startVac] === A[i] && i !== 0) {
            startVac++;
            endVac = startVac + 1;
            startZero = false;
        } else {
            if(destArr.indexOf(A[i]) !== -1) {
                endVac = i;
            }
        }

        destArr.push(A[i]);
    }
    // console.log(endVac);
    // console.log(startVac);
    return startZero ? endVac - (startVac + 1) : endVac - startVac;
}

function main() {

    const s = 'aaaabbcc';

    // const A = [7, 3, 7, 3, 1, 3, 4, 1];
    const A = [7, 5, 2, 7, 2, 7, 4, 7];

    let result = makeTest(A);
    console.log(result);
}


main();
