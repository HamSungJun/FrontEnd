/*
    Hoisting : 변수 혹은 함수와 같은 선언들을 최상단으로 위치시킨다.
    그러나 코드의 위치와 메모리의 위치는 동일하다.
    
    초기화는 반드시 변수사용전에 이루어 져야 한다.
*/ 

Hello();

function Hello() {
    console.log('Hello');
}


num = 6;
console.log(number + num);
// NaN

var num;
var number = 13;

console.log(num);
// num => 13

