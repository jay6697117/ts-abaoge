'use strict';
// // 1.any
// let noSure: any;
// console.log(`noSure 0:`, noSure)
// noSure = 'aaa';
// console.log(`noSure 1:`, noSure);
// noSure = 1111;
// console.log(`noSure 2:`, noSure);
// noSure = false;
// console.log(`noSure 3:`, noSure);
// 2.unknown
// let val:unknown;
// console.log(`val 0:`, val)
// val = 111;
// console.log(`val 1:`, val)
// val = new TypeError();
// console.log(`val 2:`, val)
// val = Symbol();
// console.log(`val 3:`, val)
// let valRoot: unknown;
// valRoot = 111;
// console.log(`valRoot:`, valRoot)
// let newVal1: any = valRoot; // 赋值给 any
// console.log(`newVal1:`, newVal1)
// let newVal2:unknown = valRoot; // 赋值给 unknown
// console.log(`newVal2:`, newVal2)
// let newVal3:string = valRoot; // TSError
// console.log(`newVal3:`, newVal3)
// // unknown 类型只能被赋值给 any 类型和 unknown 类型本身
// let val: any;
// // let val: unknown;
// val.foo.bar; // OK
// val.trim(); // OK
// val(); // OK
// new val(); // OK
// val[0][1]; // OK
// 将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的。通过将 any 类型改变为 unknown 类型，我们已将允许所有更改的默认设置，更改为禁止任何更改
// 3.Tuple
var str = 'aaa';
console.log('str', str);
