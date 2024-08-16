'use strict';

function makeTest(inputArray) {
  const result = inputArray.sort(
    (a, b) =>
      a.type.localeCompare(b.type) ||
      JSON.stringify(a.paxPerPtc, (k, v) => (v ? v : '')).localeCompare(JSON.stringify(b.paxPerPtc, (k, v) => (v ? v : ''))) ||
      JSON.stringify(a.description, (k, v) => (v ? v : '')).localeCompare(JSON.stringify(b.description, (k, v) => (v ? v : '')))
  );

  return result;
}

function main() {
  const inputArray = [];
  const value1 = { name: 'value1', type: 'z', paxPerPtc: 'z', description: 'z' };
  const value2 = { name: 'value2', type: 'b', paxPerPtc: 'b', description: 'b' };
  const value3 = { name: 'value3', type: 'b', paxPerPtc: undefined, description: 'b' };
  const value4 = { name: 'value4', type: 'b', paxPerPtc: undefined, description: undefined };
  const value5 = { name: 'value5', type: 'b', paxPerPtc: undefined, description: 'z' };
  const value6 = { name: 'value6', type: 'b', paxPerPtc: undefined, description: undefined };
  const value7 = { name: 'value7', type: 'b', paxPerPtc: 'b', description: undefined };
  const value8 = { name: 'value8', type: 'b', paxPerPtc: undefined, description: 'z' };
  const value9 = { name: 'value9', type: 'b', paxPerPtc: 'b', description: 'b' };
  const value10 = { name: 'value10', type: 'a', paxPerPtc: 'a', description: 'a' };
  inputArray.push(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10);

  let result = makeTest(inputArray);
  console.log(result);
}

main();
