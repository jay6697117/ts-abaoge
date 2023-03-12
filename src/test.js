'use strict';
var Direction;
Direction = Direction ? Direction : {};
(function (_Direction) {
  console.log('_Direction:', _Direction);
  console.log('_Direction === Direction:', _Direction === Direction);
  _Direction['NORTH'] = 'NORTH';
  _Direction['SOUTH'] = 'SOUTH';
  _Direction['EAST'] = 'EAST';
  _Direction['WEST'] = 'WEST';
})(Direction || (Direction = {}));
console.log('Direction 1:', Direction);
