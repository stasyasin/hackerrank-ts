'use strict'

function testTruthyChecker() {
  let result = true;

  let valUndefined;
  const valUndefined2 = undefined;
  const valNull = null;
  const valString = '';
  const valNumber = 0;
  const valNan = NaN;
  const valFalse = false;

  if (valUndefined) {
    console.log('We should not see this message');
    result = false;
  }

  if (valUndefined2) {
    console.log('We should not see this message');
    result = false;
  }

  if (valNull) {
    console.log('We should not see this message');
    result = false;
  }

  if (valString) {
    console.log('We should not see this message');
    result = false;
  }

  if (valNumber) {
    console.log('We should not see this message');
    result = false;
  }

  if (valNan) {
    console.log('We should not see this message');
    result = false;
  }

  if (valFalse) {
    console.log('We should not see this message');
    result = false;
  }


  if(result) {
    console.log('All checks passed!')
  }
}

testTruthyChecker();

