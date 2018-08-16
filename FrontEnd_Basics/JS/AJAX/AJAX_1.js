/*
    1.Asyncronous Javascript and Xml (Ajax) :

        비동기 방식의 XMLHttpRequest를 이용한다.
        text , xml , json 과 같은 데이터 형식을 주고받을 때 이용하고
        페이지의 전체 리프레쉬 없이 통신이 가능하다.

        - 서버로 부터의 응답을 받았을 때 주로 이용하는 상태 => onreadystatechange
        - 응답을 받았을 시 이용할 함수로 익명 핸들러를 등록한다.

        -http.open(method,url,async)  : http 요청 명세를 작성한다.
            > 비동기 옵션 false 로 설정하게 될경우 자바스크립트의 나머지 코드는
            응답을 받은 후에 수행된다. (동기방식)

        -http.send() : 해당 url로 작성한 http 요청 명세를 전송한다.

        -POST 메소드를 활용하여 서버측으로 데이터를 전송하는 경우에는
        http.setRequestHeader() 함수를 통해 MIME Type을 작성한다.

    2. 서버로부터 받은 응답에 대한 처리.

        - http.readystate == state
            state 는 0~5까지의 상수 상태를 가질 수 있다.
        - http.status == status
            status 는 200 , 404 와 같은 상태 코드를 갖는다.

        - http.responseText : 비동기 서버 응답에 대한 문자열 반환
        - http.responseXML : 서버 응답을 XMl 객체로 반환
*/

let REQEUST = new XMLHttpRequest;

REQEUST.onreadystatechange = () => {

    if(REQEUST.readyState == 4 && REQEUST.status == 200){
        console.log(REQEUST.responseText);    
    }

}

REQEUST.open('GET','https://pixabay.com/api/?key=5265020-b129e0842f414ced9114d5de5&q=teddy+bear&image_type=photo',true);

REQEUST.send();

