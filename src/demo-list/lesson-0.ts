// function greet(param: string) {
//   return 'hello, ' + param;
// }

// console.log(greet('张金辉'));

// let isDone: boolean = false;
// console.log(`isDone:`, isDone);

// let count: number = 10;
// console.log(`count:`, count);

// let myname: string = 'zzz';
// console.log(`myname:`, myname);

// const sym: symbol = Symbol();
// console.log(`sym:`, sym);
// const obj: object = {
//   [sym]: 'lalala'
// };
// console.log(`obj:`, obj);

// const arr1: number[] = [1, 2, 3];
// console.log(`arr1:`, arr1);
// const arr2: string[] = ['a', 'b', 'c'];
// console.log(`arr2:`, arr2);
// const arr3: Array<number> = [4, 5, 6];
// console.log(`arr3:`, arr3);
// const arr4: Array<string> = ['d', 'e', 'f'];
// console.log(`arr4:`, arr4);

// enum Direction {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST = 100
// }
// console.log(`Direction:`, Direction);
// let dir: Direction = Direction.WEST;
// console.log(`dir:`, dir);

// enum Enumstr {
//   AAA = 'a11',
//   BBB = 'b22',
//   CCC = 'c33',
//   DDD = 'd44'
// }
// console.log(`Enumstr:`, Enumstr);
// let astr: Enumstr = Enumstr.AAA;
// console.log(`astr:`, astr);

// enum Enumstr {
//   AAA = 10,
//   BBB = 20,
//   CCC = 30,
//   DDD = 40
// }
// console.log(`Enumstr:`, Enumstr);
// console.log(`Enumstr['AAA']:`, Enumstr['AAA']);
// console.log(`Enumstr[40]:`, Enumstr[40]);
// let astr = Enumstr.AAA;
// console.log(`astr:`, astr);
// let anum = Enumstr[30]
// console.log(`anum:`, anum)

// const enum Enum {
//   AAA,
//   BBB,
//   CCC,
//   DDD
// }

// const aaa: Enum = Enum['AAA'];
// console.log(`aaa:`, aaa);

enum Enum {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F
}
console.log(`Enum:`, Enum);
console.log('-------------------');
enum Direction {
  NORTH = 'N',
  SOUTH = 100,
  EAST,
  WEST = 1000
}
console.log(`Direction:`, Direction);

// 通过观察，我们可以发现数字枚举相对字符串枚举多了 “反向映射”：
console.log(Enum['A']); //0
console.log(Enum[0]); // A
console.log(Direction[100]); // 'SOUTH'
console.log(Direction['SOUTH']); // 100
