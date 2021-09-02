function greet(param: string) {
  return 'hello, ' + param;
}

console.log(greet('张金辉'));

let isDone: boolean = false;
console.log(`isDone:`, isDone);

let count: number = 10;
console.log(`count:`, count);

let myname: string = 'zzz';
console.log(`myname:`, myname);

const sym = Symbol();
console.log(`sym:`, sym);
const obj = {
  [sym]: 'lalala'
};
console.log(`obj:`, obj);
