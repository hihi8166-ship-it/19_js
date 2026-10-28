// let arrA = [1, 2, 3];
// let arrB = [...arrA, 4, 5, 6];
// console.log(arrB);

// let objA = {
//   a: 1,
//   b: 2,
// };
// let objB = {
//   objA,
//   c: 3,
//   d: 4,
// };
// console.log(objB);

// let objA = {
//   a: 1,
//   b: 2,
// };
// let objB = {
//   ...objA,
//   c: 3,
//   d: 4,
// };
// console.log(objB);

// function func(a, b, c) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// func(...arr);

// function func(a, b, c) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// func(arr);

// function func(...rest) {
//   console.log(rest);
// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function func(param, ...rest) {
//   console.log(param);
//   console.log(rest);
// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// function func(param, ...rest) {      // rest 말고 a 로 써도 됨
//   console.log(param);
//   console.log(...rest);              // ...은 언팩킹 개념
// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function func(...rest, param) {    //...rest는 마지막까지 받기 때문에 뒤에 넣어야 됨
  console.log(param);
  console.log(rest);
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);