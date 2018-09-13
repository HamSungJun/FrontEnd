import React from 'react';
import ReactDOM from 'react-dom';
import NumberList from '../Component_Samples/List_And_Keys.jsx'
// import PropTypes from 'prop-types';

const root = document.getElementById('root');
// stateless React Component

const Header = (
  <div>
    <ul>
      <NumberList numbers={[1,2,3,4,5]} />
    </ul>
  </div>
)

ReactDOM.render(Header,root);