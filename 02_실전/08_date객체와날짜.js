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
