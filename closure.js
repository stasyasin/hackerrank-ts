'use strict';

function main() {
    // console.log('we entered');
    // for (i=0; i<0;i++) {
    //     console.log('we entered');
    //     console.log(i);
    // }
    // for (var i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    var result = [];

    for (var i = 0; i < 5; i++) {
        result[i] = function () {
            console.log(i);
        };
    }
}

// (function () {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
// })();

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

main();
