/*  #고선진 - object를 호출하는 2가지를 서술하시오 */

// object 호출하는 방법은
// 대괄호를 사용
// 점(.) 연산자를 이용

/* 아래의 값이 출력되는 for 문을 작성하시오 */
for (let i = 1; i < 5; i += 3) {
  for (let j = 2; j < 9; j += 3) {
    console.log(i, j);
  }
}
// 외부 루프는 i = 1로 시작합니다.
// 내부 루프는 j = 2로 시작하여 console.log(i, j)를 실행하여 1,2를 출력합니다.
// 내부 루프는 j를 3씩 증가시켜 j = 5가 되고 1,5를 출력하는 console.log(i, j)를 실행합니다.
// 내부 루프는 다시 j를 3씩 증가시켜 j = 8이 되고 1,8을 출력하는 console.log(i, j)를 실행합니다.
// 내부 루프 조건 j=11이 되면 j < 9가 더 이상 충족되지 않으므로, 내부 루프는 종료됩니다.
// 외부 루프는 i가 3씩 증가하여 i = 4가 됩니다.
// 내부 루프는 다시 j = 2로 시작하여 console.log(i, j)를 실행하여 4,2를 출력합니다.
// 내부 루프는 j를 3씩 증가시켜 j = 5가 되고 4,5를 출력하는 console.log(i, j)를 실행합니다.
// 내부 루프는 다시 j를 3씩 증가시켜 j = 8이 되고 4,8을 출력하는 console.log(i, j)를 실행합니다.
// 내부 루프 조건 j < 9가 더 이상 충족되지 않으므로, 내부 루프는 종료됩니다.
// 외부 루프 조건 i < 5가 더 이상 충족되지 않으므로 외부 루프가 종료됩니다.
/*
선택자 id와 class의 차이점을 서술하시오
선택자  id 와 class 차이점
id는 문서안에 1번만 사용해야 하고 class는 여러번 사용할 수 있다.
*/

/*
아래의 코드를 보고 출력값을 구하시오*/

let a = 3;
let b = 4;
let c = a++ + --b;

console.log(a, b, ++c);

// 출력값: 4,3,7

// email
// 이메일 입력창 만들기
var email = prompt("Enter your email address:");

// '@'찾기
var atIndex = email.indexOf('@');

//'@' 전까지 자르기
var emailPrefix = email.slice(0, atIndex);

// 출력하기
console.log(emailPrefix);


// 안녕하세요 




/* 아래의 array 내용을 모두 출력하는 for 문을 작성하시오(단 length를 사용하여야 한다) */
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


/*  1부터 100까지의 숫자 중 7의 배수들만을 합하여 그 결과를 출력하는 프로그램을 짜고자 한다
 아래의 빈칸을 채우시오 */
let sum = 0;
for (i = 0; i <= 100; i++) {
  for (let j = 1; j < 100; j += 7) {
    console.log(i + j);
  }
}

/* 사용자가 컴퓨터가 생각하고 있는 숫자를 맞추는 프로그램을 짜시오.
(예> 컴퓨터가 생각한 값 = 10, 사용자가 prompt를 이용해 5를 입력 > "up"출력)
 window.prompt("컴퓨터가 생각하고 있는 숫자를 맞히십시오"); */

// var comAnswer = Math.floor(Math.random() * 100) + 1;
// var count = 1;
// var userAnswer = -1;

// while (userAnswer != comAnswer) {
//   var input = prompt(
//     "컴퓨터가 1~100 중 랜덤숫자 하나를 정합니다. 이 숫자를 맞춰주세요."
//   );

//   userAnswer = parseInt(input); 1

//   if (userAnswer < comAnswer) {
//     alert("UP");
//   } else if (userAnswer > comAnswer) {
//     alert("DOWN");
//   } else {
//     alert("정답입니다" + count + "회만에 맞췄어요");
//     break;
//   }
//   count++;
// }

/* Object 를 이용해 학생 3명의 이름과 학점, 백분율을 작성하시고, 학점이 3.0 이상이고 백분율이
 90이상인 학생만을 출력하시오 */
 const students = [
  {
    name: 'mark',
    credits: 120,
    percentage: 95,
    grade: 3.5
  },
  {
    name: 'jeno',
    credits: 90,
    percentage: 88,
    grade: 2.7
  },
  {
    name: 'lele',
    credits: 110,
    percentage: 92,
    grade: 3.2
  }
];

const smartStudents = students.filter(student => student.grade >= 3.0 && student.percentage > 90);

smartStudents.forEach(student => {
  console.log(student.name);
});


/* object 를 이용해서 물건의 이름과 가격을 5개 입력하고 for문을 이용해서 가격이 가장 비싼 물건의 이름과
가격을 출력하시오 */

// object 이용해서 물건,가격 입력
const items = [
  { name: 'coke', price: 10 },
  { name: 'lemon', price: 20 },
  { name: 'milk', price: 15 },
  { name: 'chocolate', price: 25 },
  { name: 'potato', price: 30 }
];

// 최대 가격 및 해당 품목을 저장할 변수 초기화 시키기
let maxPrice = 0;
let maxItem = null;

// 배열의 각 항목에 대해 반복
for (let i = 0; i < items.length; i++) {
  // 현재 품목의 가격이 현재 최대값보다 높은지 확인
  if (items[i].price > maxPrice) {
    maxPrice = items[i].price;
    maxItem = items[i];
  }
}

//가장 비싼 상품과 가격을 프린트
if (maxItem !== null) {
  console.log('Most expensive item:', maxItem.name);
  console.log('price:', maxItem.price);
} else {
  console.log('No items found.');
}


/* 
object를 이용해서 경기날짜&상대팀명&상대팀점수&두산팀점수를 저장하고, prompt 를 이용해
사용자가 날짜를 입력하면 [?월 ?일 ?대 ?으로 ?한테 (이겼다/졌다)]를 출력하는 프로그램을 구현하시오.

*/
