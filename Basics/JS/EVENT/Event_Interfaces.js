/*
    DOM Event Interface :
        -이벤트의 발생 -> 이벤트를 발생시킨 객체를 형성 -> 이벤트 핸들러 동작

        -이벤트 파라미터는 이벤트 발생시 등록된 핸들러에 첫번째 인자로 동적으로 전달된다.

        -이벤트를 등록 , 제거 , 발생시킬 수 있다.
*/ 

function EVT_HANDLER(event) {
    console.log(event);
}