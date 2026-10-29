// 젤 뒷요소 추가  , push는 맨 뒷에 함수를 추가한 후 전체 길이인 4를 반환함. 즉, 넣고 갯수를 반환까지 하는 함수
// let food = ["짜장면", "피자", "치킨"];
// const a = food.push("탕수육");
// console.log(food);
// console.log(`새로운 배열의 길이 : ${a}`);
// console.log(a);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육", "라자냐");
// console.log(food);
// console.log(`새로운 배열의 길이 : ${newLength}`);

// pop (젤 뒷요소 삭제)
// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);

// shift (맨 앞요소 삭제)                       // 추가하는 함수 unshift/push 는 반환값이 배열의 길이
// let food = ["짜장면", "피자", "치킨"];          // 삭제하는 함수 shift/pop 은 반환값이 삭제한 요소
// const removedItem = food.shift();             // 원하는 위치에 추가/삭제하는 splice는 반환값이 삭제한 요소들의 배열로 나옴
// console.log(removedItem);
// console.log(food);
// console.log(`새로운 배열의 길이 : ${removedItem}`);

// splice (중간요소 삭제(1,1)) 인덱스 1부터 인덱스 1까지 삭제. 1만 입력하면 인덱스 1부터 모두 삭제.
// let food = ["짜장면", "피자", "치킨", "탕수육"];
// const removedItem = food.splice(1, 1);
// console.log(removedItem);
// console.log(food);

//중간요소 첨부는?
// let food = ["짜장면", "피자", "치킨", "탕수육"];
// const a = food.splice(2, 0, "햄버거"); //인덱스 2번 위치부터 작업, 기존요소 0개 삭제, 새롭게 추가
// console.log(food);
// console.log(a);

// let food = ["짜장면", "피자", "치킨", "탕수육"];
// const a = food.splice(1, 1);
// console.log(food);
// console.log(a);

// let food = ["짜장면", "피자", "치킨", "탕수육"];
// const removedItem = food.splice(1); // , 안쓰면 앞 숫자부터 끝까지 선택된다
// console.log(removedItem);
// console.log(food);

//unshift (맨앞요소 추가)
// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.unshift("갈비찜");
// console.log(newLength);
// console.log(food);
// console.log(`새로운 배열의 길이 : ${newLength}`);

//슬라이스
// Array.slice(Start, end);
// let arr = [1, 2, 3];
// const sliced = arr.slice(0, 2);
// console.log(arr);
// console.log(sliced);

// let arr = [1, 2, 3, 4, 5];
// const sliced = arr.slice(2);
// console.log(arr);
// console.log(sliced);
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));

//concat (이어붙이는 작업)
// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);
// console.log(arrC);
// console.log(arrA);
// console.log(arrB);

// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);
// console.log(arrC);
// console.log(arrA);
// console.log(arrB);

//순회 메서드
// function cb(item, idex. array) {
// }
// arr.forEach(cb)

// function cb(item, idx) {
//   console.log(`${idx}번째 요소 : ${item}`);
// }
// const arr = [1, 2, 3];
// arr.forEach(cb);

// const arr = [1, 2, 3];
// arr.forEach((item, idx) => {
//   console.log(`${idx}번째 요소 : ${item}`);
// });

// 탐색 메서드
//indexOf
// arr.indexOf(item, fromIndex);

// let arr = [1, 3, 5, 7, 1];
// console.log(arr.indexOf(5, 0)); // 1이 어딨는지 인덱스 0번부터 찾아라. 인덱스 0번째 1이 있으니 0을 출력함

// let arr = [1, 3, 5, 7, 1];
// console.log(arr.indexOf(1, -3));
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(4));

// let arr = [1, 3, 5, 7, 1];
// console.log(arr.includes(3));
// console.log(arr.includes("생선"));

// findindex
// function determine(item, idx, arr) {
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(determine);
// console.log(index);

// function determine(item, idx, arr) {
//   console.log(item);
//   console.log(idx);
//   console.log(arr);
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(determine);
// console.log(index);

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex((item) => (item % 2 === 0 ? true : false)); // return item % 2 === 0 ? true : false 와 같음
// console.log(index);             // 6은 인덱스 3 이므로 값이 3이 나옴

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];
// let index = arr.findIndex((item) => item.name === "이정환");
// console.log(index);

//아 덜썼어
// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];
// let index = arr.findIndex((item) => {
//     console.log(item);

// }

//     item.name === "이정환");
// console.log(index);

//find
// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" },
// ];
// let element = arr.find((item) => item.name === "이정환");
// console.log(element);

// filter
// let arr = [
//   { name: "이종원", hobby: "축구" },
//   { name: "이정환", hobby: "영화" },
//   { name: "신다민", hobby: "축구" },
//   { name: "김효빈", hobby: "노래" },
// ];
// let filteredArr = arr.filter((item) => item.hobby === "축구");
// console.log(filteredArr);

// // map (중요)
// let arr = [1, 2, 3, 4];
// let newArr = arr.map((item) => item * 3);
// console.log(newArr);

// sort
// let arr = ["b", "a", "c"];
// arr.sort();
// console.log(arr);

// join
// let arr = ["안녕", "나는", "이정환"];
// console.log(arr.join());
// console.log(arr.join("-"));

// reduce(중요), *-/+ 다됨. reduce는 하나로 줄인다는 의미
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((acc, item) => acc + item, 0);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];                  // 콘솔로그에 그대로 넣어도 값 동일함.
// console.log(arr.reduce((acc, item) => acc + item, 0));
