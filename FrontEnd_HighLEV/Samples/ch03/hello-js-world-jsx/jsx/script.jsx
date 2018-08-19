class HelloWorld extends React.Component {
  render() {
    return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
  }
}

ReactDOM.render(
  <div>
    <HelloWorld
      id='ember'
      frameworkName='Ember.js'
      title='A framework for creating ambitious web applications.'/>
    <HelloWorld
      id='backbone'
      frameworkName='Backbone.js'
      title='Backbone.js gives structure to web applications...'/>
    <HelloWorld
      id='angular'
      frameworkName='Angular.js'
      title='Superheroic JavaScript MVW Framework'/>
  </div>,
  document.getElementById('content')
)

{/* <h1 {...this.props}></h1> 해당 문법은 ReactDOM에서 인스턴스 생성시 전달받은 모든 속성 데이터를 가져온다. */}

class LoginLogout extends React.Component{
  render(){
    if(this.props.user.session){
      return(
        <a href="/logout">logout</a>
      )
    }
    else{
      return(
        <a href="/login">login</a>
      )
    }
  }
}