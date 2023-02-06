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

interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ['1', '2', '3'];
console.log('arr :>> ', arr);

interface Names {
  [x: string]: number;
}
const obj: Names = { a: 1, b: 2, c: 3 };
console.log('obj :>> ', obj);
