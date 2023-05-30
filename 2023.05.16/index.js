// push: 배열 끝에 요소 추가
// pop: 배열 끝에 요소 제거
// unshift : 배열 앞에 요소 추가
// shift: 배열 앞에 요소 제거
// 위에 있는 거 다 특정요소를 삭제하지 못함
// slice(n,m) : n부터 (m-1) 까지 반환 - 인자 하나만 넣어도 되긴함

// let test = [];
// test = [33,33,54,98];

// object - 키와 값의 형태로 이루어짐 , 중괄호를 활용
// 접근방법 1. 대괄호를 사용 student["koreascore"]
// 접근방법 2. 점.연산자 활용 student.kor 
// key 값에 쌍따옴표,홑따옴표 모두 사용 가능
// 사용할 경우 key의 값에 띄어쓰기를 할 수 있다
// 호출  console.log("plus_대괄호 사용")


// key 값은 kor


// let 말고 const로 줌 (예시는)

let rapClass = {
    seungcheol:{
        birth:
        '1995-08-08',
        age:
        29   
    },
    wonwoo:{
        birth:
        '1996-07-17',
        age:
        28
    },
    vernon:{
        birth:
        '1982-02-18',
        age:
        26,

    }

    }

let vocalClass ={
    seungkwan:{
        birth:
        '1998-01-16',
        age:
        26
    },
    dk:{
        birth:
        '1997-02-18',
        age:
        27
    }

    }
let danceClass={
    dino:{
        birth:
        1992-02-11,
        age:
        25,
    hosi:{
        birth:
         1996-06-10,
        age:
        28,
    }
    
        

    }

}
let 버논생일 = window.prompt("버논의 생년월일을 쓰시오");
let 버논나이 = window.prompt("버논의 나이를 입력하시오");
rapClass.vernon={
    date:
    버논생일,
    age:
    버논나이

}

// 원우의 생년월일 출력
console.log(rapClass.wonwoo.birth);

// 도겸의 나이 출력
console.log(vocalClass.dk.age);

// 버논의 생년월일과 나이 출력
console.log(rapClass.vernon);

// 버논
// vernonbirth = window.prompt('버논의 생년월일')
// vernonAge = window.prompt('버논의 나이');
// console.log(typeof vernonage);

// rapclass.vernon ={birth:vernonbirth, age:vernonage};
// rapclass.vernon ={birth:'1999-02-28', age:26};
// rapclass.vernon.age의 type은 number
// console.log(vernonbirth + ','+  vernonage);








    

    
    

















