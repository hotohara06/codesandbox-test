/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// var val2 = "let変数を再宣言";

// // constは上書き、再宣言不可
// const val3 = "const変数";
// console.log(val3);

// // // const変数は上書き不可
// // val3 = "const変数を上書き";

// // constは再宣言不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけぇ",
  age: "28"
};
console.log(val4);

val4.name = "jak";
console.log(val4);

val4.address = "Hiroshima";
console.log(val4);

// constで定義した配列は要素の変更が可能
const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "じゃけぇ";
const age = 28;

// 「私の名前はじゃけぇです。年齢は28歳です。」
// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
// const func2 = str => str;
console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
const func3 = (num1, num2) => num1 + num2;
console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);

// const { name1, age1 } = myProfile;
// const message4 = `名前は${name1}です。年齢は${age1}です。`;
// console.log(message4);

const myProfile = ["じゃけぇ", 28];

const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message5);

const [name1, age1] = myProfile;
const message6 = `名前は${name1}です。年齢は${age1}歳です。`;
console.log(message6);

/**
 * デフォルト値、引数など
 * 分割代入にも有効
 */
const sayHello = (name = "ゲスト") => {
  console.log(`こんにちは！${name}さん！`);
};
sayHello("じゃけぇ");
