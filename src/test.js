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

// let user = {address:{street:1}}; // user 没有 address 属性
// console.log(user?.address?.street); // undefined（不报错）

/*
let user = null;
console.log(user); // null
console.log(user?.address); // undefined
console.log(user?.address.street); // undefined
 */
/*
let user = null;
let x = 0;
console.log(user?.sayHi(x++)); // undefined 没有 "user"，因此代码执行没有到达 sayHi 调用和 x++
console.log(x);; // 0，值没有增加
 */
/*
let userAdmin = {
  admin() {
    return "I am admin";
  }
};
let userGuest = {};

console.log(userAdmin.admin?.());; // I am admin
console.log(userGuest.admin?.());; // undefined 啥都没发生（没有这样的方法）
 */

// const obj = {
//   a:'a-111',
//   b:'b-222'
// }
// const key = 'a';
// console.log(obj.a);
// console.log(obj[key]);
/*
// 可选链 "?."
let key = 'firstName';
let user1 = {
  firstName: 'John'
};
let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

let user = {
  info: {
    name: 'zjh',
    age: 18
  },
  info1: null
};
delete user.info?.name; // 如果 user.info 存在，则删除 user.info.name
delete user.info1?.name; // 如果 user.info 存在，则删除 user.info.name
console.log('user', user);
 */

// 我们可以使用 ?. 来安全地读取或删除，但不能写入
// 可选链 ?. 不能用在赋值语句的左侧。
/*
let user = null;
user?.name = "John"; // Error，不起作用
// 因为它在计算的是：undefined = "John"
console.log('user', user)
 */

// 总结
// 可选链 ?. 语法有三种形式：
// obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
// obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
// obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined。
