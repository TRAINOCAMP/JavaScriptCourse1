// 定数moneyが定義されています。
const money = 100;
// 比較演算子で比較した結果を出力してみましょう。
// money >= 50 の結果をconsole.logでコンソール画面に出力
console.log(money >= 50);

// money < 30 の結果をconsole.logでコンソール画面に出力
console.log(money < 30);

//比較演算子を用いて、if文を作成してみましょう。
// ・定数moneyの値が50以上であるという条件のif文を作成してください。
//　 if文の中で、"お金は50円以上です。"とコンソール画面に出力
if (money >= 50){
    console.log("お金は50円以上です。");
}

// ・定数moneyの値が200以上であるという条件のif文を作成してください。
//　if文の中で、"お金は200円以上です。"とコンソール画面に出力
if (money >= 200){
    console.log("お金は200円以上です。");
}

// ・moneyの初期値を100の時と、200以上の時など初期値を変えてみて、正しく条件分岐ができているか確認してみてください。
