export default {};
/*
enum Direction {
  NORTH = 1,
  SOUTH,
  EAST,
  WEST
}
// {
//   '0': 'NORTH',
//   '1': 'SOUTH',
//   '2': 'EAST',
//   '3': 'WEST',
//   NORTH: 0,
//   SOUTH: 1,
//   EAST: 2,
//   WEST: 3
// }
console.log('Direction', Direction)
let dir:Direction = Direction.EAST // 2
console.log('dir', dir)
 */

// const enum Direction {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST
// }

// let dir = Direction.NORTH; // var dir = 0 /* Direction.NORTH */;
// // console.log('dir', dir);
// // console.log('Direction', Direction);

// enum Enum {
//   A,
//   B,
//   C = 'C',
//   D = 'D',
//   E = 8,
//   F
// }
// console.log(Enum['A'])
// console.log(Enum[0])

// let unusable: void = undefined;
// console.log('unusable', unusable)

// let u: undefined = undefined;
// console.log('u', u)
// let n: null = null;
// console.log('n', n)

// const res = Object.create({})
// console.log('res', res)
// const res1 = Object.create(null)
// console.log('res1', res1)

// const obj:{} = {};
// console.log('obj', obj)
// // console.log(obj.a);
// console.log('---------');
// console.dir(obj);
// console.log('---------');
// obj.toString()

// function error(message: string): never {
//   throw new Error(message);
//  }
//  console.log(error('hello'));

// type Foo = string | number;

// function typeCheckByNever(foo: Foo) {
//   if (typeof foo === 'string') {
//     // 这⾥ foo 被收窄为 string 类型
//     console.log('foo 是string类型, 值是:', foo);
//   } else if (typeof foo === 'number') {
//     // 这⾥ foo 被收窄为 number 类型
//     console.log('foo 是number类型, 值是:', foo);
//   } else {
//     // foo 在这⾥是 never
//     const check: never = foo;
//     console.log('check', check);
//   }
// }

// typeCheckByNever('hello');
// typeCheckByNever(123);

// let str: any = 'hello';
// // let num:number = (<string>str).length // “尖括号” 语法
// let num: number = (str as string).length;
// console.log('num', num);

// 3.2 非空断言

// 1.忽略 undefined 和 null 类型
// function myFunc(maybeString: string | undefined | null) {
//   // Type 'string | null | undefined' is not assignable to type 'string'.
//   // Type 'undefined' is not assignable to type 'string'.
//   // const onlyString: string = maybeString; // Error
//   const ignoreUndefinedAndNull: string = maybeString!; // Ok
//   console.log('ignoreUndefinedAndNull', ignoreUndefinedAndNull);
// }

// myFunc(undefined);
// myFunc(null);
// myFunc('hello');

// 2.调用函数时忽略 undefined 类型
// type NumGenerator = () => number;
// function myFunc(numGenerator: NumGenerator | undefined) {
//   // Object is possibly 'undefined'.(2532)
//   // Cannot invoke an object which is possibly 'undefined'.(2722)
//   // const num1 = numGenerator(); // Error
//   const num2 = numGenerator!(); //OK
//   console.log('num2', num2)
// }
// myFunc(() => 111);
// myFunc(() => 222);

// 实际使用的过程中，要特别注意
// const a: number | undefined = undefined;
// const b: number = a!;
// console.log('b', b)

// 3.3 确定赋值断言
