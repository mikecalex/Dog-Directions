import React from 'react';

const StepTile = props => {

  let handleClick = () => {
    props.setSelectedStep(props.id)
  }

  return(
    <li onClick={handleClick} className={props.className}>{props.step}</li>
  )
}

export default StepTile;
