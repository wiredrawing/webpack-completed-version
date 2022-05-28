# WebpackでTypescriptをバンドルする手順(多分完成版) 自分用


## npm プロジェクトの作成

```shell

npm init -y

```

## webpackのインストール

```shell

npm install --save-dev webpack webpack-cli 

```

webpackがインストールされた段階で webpackコマンドが正しく動作するかを検証する

```shell

npx webpack --mode development

```

./dist/main.js が作成されればOK


## webpackコマンドの動作を細かく設定する

```shell

# webpack設定用のファイルを作成する
touch webpack.config.js

```
上記ファイル作成後,中身を以下のように修正する

```webpack.config.js

// javascriptをバンドルした際に出力させるディレクトリの制御に使う
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devtool: false,
}

```

## 実際に変換したいjavascriptのエントリポイントとなるファイルを作成する

```shell

# メインのエントリポイントファイル
touch src/index.js

# index.jsが読み込まれるクラスを定義したファイル
touch src/modules/human.js

```
それぞれの内容を以下のようにする


```src/index.js

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

```

```src/modules/human.js
// class構文でHumanクラスを作成する


class Human {

  // // インスタンスプロパティ
  // name;
  // age;
  // address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  setName (name) {
    this.name = name;
    return true;
  }
  setAge (age) {
    this.age = age
    return true;
  }
  setAddress (address) {
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
let allowFunction = (param) => {
  return param
}

let justVariable = "ただの変数";

// 外部へ公開したい識別子を指定
export {
  Human,
  allowFunction,
  justVariable
}
```

この状態で再度, webpackコマンドを実行する

```shell
npx webapck --mode production

```

```dist/app.js
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/human.js":
/*!******************************!*\
  !*** ./src/modules/human.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "allowFunction": () => (/* binding */ allowFunction),
/* harmony export */   "justVariable": () => (/* binding */ justVariable)
/* harmony export */ });
// class構文でHumanクラスを作成する


class Human {

  // // インスタンスプロパティ
  // name;
  // age;
  // address;

  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  setName (name) {
    this.name = name;
    return true;
  }
  setAge (age) {
    this.age = age
    return true;
  }
  setAddress (address) {
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
let allowFunction = (param) => {
  return param
}

let justVariable = "ただの変数";

// 外部へ公開したい識別子を指定


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/human */ "./src/modules/human.js");
// modules/human.jsから Humanクラスを読み込む





let human = new _modules_human__WEBPACK_IMPORTED_MODULE_0__.Human(
  "wire drawing",
  "40",
  "on the Internet"
);

// Humanインスタンスをdump
console.log(human);

// ただの変数をdump
console.log(_modules_human__WEBPACK_IMPORTED_MODULE_0__.justVariable);

// アロー関数を実行
console.log((0,_modules_human__WEBPACK_IMPORTED_MODULE_0__.allowFunction)(10000));
})();

/******/ })()
;
```

上記のような形で出力されればOK


## javascript ES5バージョンでも動作するようにトランスパイルする

上記の出力内容である
dist/app.js ファイルでもモダンなブラウザなら動作するが
極端に古いIEなどではclass構文がサポートされていないES5相当の構文でなければ動作しないため
ES6以降の構文をES5に変換する処理を追加で処理させる


FROM ES6以降 To ES5 を実現させるモジュールをインストールさせる

```shell

npm install -D @babel/core @babel/preset-env babel-loader

```

再度,webpack.config.jsファイルにbabelの設定情報を追記する

```webpack.config.js
// javascriptをバンドルした際に出力させるディレクトリの制御に使う
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devtool: false,
  
  // ---------------------------------------------------
  // babel-loaderなどのトランスパイラの設定を追加
  // ---------------------------------------------------
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      }
    ]
  },
  // デフォルトでwebpackに関するコードがアロー関数を多用しているため
  // IE系でも動作させるためにアロー関数を functionキーワードを用いた構文に変換する
  target: [
    "es5",
    "web",
  ]
}

```

babel向けに webpack.config.js の変更が終わったら再度
```shell
npx webpack --mode development
```
を実行する

babelの設定を追加してトランスパイルした内容が以下のようになる

```dist/app.js
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/human.js":
/*!******************************!*\
  !*** ./src/modules/human.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "allowFunction": () => (/* binding */ allowFunction),
/* harmony export */   "justVariable": () => (/* binding */ justVariable)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// class構文でHumanクラスを作成する
var Human = /*#__PURE__*/function () {
  // // インスタンスプロパティ
  // name;
  // age;
  // address;
  function Human(name, age, address) {
    _classCallCheck(this, Human);

    this.name = name;
    this.age = age;
    this.address = address;
  }

  _createClass(Human, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return true;
    }
  }, {
    key: "setAge",
    value: function setAge(age) {
      this.age = age;
      return true;
    }
  }, {
    key: "setAddress",
    value: function setAddress(address) {
      this.address = address;
      return true;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }]);

  return Human;
}(); // ES5では利用できないアローファンクション


var allowFunction = function allowFunction(param) {
  return param;
};

var justVariable = "ただの変数"; // 外部へ公開したい識別子を指定



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/human */ "./src/modules/human.js");
// modules/human.jsから Humanクラスを読み込む

var human = new _modules_human__WEBPACK_IMPORTED_MODULE_0__.Human("wire drawing", "40", "on the Internet"); // Humanインスタンスをdump

console.log(human); // ただの変数をdump

console.log(_modules_human__WEBPACK_IMPORTED_MODULE_0__.justVariable); // アロー関数を実行

console.log((0,_modules_human__WEBPACK_IMPORTED_MODULE_0__.allowFunction)(10000));
})();

/******/ })()
;
```

class構文やアロー関数, let宣言が var宣言になっていることを確認すればbabelによるトランスパイルは成功

## Typescriptで記述した内容をブラウザ向けのjavascriptに変換する

From Typescript To Javascriptを実行するためのモジュールをインストールする

```shell
npm install --save-dev typescript ts-loader
# ts-loader モジュールはwebpack経由でtypescriptをトランスパイルする場合に
# webpackコマンド実行時にコンパイルエラーを表示するために必要
```


さらに,typescriptのトランスパイル向けの設定を
webpack.config.jsに追加する

```webpack.config.js
// javascriptをバンドルした際に出力させるディレクトリの制御に使う
const path = require("path");

module.exports = {
  entry: {
    // typescriptで記述するプロジェクトの場合は
    // index.tsとする
    app: "./src/index.ts"
    // app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devtool: false,
  module: {
    rules: [
      {
        // -----------------------------------------------------------------
        // typescriptでトランスパイルする場合は 対象のファイルの正規表現を
        //  .js および .ts 両方が対応するように修正する
        // -----------------------------------------------------------------
        test: /\.(js|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      },
      // -----------------------------------------------------------------
      // rules配列に typescript用設定をpushさせる
      // rulesの適用はスタック的なので優先させるべきloaderは必ず
      // pushさせる
      // -----------------------------------------------------------------
      {
        test: /\.ts/,
        use: {
          loader: "ts-loader",
        }
      }
    ]
  },
  target: [
    "es5",
    "web",
  ],
  // トランスパイルの対象となるファイルの拡張子を指定
  resolve: {
    extensions:[
      ".ts", ".js",
    ]
  }
}
```

更に,typescript個別の設定ファイルが必要になるため
以下コマンドを実行する

```shell

npx tsc --init

```

上記コマンド実行後 tsconfig.json というファイルが生成されることを確認する

```tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```
デフォルトでは上記のような内容で出力される

## サンプルのTypescriptを作成する

トランスパイル用のTypescriptファイルを作成する


```src/index.ts
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
```


```src/modules/human.ts
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
```

上記ファイルが作成が完了したら
再度 webpackコマンドを実行して Typescriptをバンドルしてもらう

```shell
npx webpack --mode development
```

上記のトランスパイル結果が以下のようになればOK

```dist/app.js
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/human.ts":
/*!******************************!*\
  !*** ./src/modules/human.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

 // index.tsから読み込まれるtypescriptモジュール
// class構文でHumanクラスを作成する

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.justVariable = exports.allowFunction = exports.Human = void 0;

var Human = /*#__PURE__*/function () {
  function Human(name, age, address) {
    _classCallCheck(this, Human);

    this.name = name;
    this.age = age;
    this.address = address;
  }

  _createClass(Human, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return true;
    }
  }, {
    key: "setAge",
    value: function setAge(age) {
      this.age = age;
      return true;
    }
  }, {
    key: "setAddress",
    value: function setAddress(address) {
      this.address = address;
      return true;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }]);

  return Human;
}();

exports.Human = Human; // ES5では利用できないアローファンクション

var allowFunction = function allowFunction(param) {
  return param;
};

exports.allowFunction = allowFunction;
var justVariable = "ただの変数";
exports.justVariable = justVariable;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
 // エントリポイントとなるindex.ts

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var human_1 = __webpack_require__(/*! ./modules/human */ "./src/modules/human.ts");

var s = "文字列";
console.log(s);
console.log(human_1.Human);
var human = new human_1.Human("test", 10, "address");
}();
/******/ })()
;
```


## ts-loaderはWebpack実行時,Typescriptの型チェックを行ってくれる

上記では
webpack.config.jsに ts-loaderというモジュールをつかことでwebpackコマンド実行時に
Typescriptの型チェックを行ってくれる.

ただ,ts-loaderを使わずに babelのモジュールを使うことでもTypescriptをトランスパイルすることができる

```webpack.config.js
  // ....
  module: {
    rules: [
      // -----------------------------------------------------------------
      // rules配列に typescript用設定をpushさせる
      // rulesの適用はスタック的なので優先させるべきloaderは必ず
      // pushさせる
      // -----------------------------------------------------------------
      {
        test: /\.ts/,
        use: {
          loader: "ts-loader",
        }
      }
    ]
  },
  // ....
```

今回のTypescriptは上記の設定によって
ts-loaderという設定を追加してトランスパイルしたが ts-loaderを使わずに @babel/preset-typescript というモジュールをつかっても
トランスパイルが可能になる

その場合は以下のようにwebpack.config.jsを変更する

```webpack.config.js
  module: {
    rules: [
      {
        // -----------------------------------------------------------------
        // typescriptでトランスパイルする場合は 対象のファイルの正規表現を
        //  .js および .ts 両方が対応するように修正する
        // -----------------------------------------------------------------
        test: /\.(js|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
            ]
          }
        }
      },
    ]
  },
```
上記のようにbabel-loaderのpresets設定に 
@babel/preset-env
@babel/preset-typescript
上記の2つを設定することでもTypescriptをトランスパイルすることができる
ただしこの場合は  webpackコマンドを実行した際に型チェックなどの処理が走らないので
誤ったトランスパイルが行われる可能性がある.
