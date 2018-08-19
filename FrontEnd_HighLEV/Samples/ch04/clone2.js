class Clock extends React.Component{
    constructor(props){
        super(props)
        this.launchClock()
        this.state = {currentTime : new Date().toLocaleDateString('ko')}
    }
    launchClock(){
        setInterval(() => {
            this.setState({currentTime : new Date().toLocaleDateString('ko')})
        },1000)
    }
    render(){
        return(
            <DigitalTime currentTime={this.state.currentTime}></DigitalTime>
        )
    }
}

const DigitalTime = (props) => {
    return(
        <div>{this.props.currentTime}</div>    
    )
}