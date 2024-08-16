'use strict';

const lpc7 = ["araa","gkeshishian","jimo","kyle","jim","ara","asharma","nbull","arog","rcastro","mario","rdelgado","ani","fstagger","jarobinson1","sfarah","jhaley","avcavanagh","rrobertson","kvonada","bnewton","mparson","ncincotta","lmiguel","btaylor3","twolfe","jrobertson","brothman","blucas","cbrulia","anavarro","pbatoon","bgoehner","ncarney","jlerner","kneelley","tluong","ksabo","hvallejo","ocotter","cframe1","aguerena","mhusry","fmanzano","jfreire","sdemianets","emesnenko","lcortez","chall","ljimenez","asashoyan","cblair","jsmith","amonfort","rdukes","lmercado","erowe","mmarroquin"];
const lpc8 = ["aarmatis","araa","don","gkeshishian","jimo","jeakin","kyle","luserver1","shester","tom","ttopa","sbean","jim","ara","mwilson","asharma","nbull","arog","pemami","rcastro","mario","rdelgado","tgosselin","mike","ani","fstagger","jpierce1","jarobinson1","sfarah","jhaley","avcavanagh","rrobertson","kvonada","wcox","bnewton","mparson","ncincotta","lmiguel","btaylor3","user","twolfe","bgoehner","tluong","anonymousUser","admin","msharma","string","jaydeeppatoliya","jaydeep","taylor","jpatoliya","anavarro","cbrulia","kneelley","ksabo","sdemianets","vkozak","eMesnenko","hvallejo","aguerena","fmanzano","jfreire","sdemianets_user","akoyshman","lcortez","chall","ljimenez","asashoyan","ksherfedinov","mhusry","cframe1","ocotter","cblair","jsmith11","avasylenko","rdukes"];

function makeTest(arr1, arr2) {
  const result = [];
  arr1 = arr1.map((val) => val.toLowerCase());
  arr2 = arr2.map((val) => val.toLowerCase());
  arr1.forEach((lpc7val) => {
    if (arr2.indexOf(lpc7val) === -1) {
      result.push(lpc7val);
    }
  })

  return result;
}


let result = makeTest(lpc7, lpc8);
console.log(result);
