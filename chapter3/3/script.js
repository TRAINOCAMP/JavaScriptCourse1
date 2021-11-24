//for文を用いて1から100を順番に出力するプログラムがあります。
//このプログラムに以下の条件を追加してプログラムを完成させてください。（穴埋め問題）
//　条件：3の倍数のときは「3の倍数です」と出力してください。
//　　　　3の倍数で27のときは何も出力しません。(continue)
//　　　　50以上は出力をせずにループを終了してください。(break)

// for文を完成させてください
for (let number=1; number<=100; number++) {
  
　if (1　　　　　　){ // 50以上のとき
      ;// 出力せずに終了する
  }else if(number % 3 === 0){ // numberが3の倍数の時
    if (1　　　　　)// numberが27のとき
        ;	// スキップする
    console.log("3の倍数です");
  }else{
    console.log(number); // numberを出力する
  }
  
}

// for文を完成させてください
for (let number=1; number<=100; number++) {
  
　if (number >= 50){ // 50以上のとき
      break;// 出力せずに終了する
  }else if(number % 3 === 0){ // numberが3の倍数の時
    if (number === 27)// numberが27のとき
        continue;	// スキップする
    console.log("3の倍数です");
  }else{
    console.log(number); // numberを出力する
  }
  
}