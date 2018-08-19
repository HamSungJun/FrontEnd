class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkBoxGroup: {
          react: true,
          angular: false,
          polymer: false,
          vue: false
        }
      }
      this.checkBoxHandler = this.checkBoxHandler.bind(this)
    }
    checkBoxHandler(event) {
      console.log(event.target.value)
      let obj = Object.assign(this.state.checkBoxGroup)
      obj[event.target.value] = event.target.checked
      this.setState({checkBoxGroup : obj})
    }
  
    render(){
      return(
        <form>
          <input type="checkbox" value="react" checked={this.state.checkBoxGroup.react} onChange={this.checkBoxHandler}/>react
          <input type="checkbox" value="angular" checked={this.state.checkBoxGroup.angular} onChange={this.checkBoxHandler}/>angular
          <input type="checkbox" value="polymer" checked={this.state.checkBoxGroup.polymer} onChange={this.checkBoxHandler}/>polymer
          <input type="checkbox" value="vue" checked={this.state.checkBoxGroup.vue} onChange={this.checkBoxHandler}/>vue
        </form>
      )
    }
  }