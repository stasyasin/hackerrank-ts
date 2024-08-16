'use strict'

function gfiTask (s ,t ) {
  let dic = {};
  let arrs = s.split('');
  let arrt = t.split('');
  for (let i=0; i < arrs.length; i++) {
    dic[arrs[i]]= dic[arrs[i]] + 1 || 1;
  }
  for (let i=0; i < arrt.length; i++) {
    if (!dic[arrt[i]]) {
      return arrt[i];
    }
  }

  // if(!morsecode) {
  //   return [];
  // }
  // const result = []
  // for (let i = 1; i < morsecode.length; i++) {
  //   if (morsecode.charAt(i)==='.' && morsecode.charAt(i-1)==='.') {
  //     // let temp = morsecode.substring(i-1, i) + '--' + str.substring(i+1, morsecode.length);
  //     let temp = `${morsecode}`.split('');
  //     temp[i]= '-';
  //     temp[i-1]= '-';
  //     // temp = morsecode.substring(i-1, 2) + '--' + morsecode.substring(i+1, morsecode.length);
  //     result.push(temp.join(''));
  //   }
  // }

  // console.log(result)
  // return result;

}
const input1 =  'abcd';
const input2 =  'ceadb';
const output =  ["--..",".--.","..--"];
gfiTask(input)
