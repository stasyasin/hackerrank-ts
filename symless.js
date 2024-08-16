'use strict'

function symlessTask () {

  for (let i = 1; i <= 100; i++) {

    // Solution 1
    // if ((i % 3 === 0) && (i % 5 === 0)) {
    //   console.log('FizzBuzz');
    // } else if ((i % 3 === 0)) {
    //   console.log('Fizz');
    // } else if ((i % 5 === 0)) {
    //   console.log('Buzz');
    // } else {
    //   console.log(i);
    // }

    // Solution 2
    switch (true) {
      case (i % 3 === 0) && (i % 5 === 0):
        console.log('FizzBuzz');
        break;
      case (i % 3 === 0):
        console.log('Fizz');
        break;
      case (i % 5 === 0):
        console.log('Buzz');
        break;
      default:
        console.log(i);
        break;
    }
  }

}

symlessTask()
