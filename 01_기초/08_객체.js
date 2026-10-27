// 객체 생성과 프로퍼티(속성)

// let objA = {}            // 객체 리터럴 문법
// let objB= new Object();  // 객체 생성자 문법

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30,
// };
// console.log(person);

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };
// console.log(person);

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.like cat);    // 이거는 에러뜸
// console.log(person["like cat"]);

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };
// person.gender = "male";
// person["nickname"] = "winterlood";
// console.log(person.gender);
// console.log(person["nickname"]);

// 프로퍼티 수정
// let cat = {
//   name: "치삼이",
//   age: 4,
// };
// cat.name = "치삼";
// cat["age"] = 5;

// console.log(cat);

//프로퍼티 삭제
// let cat = {
//   name: "치삼이",
//   age: 4,
// };
// delete cat.name;
// delete cat["age"];

// console.log(cat);

// const obj = {
//   a: 1,
//   b: "text",
// };
// obj.a = 2;
// obj.c = undefined;

// console.log(obj);

// const obj = {
//   a: 1,
//   b: "text",
// };
// obj.a = 2;
// obj.c = undefined;
// delete obj.b;
// console.log(obj);

// let obj = {
//   a: 1,
// };
// console.log(obj.b);
// console.log(obj.b === undefined);

// let isPropertyExist = obj.b !== undefined;
// console.log(isPropertyExist);

// let person = {
//   age: 10,
// };
// let isNameExist = "name" in person;
// console.log(isNameExist);

// 매서드 (객체의 함수)
// let person = {
//   //객체
//   name: "이정환", // 요소1(속성)
//   sayHi: function () {
//     // 요소2(속성)
//     console.log("안녕");
//   },
// };
// person.sayHi();
// person.name();      /오류
// console.log(person);   /오류
