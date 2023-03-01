export default {};

//定义函数的三种方式
// // 1.func
// let addFn: (x: number, y: number) => number = (x: number, y: number): number => x + y;
// console.log('res :>> ', addFn(1, 2));
// // 2.interface
// interface Add1 {
//   (x: number, y: number): number;
// }
// let addFn1: Add1 = (x: number, y: number): number => x + y;
// console.log('res1 :>> ', addFn1(3, 4));
// // 3.type类型别名
// type Add2 = (x: number, y: number) => number;
// let addFn2: Add2 = (x: number, y: number): number => x + y;
// console.log('res2 :>> ', addFn2(5, 6));

//可选参数
// function foo(x: number, y?: number): number {
//   return y ? x + y : x;
// }
// foo(1, 2);

//默认参数
// function foo(x: number, y: number = 0, z: number, w = 10): number {
//   console.log(x, y, z,w);
//   return x + y + z + w;
// }
// console.log(foo(1, 2, 3));
// console.log(foo(1, undefined, 3));

// 剩余参数
// function foo(x: number, ...rest: number[]): number {
//   console.log(x, rest);
//   return rest.reduce((previous, current) => previous + current, x);
// }
// console.log(foo(1, 2, 3, 4));

//函数重栽overload
// 下例中，我们重复定义了多次函数 foo，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
function foo(...arr: Array<number>): number; //函数定义1
// function foo(...arr: Array<number>): number {
//   //函数实现1
//   return arr.reduce((pre, cur) => pre + cur);
// }
function foo(...arr: Array<string>): string; //函数定义2
// function foo(...arr: Array<string>): string {
//   //函数实现2
//   return arr.join('-');
// }
function foo(...arr: Array<any>): any {
  //函数实现最宽泛
  if (typeof arr[0] === 'number') {
    return arr.reduce((pre, cur) => pre + cur);
  } else if (typeof arr[0] === 'string') {
    return arr.join('-');
  }
}
console.log(foo(1, 2, 3));
console.log(foo('1', '2', '3'));
