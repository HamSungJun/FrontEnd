import React from 'react';
import PropTypes from 'prop-types';

class Me extends React.Component{

  constructor(props){

    super(props);
    this.state = {
      hungry : this.props.initialHungry,
      thirsty : this.props.initialThirsty
    }

  }

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


  decreasingHungry(){

    this.setState((state) => {
      return {
        hungry : (state.hungry-30)
      }
    })
    
  }

  decreasingThirsty(){
    this.setState((state) => {
      return {
        thirsty : (state.thirsty-50)
      }
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

Me.propTypes = {
  initialHungry : PropTypes.number,
  initialThirsty : PropTypes.number
}

Me.defaultProps = {
  initialHungry : "Initial Hungry Undefined",
  initialThirsty : "Initial Thirsty Undefined",
}

function Monitor(props) {
  return(
    <div>
      <h1>
        Hungry : {props.hungry}
      </h1>
      <h1>
        Thirsty : {props.thirsty}
      </h1>
    </div>
  )
}

Monitor.propTypes = {
  hungry : PropTypes.number,
  thirsty : PropTypes.number
}
Monitor.defaultProps = {
  hungry : "Monitor Component's hungry props Undefined",
  thirsty : "Monitor Component's thirsty props Undefined"
}

export default Me;
