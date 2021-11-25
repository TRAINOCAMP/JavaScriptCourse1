//定数 checkOddを定義します。
//関数を作成して定数に代入します。(アロー関数式で記述： function()の代わりに ()=>で記述 )
//関数の引数にnumberを追加します。
//関数の中でnumberが偶数かを判定して、
//偶数の場合はtrue, 奇数の場合はfalseを戻り値として返します。
const checkOdd = (number) =>{
　return number %2 === 1;
};

//関数checkEvenを呼び出して実行します。
//引数は2の場合と、引数が3の場合で、２回関数を実行します。
//関数の実行結果のコンソール画面に出力します。
console.log(checkOdd(2));
console.log(checkOdd(3));
