// console.log("1번");
// console.log("2번");
// console.log("3번");

// setTimeout(function () {
//   console.log("2번!");
// }, 3000);
// console.log("1번!");

// setTimeout(function () {          // 1번부터 3초마다 실행, 만약 3초 후부터 실행하고 싶으면 맨하단 console 삭제하면 됨
//   console.log("2번!");
//   setTimeout(function () {
//     console.log("3번!");
//     setTimeout(function () {
//       console.log("4번!");
//     }, 3000);
//   }, 3000);
// }, 3000);
// console.log("1번!");

// let num = 1;      // interval 로 하는 방법
// console.log(num + "번!");
// const timer = setInterval(function () {
//   num++;
//   console.log(num + "번!");
//   if (num === 4) {
//     clearInterval(timer);
//   }
// }, 3000);

// setTimeout(() => {            // 위를 다른방법으로 가능
//   console.log("2번!");
// }, 3000);
// console.log("1번!");

// function orderCoffee(coffee, time) {
//   setTimeout(() => {                    // 일정 시간이 지난 후 함수 실행 예약
//     console.log(`${coffee} 제조 완료`);
//   }, time);
// }
// orderCoffee("달콤한 커피", 4000);
// orderCoffee("레몬 티", 2000);
// orderCoffee("시원한 커피", 3000);

//
function double(num, cb) {
  setTimeout(() => {
    const doubleNum = num * 2;
    cb(doubleNum);
  }, 1000);
}
double(10, (res) => {
  console.log(res);
});
console.log("마지막");
