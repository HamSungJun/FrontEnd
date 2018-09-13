import React from 'react';
import ReactDOM from 'react-dom';

class Me extends React.Component{

  componentDidMount(){
    this.hungryTimerID = setInterval(()=>{
      this.decreasingHungry();
    },1500)
    this.thirstyTimerID = setInterval(()=>{
      this.decreasingThirsty();
    },3000)
  }

  componentWillUnmount(){

    clearInterval(this.hungryTimerID);
    clearInterval(this.thirstyTimerID);

  }
  constructor(props){

    super(props);
    this.state = {
      hungry : this.props.initialHungry,
      thirsty : this.props.initialThirsty
    }

  }

  decreasingHungry(){
    this.setState({
      hungry : (this.state.hungry-10)
    })
  }
  decreasingThirsty(){
    this.setState({
      thirsty : (this.state.thirsty-50)
    })
  }

  render(){
    return(
      <div>
        <Monitor hungry={this.state.hungry} thirsty={this.state.thirsty} />
      </div>
    )
  }
}

function Monitor(props) {
  return(
    <div>
      <h1>Hungry : {props.hungry}</h1>
      <h1>Thirsty : {props.thirsty}</h1>
    </div>
  )
}

ReactDOM.render(<Me initialHungry={3000} initialThirsty={5000} /> , root);
  
