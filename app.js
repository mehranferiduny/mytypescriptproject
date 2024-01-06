function sum(a, b) {
    return a + b;
}
console.log(sum(1, 4));
console.log(sum(7, 8));
// console.log(sum('1','4'));
var a;
var b = 10;
var c = 'hello';
var d;
var g;
var r;
var z = 'hello';
r = b + b;
console.log(r);
console.log(typeof (a));
//!NaN
// console.log(4 - 'hello');
//!infinity
console.log(0 / 2);
console.log(-0 / 2);
//!Any
var a1;
a1 = 2;
a1 = 'hello';
a1 = false;
var zo = a1;
// a1.method();
//!Unknown
var b1;
b1 = 2;
b1 = "hii";
b1 = false;
// let zx:string=b1;
// b1.method();
var value = "Hello World";
var someString = value;
// const otherString = someString.toUpperCase(); // "HELLO WORLD"
// console.log(otherString);
//!Arrays
var arr1 = [1, "hii", false];
// let arr2: number[]=[1,4,"hii"];
var arr3 = [1, 2, 'hii'];
// let arr4: Array<string>=[1,'hii'];
arr1.push('hello');
arr1.push(2);
// arr2.push('sss');
console.log(arr1[1]);
console.log(arr1);
//!array in array
var images = [[225, 250, 240], [325, 346, 125]];
// console.log(images);
//!Tuples
var tupl;
tupl = [24, 'hello dash mehran', true];
var mmeb = tupl[1];
console.log(mmeb.substring(6));
//!object
var obj = { name: "mehran", age: 24, id: 1 };
// console.log(obj.nam);
obj = { name: 'amo mehran', age: 25, id: 3 };
obj.id = 2;
// console.log(obj);
var user = {
    name: 'mehran',
    age: 24,
    isVerfay: true
};
var users = 2 /* HandelUser.GUEST */;
var admin = 0 /* HandelUser.ADMIN */;
// console.log(admin);
//!function
var numSum = function (num1, num2) {
    return num1 + num2;
};
console.log(numSum(12, 7));
//!opshoin 
var singup = function (email, password, userType) {
    console.log("user by Emial:".concat(email, " and Password:").concat(password, "and Type:").concat(userType));
};
singup("m2hr4nus@gmail.com", 12345678);
//!defalet value 
var sinup = function (email, password, userType) {
    if (userType === void 0) { userType = 'panel'; }
    console.log("user by Emial:".concat(email, " and Password:").concat(password, "and Type:").concat(userType));
};
sinup("m2hr4nus@gmail.com", 12345678);
//!type method
var m = function (num1, num2) {
    var c = num1 + num2;
    return c;
};
console.log(m(11, 13));
//!blurting method
var cars = ['tiba', 'saina', '207', '206'];
cars.map(function (car) {
    console.log("car is ".concat(car));
    return "car is ".concat(car);
});
