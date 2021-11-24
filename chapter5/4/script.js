//定数 checkOddを定義してください。
//関数を作成して定数に代入してください。(アロー関数式で記述： function()の代わりに ()=>で記述 )
//関数の引数にnumberを追加してください。
//関数の中でnumberが偶数かを判定して、
//偶数の場合はtrue, 奇数の場合はfalseを戻り値として返してください。
const checkOdd = (number) =>{
　return number %2 === 1;
};

//関数checkEvenを呼び出して実行してください。
//引数は2の場合と、引数が3の場合で、２回関数を実行してください。
//関数の実行結果のコンソール画面に出力してください。
console.log(checkOdd(2));
console.log(checkOdd(3));
