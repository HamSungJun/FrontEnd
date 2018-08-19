// 

class DateTimeNow extends React.Component{
    render(){
        let timeNow = new Date(Date.now()).toLocaleString();

        return(    
            <span>현재 시각은 {timeNow} {this.props.userName}</span>
        )
    }
}

// #JSX 엘리먼트를 변수에 담아 활용 중괄호를 통해 JSX내에서 자바스크립트를 이용가능하다.

// let HelloWorldReactElement = <h1>Hello World!</h1>

// class HelloWorld extends React.Component{
//     render(){
//         return(
//             <div>
//                 {HelloWorldReactElement}
//                 {HelloWorldReactElement}
//             </div>
//         )
//     }
// }

class TimeBlock extends React.Component{
    render(){
        return(
            <div>
                <a href="http://reactquickly.co">Time for React?</a>
                <DateTimeNow userName="Azat"/>
            </div>
        )
    }
}