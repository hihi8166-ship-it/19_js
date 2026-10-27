// let a = 1;

// function foo() {
//   console.log(a);
// }
// function bar() {
//   console.log(a);
// }
// foo();
// bar();
// console.log(a);

// function foo() {      //실행안됨, a가 음영처리 되어있음
//   let a = 1;
// }
// console.log(a);

// if (true) {            //실행안됨, {}지역변수는 이 안에서만 실행가능함
//   let a = 1;
// }
// console.log(a);

// for (let i = 0; i < 10; i++) {          //실행안됨,
//   let a = 1;
// }
// console.log(a);
// console.log(i);

// function foo() {
//   console.log("foo");
// }
// function bar() {
//   foo();
//   console.log("bar");
// }
// bar();

// function foo() {
//   console.log("foo");
//   function bar() {
//     console.log("bar");
//   }
//   bar();
// }
// foo();

// if (true) {
//   function foo() {
//     console.log("bar");
//   }
// }
// foo();

// if (true) {
//   function foo() {
//     console.log("bar");
//   }
//   foo();
// }

// for (let i = 1; i < 10; i++) {
//   function bar() {
//     console.log("bar");
//   }
// }
// bar();

//블록, 함수 스코프
if (true) {
  var a = 1;
}
console.log(a);
