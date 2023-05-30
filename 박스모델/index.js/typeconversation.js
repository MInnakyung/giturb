//파일명은 어떤 내용이 들어갔는지 알기 쉽게 작성하기

//prompt는 사용자에게 값을 받아옵니다!
let age = window.prompt("how old are you");

//typoeof 변수 => 변수의 type은 무엇일까요?
//prompt를 이용해서 받아온 값의 type을 console.log로 출력합니다
console.log(typeof age)



//현재 age는 string type 이다
age= age+1;
console.log(age);

//나는 22이라고 number로 입력했는데 string으로 출려됨


age=Number(age);


console.log(typeof age);

console.log("Happy birthda! you are ","years ")

//이어 출력하기
console.log("첫번째문장"+ "두번째문장"+ age + "세번째문장")

console.log(typeof age); //number

console.log(`첫번째 문장 $(age) 두번째 문장 세번째 문장`);

console.log(`ddddddd$(age2)`);

//사용자에게 입력받은 값은 무조건 string으로 출렴됨
// 그래서 +를 하게 되면 우리가 아는 덧셈연산이 되는 것이 아니라 string 이기 때문ㅇ

//string.
