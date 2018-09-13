import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
// stateless React Component
// The Props is Pure, React Rule is that the input of props should not be changed by other computation
function DisplayName(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

// stateful React Component
class MyWatch extends React.Component{

  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleString()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(()=>{
      this.handleWatch();
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  handleWatch(){
    this.setState({
      time : new Date().toLocaleString()
    })
  }

  render(){
    return(
      <div>
        <h2>
          {this.state.time}
        </h2>
      </div>
    )
  }

}
const Header = (
  <div>
    <DisplayName name='Ham Sung Jun'/>
    <MyWatch />
  </div>
)

ReactDOM.render(Header,root);