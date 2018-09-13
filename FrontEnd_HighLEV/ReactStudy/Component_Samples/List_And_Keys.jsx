import React from 'react';

function NumberList(props) {
  const listItems = props.numbers.map((element) => {
    return(
      <li key={element}>{element}</li>
    )
  })

  return listItems;
}

export default NumberList;