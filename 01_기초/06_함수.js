// 함수 선언
// (파이썬)
// def 함수명() :
//     수행할 코드

// 함수명()

// (자바)
// function 함수명(){
//     수행할 코드
// }
// 함수명()

// function greeting() {
//   console.log("안녕하세요!");
// }
// console.log("함수 시작 전");
// greeting();
// console.log("함수 종료");

// function getArea() {     //입력값과 리턴값이 없을때
//   let width = 10;
//   let height = 20;
//   let area = width * height;
//   console.log(area);
// }
// getArea();

// function getArea(width, height) {
//   let area = width * height;
//   console.log(area);
// }
// getArea(100, 200);

//함수 반환
// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }
// let result = getArea(10, 20);
// console.log(result);

// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료");
// }
// let result = getArea(10, 20);
// console.log(result);

//중첩 함수
// function greeting() {
//   function greetingWithName(name) {    //2번째로 실행
//     console.log(`hello! ${name}`);
//   }
//   let name = "이정환";                 //1번째로 실행
//   greetingWithName(name);
// }
// greeting();

//함수와 호이스팅
// func();              // 미리 호출해도 자바스크립트는 실행가능

// function func() {
//   console.log("hello");
// }

//함수 표현식
// let greeting = function () {
//   console.log("hello");
// };
// greeting();

// function greetFunc() {
//   console.log("hello");
// }
// greetFunc();
// let greeting = greetFunc;
// greeting();
// console.log(greeting());   //리턴값이 없어서 받는값 출력값이 없다.

// 콜백 함수
// function parentFunction(callBack) {
//     //이 의미가 함축되어 있음 ( let callBack = childFunc)
//   console.log("parent");
//   callBack();
// }
// function childFunc() {
//   console.log("child");
// }
// parentFunction(childFunc);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }
// repeat(5);

// function repeat(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log(idx + 1);
//   }
// }
// function repeatDouble(count) {
//   for (let idx = 0; idx < count; idx++) {
//     console.log((idx + 1) * 2);
//   }
// }
// repeatDouble(5);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }
// function origin(count) {
//   console.log(count);
// }
// repeat(5, origin);

// function repeat(count, callBack) {
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }
// function origin(count) {
//   console.log(count);
// }
// function double(count) {           //숫자쓰면 오류뜸
//   console.log(count * 2);
// }
// repeat(5, double);

// //화살표 함수
// let funcA = (매개변수) => 반환값;

// {} 안쓸려면 우측처럼 작성하면 됨.   function 함수이름() console.log()

// let greeting = (name) => `hello ${name}`;             // `` 안에는 변수넣어야 됨
// const greetingText = greeting("이정환");
// console.log(greetingText);

// if (isConfirm) {
//     onYes();
//     else {
//         onNo();
//     }
// }

// let isConfirm = true;                             // 모르겠다. 이해 안됨.
// function confirm(onYes, onNo) {
//   if (isConfirm) onYes();
//   else onNo();
// }
// confirm(
//   () => console.log("승인"),
//   () => console.log("거부"),
// );
