//下記のオブジェクトを２つ作成してください。
//オブジェクト１つ目は定数 object1に代入して、２つ目は定数object2に代入してください。
//関数はアロー関数式で記述してください。

//１つ目 名前は一郎、年齢25歳、性別は男性、挨拶はこんにちは！
const object1 = 
{
  name : "一郎",
  age  : 25,
  gender: "男性",
  greet : ()=> {
    console.log("こんにちは！");
  }
}

//２つ目 名前はケイト、年齢30歳、性別は女性、挨拶はHello！
const object2 = 
{
  name : "Kate",
  age  : 30,
  gender: "女性",
  greet : ()=> {
    console.log("Hello！");
  }
}

//コンソール画面に２つのオブジェクトの内容を出力してください。
console.log(object1);
console.log(object2);
