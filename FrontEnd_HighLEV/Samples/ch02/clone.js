let h1 = React.createElement('h1',null,'Hello World');
// 리액트 엘리먼트 인스턴스를 생성하고
ReactDOM.render('div',document.getElementById('content'),h1,h1);
// ReactDOM.render()함수를 통해 실제 DOM에 반영한다.

/* 
3번째 인자부터 나열되는 파라미터가 문자열이 아니라면 텍스트 노드로 취급되지 않고
   컨테이너의 자식요소로 취급한다.
*/

