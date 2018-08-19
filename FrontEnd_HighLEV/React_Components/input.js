class LiveInput extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        userinput : ""
      }
      this.userInputChange = this.userInputChange.bind(this)
    }
  
    userInputChange(event){
      console.log(event.target.value);
      this.setState({
        userinput : event.target.value
      })
    }
    render(){
      return(
        <input type="text" name="title" value={this.state.userinput} onChange={this.userInputChange}/>
      )
    }
  }