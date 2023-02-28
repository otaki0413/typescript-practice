/**
 * !!式の使用例
 * 値を真偽値に変換する方法としてBoolean(式)を使うのが標準的だが、それよりも短い記法として!!(式)がある。
 */

const input1 = "123",
  input2 = "";

const input1isNotEmpty = !!input1; // 文字列 → 真偽値
console.log(input1isNotEmpty); // true
const input2isNotEmpty = !!input2; // 空文字 → 真偽値
console.log(input2isNotEmpty); // false

/**
 * 短絡評価
 * &&や||が左側の値を返す場合、右側は評価すらされないこと。
 * 関数呼び出しの処理が不要な場合に行いたくない場合に有用である
 */

// nameがfalseの場合に、getDefaultName呼び出し
// const displayName = name || getDefaultName();

/**
 * ??演算子
 *
 * x ?? y という形で使用する二項演算子
 * xがnullまたはundefinedの時のみyを返し、それ以外はxを返す
 * 「データがない場合は代替の値を使う」といったシチェーションに有用
 */

// 環境変数SECRETを取得。ただし存在しなければ"default"を用いる
const secret = process.env.SECRET ?? "default";

console.log(`secretは${secret}です`);
