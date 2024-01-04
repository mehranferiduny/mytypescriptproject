
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
// console.log(4 - 'hello');

//!infinity
console.log(0/2);
console.log(-0/2);


//!Any
let a1: any;
a1=2;
a1='hello'
a1 = false;

let zo:string=a1;
// a1.method();


//!Unknown
let b1:unknown;
b1=2;
b1="hii";
b1=false;

// let zx:string=b1;
// b1.method();

const value: unknown = "Hello World";
const someString: string = value as string;
const otherString = someString.toUpperCase(); // "HELLO WORLD"
console.log(otherString);

type Result =
  | { success: true; value: unknown }
  | { success: false; error: Error };

  function tryDeserializeLocalStorageItem(key: string): Result {
    const item = localStorage.getItem(key);
  
    if (item === null) {
      // The item does not exist, thus return an error result
      return {
        success: false,
        error: new Error(`Item with key "${key}" does not exist`),
      };
    }
  
    let value: unknown;
  
    try {
      value = JSON.parse(item);
    } catch (error:any) {
      // The item is not valid JSON, thus return an error result
      return {
        success: false,
        error,
      };
    }
  
    // Everything's fine, thus return a success result
    return {
      success: true,
      value,
    };
  }
  tryDeserializeLocalStorageItem("mehran")


//!Arrays
let arr1=[1,"hii",false];
// let arr2: number[]=[1,4,"hii"];
let arr3: Array<any>=[1,2,'hii'];
// let arr4: Array<string>=[1,'hii'];
arr1.push('hello');
arr1.push(2);
// arr2.push('sss');
console.log(arr1[1]);
console.log(arr1);
//!array in array
let images:number[][]=[[225,250,240],[325,346,125]]
console.log(images);


//!Tuples
let tupl:[number,string,boolean];
tupl=[24,'hello dash mehran',true]

let mmeb=tupl[1]
console.log(mmeb.substring(6));

//!object
let obj={name:"mehran", age: 24 ,id:1};
// console.log(obj.nam);

obj={name:'amo mehran',age:25,id:3}
obj.id=2;
console.log(obj);

let user:{
  name:string,
  age:number,
  isVerfay:boolean
}={
  name:'mehran',
  age:24,
  isVerfay:true

}
console.log(user);



//!enum


const enum HandelUser{
  ADMIN,
  USER,
  GUEST
}

const users=HandelUser.GUEST;
let admin:HandelUser=HandelUser.ADMIN;
console.log(admin);

