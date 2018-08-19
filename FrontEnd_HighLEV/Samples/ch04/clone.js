/*
    상태를 갖지 않는 리액트 컴포넌트는 함수로 선언.
    상태를 갖는 리액트 컴포넌트는 클래스로 선언.
*/

const Header = (props) => {
    return(
        <h1 {...this.props}>{this.props.text}</h1>
    )
}

ReactDOM.render(<Header text="Hello"/>,document.getElementById('root'))