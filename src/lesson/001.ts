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

let str: any = 'hello';
// let num:number = (<string>str).length // “尖括号” 语法
let num: number = (str as string).length;
console.log('num', num);
