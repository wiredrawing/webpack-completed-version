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