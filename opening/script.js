console.log("Hello World!");

//alert("これはalertです。")

// 非推奨
//document.write('Hello World');
//document.write('<p>Hello World</p>');

// 推奨
let element = document.currentScript;
element.insertAdjacentHTML('beforebegin', '<p>Hello World!</p>');

// 'beforebegin'  element の前に追加
// 'afterbegin'   element の子要素の先頭に追加
// 'beforeend'    element の子要素の最後に追加
// 'afterend'     element の後に追加



let name = "トレノケート株式会社";// グローバル変数
const member = 
[ 
　{ 
    name : "トレノ一郎",  // インデックス番号[0]
　　greet : function() {
      console.log("こんにちは、" + this.name + "です！");
      console.log(name + "に勤めています。");
    }
  },
　{ 
    name : "トレノ花子",  // インデックス番号[1]
　　greet : function() {
      console.log("こんにちは、" + this.name + "です！");
      console.log(name + "に勤めています。");
    }
  }
];

for (let index=0; index<member.length; index++){
  member[index].greet();
}




