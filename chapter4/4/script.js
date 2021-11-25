//配列の要素を順番に出力するしてみましょう。
//定数 fruitsが定義されていて５つの文字列が代入されています。
const fruits = ["オレンジ", "リンゴ", "バナナ", "パイナップル", "キュウイ"];
for(let index=0; index<fruits.length; index++){
  console.log(fruits[index]);
}

//配列の要素の、最初と最後の値は出力しないようにfor文を改造してみましょう。
for(index=1; index<fruits.length-1; index++){
   console.log(fruits[index]);
}


