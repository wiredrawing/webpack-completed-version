// modules/human.jsから Humanクラスを読み込む


import {
  Human,
  allowFunction,
  justVariable
} from "./modules/human"


let human = new Human(
  "wire drawing",
  "40",
  "on the Internet"
);

// Humanインスタンスをdump
console.log(human);

// ただの変数をdump
console.log(justVariable);

// アロー関数を実行
console.log(allowFunction(10000));