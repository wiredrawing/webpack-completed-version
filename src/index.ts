// エントリポイントとなるindex.ts

import {Human} from "./modules/human";



let s : string = "文字列"

console.log(s);
console.log(Human);

let human = new Human(
  "test",
  10,
  "address",
);