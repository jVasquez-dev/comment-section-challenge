import React, { useState } from 'react'

import './styles.css'

export const VoteCounter = ({score}) => {

  const [points, setPoints] = useState(score);

  return (
    <div className='vote-container'>
      {/* <div className='controller'> */}
      <button 
        className='plain-button top-button'
        onClick={() => setPoints(points + 1)}
      >
        +
      </button>
        <p className='score'>{points}</p>
      <button 
        className='plain-button bottom-button'
        onClick={() => setPoints(points - 1)}
      >
        -
      </button>
      {/* </div> */}
    </div>
  )
};
