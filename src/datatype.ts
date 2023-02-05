// 1.原始类型
let bool: boolean = true;
let num: number = 111;
let str: string = 'hello';
// str = 123; // 不能将类型“123”分配给类型“string”。ts(2322)
// console.log('bool', bool);
// console.log('num', num);
// console.log('str', str);

//2.数组
let arr1: number[] = [1, 2, 3];
let arr2: (number | string)[] = [1, 2, '3'];
let arr3: Array<string> = ['1', '2', '3'];
let arr4: Array<number | string> = [1, '2', '3'];
// console.log('arr1 number', arr1);
// console.log('arr2 number | string', arr2);
// console.log('arr3 string', arr3);
// console.log('arr4 number | string', arr4);

//3.元组
let tuple: [number, number, number] = [1, 2, 3];
// console.log('tuple 0', tuple);
// console.log('tuple[2]', tuple[2]);
//实际开发强烈不介意这么使用
// tuple.push(4);
// console.log('tuple 1', tuple);
// console.log('tuple[2]', tuple[2]);
// console.log('tuple[3]', tuple[3]);
// const temp = tuple[3];
// console.log('temp', temp);

//3.函数
//定义函数类型
type FnType = (x: number, y: number) => number;
//函数具体实现
// let add: FnType = (a: number, b: number): number => a + b;
let add: FnType = (a, b) => a + b;
// const res = add(100, 200);
// console.log('res', res);

//4.对象
let obj: { a: number; b: string } = { a: 1, b: '2' };
// console.log('obj 0:', obj);
obj.a = 111;
// console.log('obj 1:', obj);

//5.symbol
let sym1: symbol = Symbol();
// console.log('sym1:', sym1);
let sym2: symbol = Symbol();
// console.log('sym2:', sym2);
// console.log('sym1 === sym2',sym1 === sym2);

// 6.undefined, null
let und: undefined = undefined;
let nul: null = null;
let num1: number | undefined | null = 111;
console.log('num1:', num1);
num1 = undefined;
console.log('num1:', num1);
num1 = null;
console.log('num1:', num1);

// 7.void
let noReturn1 = (): void => {
  return undefined;
};

let noReturn2 = () => {
  return undefined;
};

//8.any
let x;
x = 1;
x = '2';
x = [];
x = {};

//9.never
let err = (): never => {
  throw new Error('报错啦');
};

let endless = () => {
  while (true) {
    console.log('死循环');
  }
};
