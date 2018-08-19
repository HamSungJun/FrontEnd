// 속성 접근 => this.props
// 상태 접근 => this.state
// 클래스 상태 설정은 constructor내부에서 선언하고
// this.setState() 함수를 통해 갱신한다.
// 상태변경은 반드시 this.setState()함수를 통해 하도록 하자.
// setState() 함수는 내부적인 콜백으로 render()를 실행한다.
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {currentTime: (new Date()).toLocaleString()}
  }
  launchClock() {
    setInterval(()=> {
      console.log('Updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000)
  }
  render() {
    console.log('Rendering Clock...')
    return <div>{this.state.currentTime}</div>
  }
}

// class Clock extends React.Component{
//   constructor(props){
//     super(props)
//     this.launchClock()
//     this.state = {currentTime : new Date().toLocaleDateString()}
//   }
//   launchClock() {
//     setInterval(()=>{
//       this.setState({currentTime : new Date().toLocaleDateString()})
//     },1000)
//   }
//   render(){
//     return(
//       <div>{this.state.currentTime}</div>
//     )
//   }
// }