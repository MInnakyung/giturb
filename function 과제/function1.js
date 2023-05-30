var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';
// 변수가 아닌 상수임을 나타내기 위해 대문자로 하였습니다





var userinput = prompt('가위,바위,보!');

if(userinput !== '가위'&& userinput !== '바위' && userinput !== '보') {
    alert ('가위,바위, 보 중 하나를 입력해야 합니다');
}


var cominput;
// Math.random은 0부터 1 사이의 임의의 값을 리턴함
var rnd = Math.random();

if (rnd < 0.33) {
    cominput = 'SCISSORS';
}
else if(rnd<0.66){
    cominput = 'ROCK';

} else {
    cominput = 'PAPER';
}

switch(userinput){
    case SCISSORS:
        switch (cominput){
            case SCISSORS:
                alert('컴퓨터;' + cominput + '- 컴퓨터와 비겼습니다');
                break;
            case ROCK:
                alert('컴퓨터' + cominput + '-컴퓨터에게 졌습니다');
                break;
            default:
                alert('컴퓨터'+ cominput + '-컴퓨터에게 이겼습니다');
                break;
                
        }
    case ROCK:
        switch(cominput){
            case SCISSORS:
                alert('컴퓨터' + cominput + '-컴퓨터에게 이겼습니다');
                break;
            case ROCK:
                alert('컴퓨터' + cominput + '-컴퓨터에게 비겼습니다');
                break;
            default:
                alert('컴퓨터' + cominput + '-컴퓨터에게 졌습니다');
                breaks;
        }
    default:
        switch(cominput){
            case SCISSORS:
                alert('컴퓨터' + cominput + '-컴퓨터에게 졌습니다');
                break;
            case ROCK:
                alert('컴퓨터' + cominput + '-컴퓨터에게 이겼습니다');
                break;
            default:
                alert('컴퓨터'+ cominput + '-컴퓨터에게 비겼습니다');
                break;
        }
        break;
}






