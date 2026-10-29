// let date = new Date();
// console.log(date);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// let Jan02_1970 = new Date(1000 * 60);       // 1분
// console.log(Jan02_1970);

// let Jan02_1970 = new Date(1000 * 60 * 60); // 1시간
// console.log(Jan02_1970);

// let Jan02_1970 = new Date(1000 * 60 * 60 * 24); // 24시간(하루)
// console.log(Jan02_1970);

// let Jan02_1970 = new Date(1000 * 60 * 60 * 24); // 24시간(하루)
// console.log(Jan02_1970.getTime());

// let date = new Date();
// console.log(date.getTime()); //지금시간

// let date1 = new Date("2000-10-10/00:00:00");
// let date2 = new Date("2000/10/10/00:00:00");
// let date3 = new Date("2000.10.10/00:00:00");
// let date4 = new Date("2000 10 10/00:00:00");
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);

// let date1 = new Date(2000, 10 - 1, 10, 0, 0, 0, 0);
// let date2 = new Date(2000, 9, 10);
// console.log("1:", date1);
// console.log("2:", date2);

//타임스탬프로 날짜 생성하기
// let date = new Date(2000, 9, 10);
// let timeStamp = date.getTime();
// console.log(timeStamp);
// let dateClone = new Date(timeStamp);
// console.log(dateClone);

// date객체에서 날짜 요소 얻기
//연도 반환
// let date = new Date(2000, 9, 10);
// console.log(date.getFullYear());

// //월반환
// let date = new Date(2000, 9, 10);
// console.log(date.getMonth());

//일 반환
// let date = new Date(2000, 9, 10);
// console.log(date.getDate());

//요일 반환 (일요일 : 0부터 시작, 토요일은 6)
// let date = new Date(2000, 9, 10);
// console.log(date.getDay());

//
// let date = new Date(2000, 9, 10);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// date 객체의 날짜 요소 수정하기
// 연도 수정(setFullYear)
// let date = new Date(2000, 9, 10);
// date.setFullYear(2021);
// console.log(date);

//월 수정(setMonth) 중요
// let date = new Date(2000, 9, 10);
// date.setMonth(10);
// console.log(date);

//일 수정(setDate)
// let date = new Date(2000, 9, 10);
// date.setDate(10);
// console.log(date);

// 시,분,초 수정
// let date = new Date(2000, 9, 10);
// date.setHours(1);
// date.setMinutes(1);
// date.setSeconds(1);
// console.log(date);

//date 객체 출력하기
//toString
// const today = new Date(2000, 9, 10, 22);
// console.log(today);
// console.log(today.toString());

//toDateString
// const today = new Date(2000, 9, 10, 22);
// console.log(today);
// console.log(today.toDateString());

//toLocaleString, toLocaleDateString
// const today = new Date(2000, 9, 10, 22);
// console.log(today.toLocaleString());

//date 객체 응용하기
// n월씩 이동하기
function moveMonth(date, moveMonth) {
  const curTimestamp = date.getTime(); // 날짜를 1970년 1월1일 0초부터 경과한 밀리초 숫자로 변환
  const curMonth = date.getMonth(); // 날짜에서 월을 가져온다. (1월:0, 12월:11), 즉, 2000.10.10의 결과는 9

  const resDate = new Date(curTimestamp); // 새로운 날짜 객체 생성(앞에서 저장한 날짜숫자)
  resDate.setMonth(curMonth + moveMonth); // 새로 만든 날짜.날짜의 월일을 변경(기존 월 + 이동할 개월 수)
  return resDate; // 함수에서 결과를 돌려준다 변경된 날짜 객체
}
const dateA = new Date("2000-10-10"); // "2000-10-10" 만들고 출력
console.log("A: ", dateA);
const dateB = moveMonth(dateA, 1); // dateA에서 1개월 뒤의 날짜를 구하고 그 결과를 dateB에 저장
console.log("B: ", dateB);
const dateC = moveMonth(dateA, -1); // dateA에서 1개월 전의 날짜를 구하고 그 결과를 dateC에 저장
console.log("C: ", dateC);
