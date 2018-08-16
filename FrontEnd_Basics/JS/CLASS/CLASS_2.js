/*
    ES6에 도입된 'Class' 개념은 호이스팅을 지원하지 않기때문에 선언과 초기화가 먼저 이루어진후
    사용해야 한다.

    super()키워드는 부모 클래스를 상속받는 자식 클래스에 생성자가 존재 할 경우 부모클래스에 필요한 할당이나 함수 호출을 위해 존재합니다.
*/

class Person{
    
   

    add(a,b){
        console.log(this._name + '이(가) 덧셈을 수행합니다.');
        return (a+b);
    }

    sub(a,b){
        console.log(this._name + '이(가) 뺄셈을 수행합니다.');
        return Math.abs(a-b);
    }
    
    personInfo(){
        return ('이름 : '+this._name+' \n키 : '+this._tall);
    }

}

class upgradedPerson extends Person{
    constructor(name='noname',tall='null'){
        super(name,tall);
        this._name = name;
        this._tall = parseInt(tall);
    }
    mul(a,b){
        console.log('업그레이드 된 닝겐 ' + this._name + '이(가) 곱셈을 수행합니다.');
        return (a*b);
    }

    div(a,b){
        console.log('업그레이드 된 닝겐 ' + this._name + '이(가) 나눗셈을 수행합니다.');
        return (a/b);
    }
}

let James = new upgradedPerson('멍몽이','60');

console.log(James.personInfo());
console.log(James.add(10,5));
console.log(James.sub(10,5));
console.log(James.mul(10,5));
console.log(James.div(10,5));

