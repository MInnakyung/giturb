/* const menu = window.prompt("A 가게의 메뉴 가격은 어떻게 되나요?");

switch (menu) {
  case "cola":
    console.log("콜라는 2000원입니다");
    break;
  case "milk":
    console.log("우유는 3000원입니다");
    break;
  case "coffee":
    console.log("커피는 1000원입니다");
    break;
  case " beer":
    console.log("맥주는 4000원입니다");
    break;

  default:
    console.log(menu + "은 없는 메뉴입니다");
    break;
} */

let product = window.prompt(
  '구매한 상품을 입력하세요.cola는 2천원, beer은 3천원,milk는 4천원, coffee는 천원입니다.'
);

switch (product) {
  case 'cola':
      price=2000;
    break;
  case 'beer':
      price=3000;
    break;
  case 'milk':
      price=4000;
    break;
  case 'coffee':
      price=1000;
    break;
  console.log('$(product)는 $(price)입니다');  
  

  default:
    console.log('$(product)는 팔지않습니다.');
    break;
}


