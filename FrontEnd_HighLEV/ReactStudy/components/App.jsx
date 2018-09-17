import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

const root = document.getElementById('root');
// stateless React Component

class App extends React.Component{
  render(){
    return(
      <div>
        <BasicRouter />
      </div>
    )
  }
}

const BasicRouter = () => {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h1>Topics</h1>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering With React</Link></li>
    </ul>
    <ul>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
    </ul>
    <ul>
      <li><Link to={`${match.url}/props-v-state`}>Props v state</Link></li>
    </ul>

    <Route path={`${match.url}/:topicid`} component={Topic}/>
    <Route exact path={match.url} render={()=>{<h3>plz select a topic</h3>}}/>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicid}</h3>
  </div>
)

ReactDOM.render(<App />,root);