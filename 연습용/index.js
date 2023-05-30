// document.write("<p>javascript는 재밌어");

// var num = 10;
// num = 20;

// console.log(num);

// var price = 1000;
// console.log(price);

// // string 문자 열
// /*

// */
// var myname = "테킷";
// console.log(myname);

// // boolean
// var istrue = true;
// console.log(istrue);
// var isfalse = false;
// console.log(isfalse);

// var a;
// console.log(a);

// var student = {
//   grade: 1,
//   school: "lion school",
// };
// console.log(student);
// console.log(typeof student);

// // 객체의 값 호출
// var gradeinfo = student.grade;
// console.log(gradeinfo);

// var key = Object.keys(student)[0];
// console.log(key);

// //객체에 속성 추가
// student.class = 3;
// console.log(student);

// console.log(student["grade"]);

// var teacher = new Object();
// var teacher = {};

// var name1 = "나멋사";
// var name2 = "나멋사";

// console.log(name1 == name2);

// var name3 = Symbol("나체킷");
// var name4 = Symbol("나체킷");

// console.log(name3 == name4);
// // 실행되는 컨텐츠에서 고유하다
// var myclass = {
//   [Symbol("나체킷")]: 1,
//   [Symbol("나체킷")]: 2,
// };

// // 산술연산자

// var a = 10;
// var b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// console.log(a);
// console.log(b);

// var c = 7;
// console.log(++c);
// // 하나 1을 올리게 됨

// // 대입연산자

// var d = 10;
// // d = 20;
// // console.log(d);

// console.log((d += 3));
// // d라는 변수에 d=3이라는 숫자를

// // 비교연산자

// console.log(2 == 2);
// console.log(2 == "2");

// console.log(2 === "2");

// console.log(2 != 2);
// console.log(2 != "2");
// console.log(2 !== "2");

// console.log(4 > 2);
// console.log(4 < 2);
// console.log(4 >= 2);
// console.log(4 <= 2);

// // 논리연산자
// /*
// 피연산자 중에 하나라도 참이면 참
// 논리곱
// 피연산자 모두가 참이여야 참
// 부정
// 피연산자의 boolean 값을 부정

// */

// console.log(!true);

// console.log(!5 > 4);

// console.log(typeof 1);
// console.log(typeof "1");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof Symbol());

// // 문자열 선언
// var greeting = "hello!";
// var farewell = "bye!";
// var myname = "테킷";

// var sentence = greeting + "/" + myname;
// console.log(sentence);

// console.log(farewell + 2);

// // 템플릿 리터럴
// var a = `안녕하세요
// 여러분:`;
// console.log(a);

// var price = 100;
// var b = "이 물건은" + price + "원 입니다";
// console.log(b);

// var c = `이 물건은 ${price}원 입니다`;
// console.log(c);

// var abc = "I am iron man";

// console.log(abc.indexOf("man"));
// console.log(abc.indexOf("I"));

// console.log(abc.slice(0, 5));

// console.log(abc.toUpperCase());

// var efg = "this is my car";
// efg.startsWith("th");
// console.log(efg.startsWith("th"));

// /* 배열할때 순서는 1이 아닌 0부처
//  */
// console.log(efg.includes("is"));

// var mbti = ["infp", "enfj", "intj"];
// /*/console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = "enfp";
// console.log(mbti.length);

// mbti[2]= 'istj';
// console.log(mbti[2]);

// console.log(mbti.length); */

// mbti.push("INTP", "ISTJ");
// console.log(mbti.push("INTP", "ISTJ"));

// // 스프레드 문법
// var newmbti = [...mbti, "INTP", "ISTJ"];
// console.log(mbti);
// console.log(newmbti);

// console.log(mbti.pop());
// console.log(mbti);

// //unshift()
// console.log(mbti.unshift("INTP", "ISTJ"));
// console.log(mbti);

// console.log(mbti.shift());
// console.log(mbti);

// console.log(mbti.slice(-1));

// // join 함수= 합치다
// console.log(mbti.join());
// console.log(mbti.join("-"));

// // sort
// console.log(mbti.sort());
// // reverse
// console.log(mbti.sort().reverse());

// var a = 2;
// // if (a > 2) {
// //   console.log("a>2");
// // } else {
// //   console.log("a<=2");
// // }

// // //

// var a = 0;

// // if..else if..else
// if (a>2){
//    console.log('a>2');
// } else if (a==2){
//    console.log('a=2');
// } else if(a==0){
//    console.log('a==0');
// } else if(a<2);{
//    console.log('a<2');
// }

// // switch

// var mbti = 'infp';
// var val;

// switch (mbti) {
//   case 'infp':
//       val='infp';
//       break;
//   case 'enfp':
//       val='enfp';
//       break;
//   case 'intj':
//       val = 'intj';
//       break;
//   default:
//     val = "유효한 값이 아닙니다";
// }

// console.log(val)
// ;

//  1.for

// for(var i=10; i>0; i--){
//    console.log(i);
// }

// for (var i=0; i<10; i++){
//    for(var j=0; j<10; j++){
//       console.log(`${i}-${j}`);
//    }
// }

// var flag = 10;

// while (flag>0) {
//    console.log(flag);
//    flag--;
// }

// var flag = 10;

// do{
//    console.log(flag);
//    flag--;
// }while(flag <0);

// try {
//    throw new Error("에러");

//    // 에러가 발생할 가능성이 있는코드
// } catch(error){
//    console.log("에러발생");
//    console.log(error);
//    // 에러가 발생했을 때 실행되는 코드
// }finally{
//    console.log("무조건 실행");

//    // 에러 발생 여부와 상관없이 무조건 실행
// }

// function multiplay(a, b) {
//   return a * b;
// }
// multiplay(10, 5);
// console.log(multiplay(10, 5));

// // 함수표현식
// var result = multiplay(435,24)
// console.log(multiplay(435,24));

// var multiply = function  clac (a, b) {
//   return a * b;
// };

// console.log(clac (10,5));



// var a = 10;

// while(true){
//    var a = 1000;
//    break;
// }

// console.log(a);


// g호이스팅


// console.log(word);

// word = "happy";

// console.log(word);

// var word;

// let
// let word;

// console.log(word);

// word = "happy";

// console.log(word);


// let a = 10;

// while(true){
//    let a = 1000;
//    break;
// }

// console.log(a);


// const b=2;

// console.log(b);



// const student = {
//    grade:1,
//    class:3
// };

// // student.grade = 2;

// st9udent = {
//    num: 201234,
//    grade: 2
// }
// console.log(student);

// 화살표 함수

// let plus = {a,b} => {
//    return a+b;
// };

// let plus = (a, b) => a + b;

// console.log(plus(2, 3));

// let print = word  =>{
//    console.log(word);
// };

// print("hello");

let myfunc = () => {
   return 1;
}

console.log(myfunc());



