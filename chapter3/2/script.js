//for文を使って1から10までの数値の合計値を求めて結果をコンソール画面に出力してみましょう。
//変数totalを定義して、数値の0を代入します。
let total = 0;

//for文を作成します。
//  変数countを宣言して初期値0で初期化する
//  条件式　countが10以下
//  変数の更新　countを+1を加算する
//for文の処理の中に、変数totalと 変数countの値を足して、変数totalに代入します。
for (let count = 0; count<=10; count++){
  total  = total  + count;
}

//for文の後に、totalの値をコンソール画面に出力します。
console.log("合計は" + total + "です。");


