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
