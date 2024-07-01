import { testSuiteBuilder } from "./test-suit-builder";
import {parseDirty} from "./dirty-code";
import {parseClean} from "./clean-code";

const padStart = (value: number, targetLength: number, padString: string) => {
  let str = value.toFixed(targetLength).substring(0, targetLength);
  while (str.length < targetLength) {
    str = padString + str;
  }
  return str;
}

const results = {
  same: {clean: 0, dirty: 0, delta: 0},
  many: {clean: 0, dirty: 0, delta: 0}
}

console.log('LOG: Built 1_000_000 strings for the benchmark');
const tsStart = performance.now();
const testSuite = testSuiteBuilder();
console.log(`LOG: testSuite was prepared in ${performance.now()-tsStart}ms.`);


console.log('LOG: Running the "Same string 10k attempts" benchmark for the dirty code');
const startD1 = performance.now();
const D1Results = [];
for(let i=0;i<1_000_000;i++) {
  D1Results.push(parseDirty(testSuite[0]));
}
const endD1 = performance.now();

console.log('LOG: Running the "Same string 10k attempts" benchmark for the clean code');
const startC1 = performance.now();
const C1Results = [];
for(let i=0;i<1_000_000;i++) {
  C1Results.push(parseClean(testSuite[0]));
}
const endC1 = performance.now();

console.log('LOG: Running the "10k random strings" benchmark for the dirty code');
const startD2 = performance.now();
const D2Results = [];
for(let i=0;i<1_000_000;i++) {
  D2Results.push(parseDirty(testSuite[i]));
}
const endD2 = performance.now();

console.log('LOG: Running the "10k random strings" benchmark for the clean code');
const startC2 = performance.now();
const C2Results = [];
for(let i=0;i<1_000_000;i++) {
  C2Results.push(parseClean(testSuite[i]));
}
const endC2 = performance.now();


console.log('LOG: Calculating the results');
results.same.dirty = endD1 - startD1;
results.many.dirty = endD2 - startD2;

results.same.clean = endC1 - startC1;
results.many.clean = endC2 - startC2;

results.same.delta = ((100*results.same.clean/results.same.dirty)|0)/100;
results.many.delta = ((100*results.many.clean/results.many.dirty)|0)/100;


const resultStr = {
  same: {clean: padStart(results.same.clean, 17, ' '), dirty: padStart(results.same.dirty, 17, ' '), delta: padStart(results.same.delta, 9, ' ')},
  many: {clean: padStart(results.many.clean, 17, ' '), dirty: padStart(results.many.dirty, 17, ' '), delta: padStart(results.many.delta, 9, ' ')},
}

console.log(`
================================================================================
| Test name                |     Clean code    |  Simple function  |   Delta   |
--------------------------------------------------------------------------------
| Same string 1M attempts  | ${resultStr.same.clean} | ${resultStr.same.dirty} | ${resultStr.same.delta} |
--------------------------------------------------------------------------------
| 1M random strings        | ${resultStr.many.clean} | ${resultStr.many.dirty} | ${resultStr.many.delta} |
================================================================================
`)