// let arr = [1, 2, 3, 4, 5];
// for (let idx = 0; idx < 4; idx++) {
//   console.log(arr[idx]);
// }

// let arr = [1, 2, 3, 4, 5];
// const len = arr.length;
// console.log(len);

// let food = ["짜장면", "피자", "치킨"];
// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };
// const keyArr = Object.keys(person);
// console.log(keyArr);

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };
// let keyArr = Object.keys(person);
// for (let key of keyArr) {
//   console.log(key);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };
// let keyArr = Object.keys(person);
// for (let key of keyArr) {
//   let value = person[key];
//   console.log(key);
// }

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };
// const valueArr = Object.values(person);
// console.log(valueArr);

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };
// const valueArr = Object.values(person);
// for (let value of valueArr) {
//   console.log(value);
// }

let person = {
  name: "이정환",
  age: 25,
  location: "경기도",
};
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
