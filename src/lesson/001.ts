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
/*
interface Padder {
  getPaddingString(): string;
}
class SpaceRepeatingPadder implements Padder {
  private numSpaces: number = 0;
  constructor(numSpaces: number = 0) {
    this.numSpaces = numSpaces;
  }
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(' ');
  }
}
const s: SpaceRepeatingPadder = new SpaceRepeatingPadder(11);
console.log('s:', s);
console.log(s.getPaddingString().length);

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(22);
console.log('padder', padder);

console.log('padder instanceof SpaceRepeatingPadder:', padder instanceof SpaceRepeatingPadder);
if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}
 */
// 4.4 自定义类型保护的类型谓词
/* function isNumber(x: any): x is number { // x is number 返回boolean
  console.log('x 1:', x, typeof x);
  return typeof x === 'number';
}

function isString(x: any): x is string { // x is string 返回boolean
  console.log('x 2:', x, typeof x);
  return typeof x === 'string';
}

console.log(isNumber(111));
console.log('--------------------');
console.log(isString('222'));
 */

// 五、联合类型和类型别名
// 5.1 联合类型
/*
const sayHello = (name?: string | undefined): void => {
  console.log('name', name);
};
sayHello('hello');
sayHello(undefined);
sayHello(); // 加 ？可以传空 其实也是undefined

// 字面量类型
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';
let str:EventNames =  'mousemove'
// 以上示例中的 1、2 或 'click' 'mousemove' 被称为字面量类型，用来约束取值只能是某几个值中的一个
 */

// 5.2 可辨识联合

enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: 'motorcycle'; // discriminant
  make: number; // year
}

interface Car {
  vType: 'car'; // discriminant
  transmission: CarTransmission; // 枚举类型当做一个​​联合类型：相当于 200 | 300
  // transmission: 200 | 300;
}

interface Truck {
  vType: 'truck'; // discriminant
  capacity: number; // in tons
}

const car: Car = { vType: 'car', transmission: 300 };
console.log('car', car);


type vehicle = Motorcycle | Car | Truck
