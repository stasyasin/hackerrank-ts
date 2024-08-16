'use strict';

function timeInWords(h, m) {
  let result = '';
  const hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const minutes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const minutesTen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const shortMinutes = ['ten', 'twenty', 'thirty', 'forty', ' fifty'];
  const quarter = 'quarter';
  const half = 'half';


  if (m === 0) {
    return hours[h - 1] + ` o' clock`;
  }

  if (m === 60) {
    h = h + 1;
    return hours[h - 1] + ` o' clock`;
  }

  if (m % 10 === 0) {
    result = shortMinutes[m / 10 - 1];

  }

  if (m % 30 === 0) {
    result = half;
    return result + ' past ' + hours[h - 1];
  }

  if (m % 15 === 0 || m % 45 === 0) {
    result = quarter;
    if (m < 30) {
      return result + ' past ' + hours[h - 1];
    } else {
      h = h + 1;
      return result + ' to ' + hours[h - 1];
    }
  }

  if (m % 10 !== 0 && m % 15 !== 0 && m % 45 !== 0) {
    if (m < 10) {
      if (m === 1) {
        result = result + minutes[m - 1];
        result = result + ' minute past ';
      } else {
        result = result + minutes[m - 1];
        result = result + ' minutes past ';
      }
    } else if (m < 20) {
      result = result + minutesTen[m - 11];
      result = result + ' minutes past ';
    } else if (m < 30) {
      result = result + shortMinutes[1];
      result = result + ' ';
      result = result + minutes[m - 21];
      result = result + ' minutes past ';
    } else if (m > 30) {
      m = 60 - m;
      if (m < 10) {
        if (m === 1) {
          result = result + minutes[m - 1];
          result = result + ' minute to ';
        } else {
          result = result + minutes[m - 1];
          result = result + ' minutes to ';
        }
        return result + hours[h];
      } else if (m < 20) {
        result = result + minutesTen[m - 11];
        result = result + ' minutes to ';
        return result + hours[h];
      } else if (m < 30) {
        result = result + shortMinutes[1];
        result = result + ' ';
        result = result + minutes[m - 21];
        result = result + ' minutes to ';
        return result + hours[h];
      }
    }
  }
  return result + hours[h - 1];

}

function main() {
  let h, m;
  h = 1;
  m = 1;

  let result = timeInWords(h, m);
  console.log(result);
}

main();
