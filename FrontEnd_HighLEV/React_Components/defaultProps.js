
class App extends React.Component{
   
    render(){
      return(
        <div>
          <Button label="start"/>
          <Button/>
          <Button/>
          <Button/>
        </div>
      )
    }
}

class Button extends React.Component{
 
    render(){
      return(
        <button>{this.props.label}</button>
      )
    }
  }
  
Button.defaultProps = {label : 'submit'}
Button.propTypes = {
    title : propTypes.string.isRequired
    
}