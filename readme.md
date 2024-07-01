# Clear code benchmark for TS

```
LOG: Built 1_000_000 strings for the benchmark
LOG: testSuite was prepared in 374.09429500000005ms.
LOG: Running the "Same string 10k attempts" benchmark for the dirty code
LOG: Running the "Same string 10k attempts" benchmark for the clean code
LOG: Running the "10k random strings" benchmark for the dirty code
LOG: Running the "10k random strings" benchmark for the clean code
LOG: Calculating the results

================================================================================
| Test name                |     Clean code    |  Simple function  |   Delta   |
--------------------------------------------------------------------------------
| Same string 1M attempts  | 1940.038611000000 | 630.6579410000001 | 3.0700000 |
--------------------------------------------------------------------------------
| 1M random strings        | 1903.845174999999 | 786.4965219999999 | 2.4200000 |
================================================================================

```

## How to run the benchmark

```shell
npm install
npm run benchmark 
```