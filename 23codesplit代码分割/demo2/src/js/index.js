import $ from 'jquery';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
console.log($);
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 7));
