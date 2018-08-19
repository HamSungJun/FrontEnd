// ReactDOM.render(<h1>Hello world!</h1>,document.getElementById('content'))
// ReactDOM.render(React.createElement('h1',null,'Hello World'),document.getElementById('content'))

// 두 구문은 JSX를 활용한 문법과 활용하지 않은 문법이다.

// JSX구문을 활용한 리엑트 엘리먼트를 변수에 할당하는 것도 가능하다.

let HelloWorldReactElement = <h1>Hello! World</h1>
ReactDOM.render(HelloWorldReactElement , document.getElementById('content'));

// JSX 활용을 위해 작성한 컴포넌트 클래스명은 대문자로 시작하도록 만든다.

class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1>1. Hello World</h1>
                <h2>2. Hello Wrold</h2>
            </div>
        )
    }
}

class HelloWorld extends React.Component{
    render(){
        return(
            React.createElement('div',null,
            React.createElement('h1',null,'1. Hello World'),
            React.createElement('h2',null,'2. Hello World'))
        )
    }
}

ReactDOM.render(
    React.createElement(HelloWorld,null),
    document.getElementById('content')
)