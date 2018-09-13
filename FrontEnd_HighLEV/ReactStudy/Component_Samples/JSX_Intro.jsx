import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const author = 'Ham Sung Jun';

const user = {
  firstName : 'Sung Jun',
  lastName : 'Ham'
}

function formatName(obj) {

  if(obj){
    return obj.lastName+" "+obj.firstName
  }
  else{

    let Errors = new Array();
    Errors.push(<h1>Error</h1>);
    Errors.push(<h1>Error</h1>);
    Errors.push(<h1>Error</h1>);
    
    return Errors;

  }
  
}