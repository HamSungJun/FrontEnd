import React from 'react';

class LiveInput extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        userInput : ""
      };
      this.userInputChange = this.userInputChange.bind(this)
    }

    userInputChange(event){
      console.log(event.target.value);
      this.setState({
        userInput : event.target.value
      })
    }
    render(){
      return(
        <input type="text" name="title" value={this.state.userinput} onChange={this.userInputChange}/>
      )
    }
  }
