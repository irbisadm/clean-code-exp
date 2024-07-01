# Clear code benchmark for TS

```
LOG: Built 1_000_000 strings for the benchmark
LOG: testSuite was prepared in 342.207383ms.
LOG: Running the "Same string 10k attempts" benchmark for the dirty code
LOG: Running the "Same string 10k attempts" benchmark for the clean code
LOG: Running the "Same string 10k attempts" benchmark for the clean code
LOG: Running the "10k random strings" benchmark for the dirty code
LOG: Running the "10k random strings" benchmark for the clean code
LOG: Running the "10k random strings" benchmark for the clean code
LOG: Calculating the results

================================================================================
| Test name                |        Same string      |     Random strings      |
--------------------------------------------------------------------------------
| clean                    | 2249.286485999999968043 | 521.8800699999999324063 |
--------------------------------------------------------------------------------
| clean opt                | 645.4192109999999047431 | 844.5463490000001911539 |
--------------------------------------------------------------------------------
| dirty                    | 521.8800699999999324063 | 819.8341789999994944082 |
--------------------------------------------------------------------------------
| delta non opt            | 4.299999999999999822364 | 2.750000000000000000000 |
--------------------------------------------------------------------------------
| delta btw clean          | 3.479999999999999982236 | 2.669999999999999928945 |
--------------------------------------------------------------------------------
| delta opt clean          | 1.229999999999999982236 | 1.030000000000000026645 |
================================================================================

```

## How to run the benchmark

```shell
npm install
npm run benchmark 
```