//オブジェクトが２つ定義されています。
const object1 = 
{
  name : "一郎",
  age  : 25,
  gender: "男性",
  greet : ()=> {
    console.log("こんにちは！");
  }
}
const object2 = 
{
  name : "ケイト",
  age  : 30,
  gender: "女性",
  greet : ()=> {
    console.log("Hello！");
  }
}

//オブジェクトの中身を次のように変更してみましょう。
//オブジェクト１の年齢ageの数値と、オブジェクト２の年齢ageの数値を次の順番で交換します。
//オブジェクト１の年齢ageを、ローカル変数age1に代入します。
//オブジェクト２の年齢ageを、オブジェクト１の年齢ageに代入します。
//ローカル変数age1を、オブジェクト２の年齢ageに代入します。
let age1 = object1.age;
object1.age = object2.age;
object2.age = age1;

//コンソール画面に、オブジェクト１とオブジェクト２の年齢を出力します。
console.log(object1.age);
console.log(object2.age);

//オブジェクト１とオブジェクト２の関数を呼び出します。
object1.greet();
object2.greet();

