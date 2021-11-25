//オブジェクトが２つ定義されていますが、このオブジェクトを順番に配列の中に定義します。
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

//定数memberを宣言して作成したオブジェクトを配列に代入します。
//配列の各要素と、要素内のオブジェクトが見やすいように改行を入れて書きます。
/*
例
const member = 
[
  {

  }
  ,
  {

  }
];
*/


// 解答
const member = 
[
  {
    name : "一郎",
    age : 25,
    gender : "男性",
    greet : ()=> {
      console.log("こんにちは！");
    }
  }
  ,
  {
    name : "ケイト",
    age : 30,
    gender : "女性",
    greet : ()=> {
      console.log("Hello！");
    }
  }
];

//配列のインデックス番号を使い、オブジェクト１の要素 ageをコンソール画面に出力します。
console.log(member[0].age);

//配列のインデックス番号を使い、オブジェクト２の要素 genderをコンソール画面に出力します。
console.log(member[1].gender);

//配列のインデックス番号を使い、オブジェクト１と２の関数greetを実行します。
member[0].greet();
member[1].greet();
