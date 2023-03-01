export default {};

/* interface List {
  readonly id: number;//只读属性
  name: string;
  // [x: string]: any;//支持多个属性
  sex?: string; // 可选属性
  age?: number; // 可选属性
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log('value:', value);
    console.log('id-name:', value.id, value.name);
    console.log('----------------')
    if (value.age) {
      console.log('value.age:', value.age);
    }
    // value.id +=1;//只读属性是不能修改的
  });
}
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
};
render(result); */

/* interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ['1', '2', '3'];
console.log('arr :>> ', arr);

interface Names {
  [x: string]: any;
  [index: number]: number;
}
let obj: Names = { a: '1', b: '2', c: '3 ' };
obj = [1, 2, 3];
console.log('obj :>> ', obj);
 */

/*
//定义函数的三种方式
// 1.func
let addFn: (x: number, y: number) => number = (x: number, y: number): number => x + y;
console.log('res :>> ', addFn(1, 2));
// 2.interface
interface Add1 {
  (x: number, y: number): number;
}
let addFn1: Add1 = (x: number, y: number): number => x + y;
console.log('res1 :>> ', addFn1(3, 4));
// 3.type类型别名
type Add2 = (x: number, y: number) => number;
let addFn2: Add2 = (x: number, y: number): number => x + y;
console.log('res2 :>> ', addFn2(5, 6));
*/

// 混合类型的接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib(param: string):Lib {
  const lib: Lib = () => {};
  lib.version = '0.0.1';
  lib.doSomething = () => {
    console.log(`${param} doSomething`);
  };
  return lib;
}

const inst = getLib('inst');
const inst1 = getLib('inst1');
console.dir(inst);
console.dir(inst1);
inst.doSomething();
inst1.doSomething();
console.log(inst === inst1);
