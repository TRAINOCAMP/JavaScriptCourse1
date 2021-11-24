const member = 
[
  {// オブジェクト１
    name : "一郎",
    age : 25,
    gender : "男性",
    greet : ()=> {
      console.log("こんにちは！");
    }
  }
  ,
  {// オブジェクト２
    name : "ケイト",
    age : 30,
    gender : "女性",
    greet : ()=> {
      console.log("Hello！");
    }
  }
];

//オブジェクトが２つ定義されていますが、このオブジェクトを
//for文を使って順番にコンソール画面に出力してください。
//ただし、出力する形式は次の通りです。
//私は〇〇です。 〇〇の部分は、オブジェクト１のnameのプロパティ値を使います。
//年齢は△△です。△△の部分は、オブジェクト１のageのプロパティ値を使います。
//性別は□□です。□□の部分は、オブジェクト１のgenderのプロパティ値を使います。
//挨拶をオブジェクト１のgreetを使って画面に出力してください。
//同じ出力内容をオブジェクト２の内容でも行ってください。
for (let index=0; index<member.length; index++){
  console.log("私は" + member[index].name + "です。");
  console.log("年齢は" + member[index].age + "です。");
  console.log("性別は" + member[index].gender + "です。");
　member[index].greet();
}
