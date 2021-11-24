let x = 1;// 1. グローバル変数
function testScope(){
  let x = 2;// 2.ローカル変数
　//console.log(x); // 【問題1】ここでコンソール画面には何が出力されるでしょうか？
　for (let x=3; x<10; x++){// 3.for文の初期化変数
  //  console.log(x);// 【問題2】ここでコンソール画面には何が出力されるでしょうか？
  }
}

testScope();
//console.log(x); // 【問題3】コンソール画面には何が出力されるでしょうか？
