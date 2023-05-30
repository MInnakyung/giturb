let username = "Na minkyung"

console.log(username.length);

//우리가 입력한 이름에 따라 출력되는 문자는 달라짐
console.log(username.charAt(0)); 
console.log(username.charAt(3)); 
console.log(username.charAt(5)); 

//indexOf
console.log(username.indexOf(`e`));
//우리가 입력한 문장에서 `e`를 찾는데, 가장 마지막 그거를 출력
//-1 은 username에 없다고 보시면 됩니다.
console.log(username.lastIndexOf(`e`));

//indexofsms 앞에서부터 해당되는 문자를 찾습니다
//그런데, 뒤에서부터 해당 문자를 찾고 싶으면 last를 붙여서 ㄱㄱ

console.log(username.toUpperCase()); //모든 문자를 다 대문자로 만들어줌
console.log(username.toLowerCase()); // 모든 문자를 다 소문자로 만들어줌

//trim 중간공백을 제외하고 앞이나 뒤의 공백을 제거해줌
let ttestname = "     min  "

let fullname = "Na minkyung";
let firstname;
let lastname;

firstname = fullname.slice(0,fullname.indexOf(``));
console.log(`firstname;`+ firstname);
lastname = fullname.slice(fullname.indexOf(``)+1);
console.log(`lastname;` +lastname);

var str = `자바스크립트`;
var result1 = str.slice(0,2);








