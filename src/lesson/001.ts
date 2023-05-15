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
// let x!: number; // 确定赋值断言
// initialize();
// console.log(2 * x); // Error Variable 'x' is used before being assigned.(2454)

// function initialize() {
//   x = 10;
// }

// 四、类型守卫

// 4.1 in 关键字
/*
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: number;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // console.log('Privileges: ' + emp.privileges); //  类型“Employee”上不存在属性“privileges”。ts(2339)
  // console.log('Start Date: ' + emp.startDate); //  类型“Admin”上不存在属性“startDate”。ts(2339)
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'hello', privileges: ['arr'] });
console.log('----------------------');
printEmployeeInformation({ name: 123, startDate: new Date() });
console.log('----------------------');
printEmployeeInformation({ name: 666, privileges: ['arr666'], startDate: new Date(1683879990978) });
console.log('----------------------');
 */
/*
function padLeft(value: string, padding: string | number | symbol) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  if (typeof padding === 'symbol') {
    return {[padding]:value};
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

const aaa = padLeft('hello', 1);
console.log(aaa);
const bbb = padLeft('hello', '1');
console.log(bbb);
const ccc = padLeft('hello', Symbol());
console.log(ccc);
 */
// 4.3 instanceof 关键字
