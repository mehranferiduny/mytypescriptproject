
function sum(a:number,b:number){
  return a+b;
}
console.log(sum(1,4));
console.log(sum(7,8));
// console.log(sum('1','4'));

let a;
let b=10;
let c='hello';
let d:string;
let g:boolean;
let r:number;
let z:string = 'hello';

r=b+b;
console.log(r);

console.log(typeof(a));

//!NaN
console.log(4 - 'hello');

//!infinity
console.log(0/2);
console.log(-0/2);


//!Any
let a1: any;
a1=2;
a1='hello'
a1 = false;

//!Arrays
let arr1=[1,"hii",false];
let arr2: number[]=[1,4,"hii"];
let arr3: Array<any>=[1,2,'hii'];
let arr4: Array<string>=[1,'hii'];
arr1.push('hello');
arr1.push(2);
arr2.push('sss');
console.log(arr1[1]);
console.log(arr1);
//!array in array
let images:number[][]=[[225,250,240],[325,346,125]]
console.log(images);




