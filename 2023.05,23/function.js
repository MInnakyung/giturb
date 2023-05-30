// math.min - 주어진 숫자 중 가장 작은 값을 반환
// math.max(); -  주어진 숫자 중 가장 큰 숫자를 반환
// math.round(); - 입력값을 반올림한 수와 가장 가까운 정수
// math.floor(); - 주어진 숫자와 같거나 작은 정수중에 가장 큰 수를 반환
// math.random();- 0이상 1미만의 구간에서 근사적으로 균일한 부동소숫점 의사 난수를 반환

// Math.floor(math.random()*6);

let x = 0;

document.getElementById("minusBtn").onclick = function () {
    
   x= --x;

    document.getElementById("countlabel").innerHTML = x;
}

document.getElementById("resetBtn").onclick = function () {
    
    x = 0;
    

    document.getElementById("countlabel").innerHTML = x;


}

document.getElementById("plusBtn").onclick = function () {
    x = ++x;

    
    document.getElementById("countlabel").innerHTML = x;
}


