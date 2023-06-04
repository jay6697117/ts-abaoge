// // 空值合并运算符 '??'
// let firstName = null;
// let lastName = undefined;
// let nickName = 'Supercoder';
// // 显示第一个已定义的值：
// console.log(firstName ?? lastName ?? nickName ?? '匿名'); // Supercoder
// let firstName1 = null;
// let lastName1 = undefined;
// console.log(firstName1 ?? lastName1);
/*
let a  = null;
const b = 2;
console.log('a', a)
const result = a !== null && a !== undefined ? a : b;
console.log('result', result)
 */

// let user;
// console.log(user ?? "匿名"); // 匿名（user 未定义）
// let user1 = "John";
// console.log(user1 ?? "匿名"); // John（user 已定义）

// let height = 0;
// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

// let user = {}; // 一个没有 "address" 属性的 user 对象
// console.log(user?.address?.street); // Error!

/*
// 如果 document.querySelector('.elem') 的结果为 null，则这里不存在这个元素
let html = document.querySelector('.elem')?.innerHTML; // 如果 document.querySelector('.elem') 的结果为 null，则会出现错误
console.log('html', html);
 */
