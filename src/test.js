// 空值合并运算符 '??'
let firstName = null;
let lastName = undefined;
let nickName = 'Supercoder';
// 显示第一个已定义的值：
console.log(firstName ?? lastName ?? nickName ?? '匿名'); // Supercoder
let firstName1 = null;
let lastName1 = undefined;
console.log(firstName1 ?? lastName1);
