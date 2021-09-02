'use strict';
var _a;
function greet(param) {
  return 'hello, ' + param;
}
console.log(greet('张金辉'));
var isDone = false;
console.log('isDone:', isDone);
var count = 10;
console.log('count:', count);
var myname = 'zzz';
console.log('myname:', myname);
var sym = Symbol();
console.log('sym:', sym);
var obj = ((_a = {}), (_a[sym] = 'lalala'), _a);
console.log('obj:', obj);
