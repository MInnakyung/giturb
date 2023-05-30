// 4번
// 문제 1번
/*  고잉세븐틴을 촬영하던 승관이는 1972년생인 힙맨뱅의 띠가 궁금해졌다.
태어난 년도 / 12 = 나머지 가  0 = 원숭이, 1=닭, 2=개, 3=돼지, 4=쥐, 5=소, 6=호랑이, 7=토끼, 8용, 9뱀, 10말, 11양 이라고 할 때 prompt 함수를 이용하여
'태어난 년도를 입력하세요'를 입력하고 힙맨뱅의 띠를 구하는 함수를 만드시오. */

// 1번 답
// const year = Number(prompt('태어난 년도를 입력하세요'));
//     const T = year % 12
//     let result = ''

// if (T === 0) {result = '원숭이'}
// else if (T === 1) {result = '닭'}
// else if (T === 2) {result = '개'}
// else if (T === 3) {result = '돼지'}
// else if (T === 4) {result = '쥐'}
// else if (T === 5) {result = '소'}
// else if (T === 6) {result = '호랑이'}
// else if (T === 7) {result = '토끼'}
// else if (T === 8) {result = '용'}
// else if (T === 9) {result = '뱀'}
// else if (T === 10) {result = '말'}
// else if (T === 11) {result = '양'}
// alert(`${year}년에 태어났다면 ${result}띠 입니다`)

// // 1번답-2

// const year = Number(prompt('태어난 년도를 입력하세요'));
// const T = '원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양'.split(',')

// alert(`${year}년에 태어났다면 ${T[year%12]}띠 입니다`)

// 문제 2번
/* 
1 2
1 5
1 8
4 2
4 5
4 8
라는 결과값이 출력되는 for 문을 작성하시오
*/
for (let i = 1; i < 6; i += 3) {
  for (let j = 2; j < 9; j += 3) {
    console.log(i, j);
  }
}

// 문제 3번
/*
const sanrio = ['mymelody' , 'kuromi' , 'cinamoroll' , 'littletwinstar'];

sanrio 에서 littletwinstar 를 빼고싶다. 어떻게 해야할 지 코드로 구현하시오.

*/
const sanrio = ["mymelody", "kuromi", "cinamoroll", "littletwinstar"];
sanrio.pop();
console.log(sanrio);

// 5번
// undefined: 변수를 선언하고 값을 할당하지 않은 상태
// null: 변수를 선언하고 빈 값을 할당한 상태

// 6번


// 7번
