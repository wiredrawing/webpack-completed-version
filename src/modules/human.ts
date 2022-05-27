// index.tsから読み込まれるtypescriptモジュール
// class構文でHumanクラスを作成する

class Human {

  // // インスタンスプロパティ
  name;
  age;
  address;

  constructor(name: string , age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  setName (name: string) {
    this.name = name;
    return true;
  }
  setAge (age: number) {
    this.age = age
    return true;
  }
  setAddress (address: string) {
    this.address = address;
    return true;
  }

  getName () {
    return this.name;
  }
  getAge () {
    return this.age;
  }
  getAddress () {
    return this.address;
  }
}

// ES5では利用できないアローファンクション
let allowFunction = (param: string) => {
  return param
}

let justVariable = "ただの変数";

// 外部へ公開したい識別子を指定
export {
  Human,
  allowFunction,
  justVariable
}