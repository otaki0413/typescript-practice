import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("パスワードを入力してください:", (password) => {
  if (password === "hogehoge") {
    console.log("ようこそ");
  } else {
    console.log("だれ？");
  }
  rl.close();
});

/**
 * 等価演算を行う時は、基本的に ==と!=を使用しない
 * ただし下記の場合に限り使用しても良い
 * null と undefined を一緒くたにして
 * データが無いことを表すために、"x==null"とする
 */
const x = null;
console.log(x == null); // nullとはデータがないことを意味する
