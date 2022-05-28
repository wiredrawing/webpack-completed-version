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


let MyFunction  = (a: number, b: number) :number => {

  return a + b;
}

let result: number = MyFunction(4, 4);

console.log(result);
let s : string = result;