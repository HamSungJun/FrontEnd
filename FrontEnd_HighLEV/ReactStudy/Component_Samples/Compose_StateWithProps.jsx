import React from 'react';
import ReactDOM from 'react-dom';

class Exp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user_exp : 0
    }
    this.handleExpGain = this.handleExpGain.bind(this);
    
  }

  componentDidMount(){
    this.handleExpGain(this.state,this.props)
  }

  handleExpGain(state,props){
    this.setState( (state,props) =>{
      return {
        user_exp : state.user_exp + props.expGained
      }
    })
  }

  render(){
    return(
      <div>
        <h1>EXP : {this.state.user_exp}</h1>
      </div>
    )
  }
}